import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Paper elevation={4} style={{ textAlign: "center", padding: "50px" }}>
                <Stack spacing={2}>
                    <Typography variant='h3'>Login</Typography>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <Button variant="contained">Login</Button>
                    <Typography variant="caption" display="block" gutterBottom>Not have an account? <Link to={'/register'}>Register</Link></Typography>
                </Stack>
            </Paper>
        </div>
    )
}

export default Login