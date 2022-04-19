import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  RESET_APP
} from './actionTypes'

export const handelChangeCategory = (payload) => ({
  type: CHANGE_CATEGORY,
  payload
})

export const handelChangeAmount = (payload) => ({
  type: CHANGE_AMOUNT,
  payload
})

export const handelChangeDifficulty = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload
})

export const handelChangeScore = (payload) => ({
  type: CHANGE_SCORE,
  payload
})

export const handelChangeType = (payload) => ({
  type: CHANGE_TYPE,
  payload
})

export const handelResetApp = () => ({
  type: RESET_APP
})