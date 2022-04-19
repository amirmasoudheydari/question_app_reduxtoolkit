import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


import {
  handelChangeCategory,
  handelChangeAmount,
  handelChangeDifficulty,
  handelChangeScore,
  handelChangeType
} from '../redux/actions'

export const SelectFieldes = props => {
  const [value, setValue] = useState('')
  const { lable, option } = props
  const dispatch = useDispatch()

  const handelChange = e => {
    setValue(e.target.value)
    
    switch (lable) {
      case 'Category':
        dispatch(handelChangeCategory(e.target.value))
        break;
        case 'Difficulty':
        dispatch(handelChangeDifficulty(e.target.value))
        break;
      case 'Type':
        dispatch(handelChangeType(e.target.value))
        break;
      default:
        break;
    }
  }

  return (
    <Box width="100%" mt={3}>
      <FormControl fullWidth size='small'>
        <InputLabel>{lable}</InputLabel>
        <Select
          label={lable}
          value={value}
          onChange={handelChange}
        >
          {option.map(({ id, name }) => {
            return (

              <MenuItem key={id} value={id}>{name}</MenuItem>
            )
          })}
        </Select>
      </FormControl >
    </Box>

  )
}
