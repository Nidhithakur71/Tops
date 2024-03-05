import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
    <h1> MainPage </h1>
    <Link to={"/second"}><Button color='danger'>Click Here</Button></Link>
    </>
  )
}
