import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import client from '../api/useAxios'
import { handelChangeScore } from '../redux/actions'
import {decode} from 'html-entities';


const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score
  } = useSelector(state => state)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState({})
  const [questionUser, setQeustionUser] = useState({})
  const [option, setoption] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  const dispatch = useDispatch()


  let apiUrl = `/api.php?amount=${amount_of_questions}`

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }


  const getData = () => {
    client()
      .get(apiUrl)
      .then(res => setQuestions(res.data.results))
      .finally(() => setLoading(false))

  }

  useEffect(() => {
    getData()
  }, [])



  useEffect(() => {
    if (questions.length > 0) {
      setQeustionUser(questions[questionIndex])
    }
  if (questionUser.type) {
    let answers = [...questionUser.incorrect_answers]
    answers.splice(
      getRandom(answers.length),
      0,
      questionUser.correct_answer
    )
    setoption(answers)
  }

  }, [questionIndex, questionUser.correct_answer, questionUser.incorrect_answers, questionUser.length, questions])

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  const handelClick = (name) => {
    if (name === questionUser.correct_answer) {
      dispatch(handelChangeScore(score + 1))
    }
    console.log(questionIndex)
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    }else{
      navigate('/finalscreen')
    }

  }

  return (
    <Box>
      <Typography variant='h5'>
        {
          decode(questionUser.question)
        }
      </Typography>
      <Typography mt={5}>
        This is the questions: {questionIndex + 1}
      </Typography>
      {option.map((name, id) => {
        return (
          <Box key={id} mt={2}>
            <Button onClick={() => handelClick(name)} variant='contained'>
              {name}
            </Button>
          </Box>
        )
      })}
      <Box mt={5}>
        Score: {score} / {questions.length}
      </Box>
    </Box>
  )
}
