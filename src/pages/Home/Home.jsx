import React from 'react'
import { useDispatch } from 'react-redux'
import { randomNames } from '../../api'
import DisplayUsers from '../../components/userData/DisplayUsers'
import { addName, removeAllNames } from '../../Redux/NameSlice'
import "./style.css"

const Home = () => {

  const dispatch = useDispatch()

  const addNewName = (payload) => {
    dispatch(addName(payload));
  }

  const deleteAllNames = () => {
    dispatch(removeAllNames());
  }

  return (
    <div className="home">
      <button className='addNewName' onClick={() => addNewName(randomNames())} >Add a random name</button>
      <div className="container">
        <ul>
          <DisplayUsers />
        </ul>
      </div>
      <button className='removeAllNames' onClick={() => deleteAllNames()}>Clear all names</button>
    </div>
  )
}

export default Home