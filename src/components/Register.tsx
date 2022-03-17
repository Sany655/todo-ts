import { Button, CircularProgress, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: null,
    password: "",
    submit: false
  })
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper elevation={4} style={{ textAlign: "center", padding: "50px" }}>
        <Stack spacing={2}>
          <Typography variant='h3'>Register</Typography>
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button
            variant="outlined"
            component="label"
          >
            Upload File
            <input
              type="file"
              accept="image/*"
              hidden
            />
          </Button>
          {
            form.submit ? (
              <Button variant="contained"><CircularProgress color="inherit" /></Button>
            ) : (
              <Button variant="contained" onClick={() => {
                setForm({ ...form, submit: true })
              }}>Submit</Button>
            )
          }
          <Typography variant="caption" display="block" gutterBottom>Already have an account? <Link to={'/login'}>Login</Link></Typography>
        </Stack>
      </Paper>
    </div>
  )
}

export default Register