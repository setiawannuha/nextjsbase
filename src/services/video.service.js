import axios from "axios"

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNyZWF0ZWRfYXQiOiIyMDIzLTExLTIyVDAxOjI2OjI5LjY5NzY1MyswMDowMCIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRtMWZ5RmJtS0FKcC84TkNjRHNkUDlPT2lKY2k1T05VYXBFUXQxNnZYVkNGZnJtTlc0VllJdSIsImlhdCI6MTcwNTM4ODgwNX0.USlnu7gcXOkKvFnOiFuId_3_11jX7IwFHjlYKuWerz0"

export const getAll = async() => {
  try {
    const response = await axios.get('https://fazz-track-sample-api.vercel.app/video', {
      headers: {
        Authorization: token
      }
    })
    return [null, response.data.data]
  } catch (error) {
    return [error, null]
  }
}
export const create = async({body}) => {
  try {
    const response = await axios.post('https://fazz-track-sample-api.vercel.app/video', body, {
      headers: {
        Authorization: token
      }
    })
    return [null, response.data.data]
  } catch (error) {
    return [error, null]
  }
}