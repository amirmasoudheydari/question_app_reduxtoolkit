import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import {
  client
} from '../api/useAxios'


export const getCategory = createAsyncThunk('app/getCategory', async () => {
  const response = await client.get({
    url: '/api_category.php'
  })
  return response.data.trivia_categories
})




const initialState = {
  status: 'idle',
  category: {},
  entities: {
    question_category: '',
    question_difficulty: '',
    question_type: '',
    amount_of_questions: 10,
    score: 0
  }
}

const rootReducer = createSlice({
  name: 'app',
  initialState,



  reducers: {
    CHANGE_CATEGORY: (state, action) => {
      const category = action.payload
      state.entities.question_category = category
    },
    CHANGE_AMOUNT: (state, action) => {
      const amount = action.payload
      state.entities.amount_of_questions = amount
    },
    CHANGE_DIFFICULTY: (state, action) => {
      const difficulty = action.payload
      state.entities.question_difficulty = difficulty
    },
    CHANGE_SCORE: (state) => {
      const score = state.entities.score
      state.entities.score = score + 1
    },
    CHANGE_TYPE: (state, action) => {
      const type = action.payload
      state.entities.question_type = type
    },
    RESET_APP: (state) => {
      state = initialState
    },
  },
  
  
  
  
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.status = 'loading'
    },
    [getCategory.fulfilled]: (state, action) => {
      state.category = action.payload
      state.status = 'sucess'
    },
    [getCategory.rejected]: (state, action) => {
      console.log(action.payload)
      state.status = 'rejected'
    }
  }
})

export const {
  CHANGE_CATEGORY,
  CHANGE_AMOUNT,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  RESET_APP
} = rootReducer.actions

export default rootReducer.reducer