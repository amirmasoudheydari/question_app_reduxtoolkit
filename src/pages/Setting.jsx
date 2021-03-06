import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { SelectFieldes, TextFildeComp } from '../components'
export const Setting =  () => {
  const history = useNavigate()
  const {status, category} = useSelector(state => state)

  
  
  const handelSubmit = (e) => {
    e.preventDefault()
    history('/Questions')
  }

  const defecalteOptions = [
    { id: 'easy', name: 'easy' },
    { id: 'medium', name: 'medium' },
    { id: 'hard', name: 'hard' },
  ]

  const typeOptions = [
    { id: 'multiple', name: 'Multiple' },
    { id: 'boolean', name: 'Ture/False' }
  ]

  
    if (status === 'loading') {
      return (
        <Box>
          <CircularProgress size='60px' />
        </Box>
      )
    }


  return (
      <Box  >
        <Typography variant='h2' fontWeight='bold'  >
          Quize app
        </Typography>
        <form onSubmit={handelSubmit} >
          <SelectFieldes option={category} lable='Category' />
          <SelectFieldes option={defecalteOptions} lable='Difficulty' />
          <SelectFieldes option={typeOptions} lable='Type' />
          <TextFildeComp />
          <Box width="100%" mt={3}>
            <Button fullWidth variant="contained" type="submit">
              Get Started
            </Button>
          </Box>
        </form>
      </Box>
      )
}
