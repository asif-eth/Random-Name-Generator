
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeName } from "../../Redux/NameSlice";
import "./style.css"

const DisplayUsers = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.name);

  const deleteName = (id) => {
    dispatch(removeName(id))
  }

  return (
    <ul>
      {data.map((user, id) => (
        <li className="listItems" key={id}>
            {user}
            <button className="deleteName" onClick={() => {deleteName(id)}} >Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayUsers;