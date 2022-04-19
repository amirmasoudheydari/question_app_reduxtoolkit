import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  RESET_APP
} from './actionTypes'

const initState = {
  question_category: '',
  question_difficulty: '',
  question_type: '',
  amount_of_questions: 10,
  score: 0
}


const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload
      }

      case CHANGE_AMOUNT:
        return {
          ...state,
          amount_of_questions: action.payload
        }

        case CHANGE_DIFFICULTY:
          return {
            ...state,
            question_difficulty: action.payload
          }

          case CHANGE_SCORE:
            return {
              ...state,
              score: action.payload
            }

            case CHANGE_TYPE:
              return {
                ...state,
                question_type: action.payload
              }
            case RESET_APP:
              return {
                ...initState
              }
              default:
                return state
  }
}

export default reducer