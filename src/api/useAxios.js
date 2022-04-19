// import axios from 'axios'
// import {
//   useEffect,
//   useState
// } from 'react'

import axios from "axios";

// axios.defaults.baseURL = 'https://opentdb.com'

//  const UseAxios = ({
//   url
// }) => {
//   const [response, setResponse] = useState(null)
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     const fetchCategory = () => {
//       axios
//         .get(url)
//         .then(res => {
//           setResponse(res.data)
//           setLoading(false)
//         })
//         .catch(err => setError(err))
//     }

//     fetchCategory()
    
//   }, [url])

//   return ({
//     response,
//     error,
//     loading
//   })
// }

const Axios = () => {
  const client = axios.create({
    baseURL: 'https://opentdb.com'
  })

  return client
}
export default Axios