import React from 'react'
import { Link } from 'react-router-dom'
import { Button} from "react-bootstrap";


function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="loginpage"><Button variant="warning">Login</Button></Link>
    </div>
  )
}

export default Home
