import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import { push } from 'connected-react-router'
import { useDispatch } from "react-redux";

// import { intitServer } from "../server/index"


let initProcess = async () => {
  console.log("init process");
}

export default function () {

  const [state, setState] = useState({
    count: 1
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (state.count == 3) {
      dispatch(push(routes.STARTSETTING));
    }

    if (state.count == 1) {
      setInterval(() => {
        setState({
          ...state,
          count: state.count++
        });
      }, 1000);
    }
  });


  return (
    <div>
      App Starting... {state.count}
      {/* {state} */}
      <Link to={routes.STARTSETTING}>Starter</Link>
    </div>
  )
}



