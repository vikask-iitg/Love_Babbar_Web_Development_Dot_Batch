import React from 'react'
import { useNavigate } from 'react-router'

export const Labs = () => {
  const navigate = useNavigate();
  function clickHandler() {
    // Jumpt to support
    navigate("/support")
  }
  return (
    <div>
      <div>Labs</div>
      <button onClick={clickHandler}>Jump To Support</button>
    </div>
  )
}
