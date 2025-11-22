import React from 'react'
import { useNavigate } from 'react-router'

export const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <div>Support</div>
      <button onClick={clickHandler}>Jump to About</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}
