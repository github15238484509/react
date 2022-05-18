import React, { useEffect } from 'react'
import { useNavigate, useLocation, useParams,useMatch } from 'react-router-dom';
export default function Course(props) {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let match = useMatch("a");
  console.log(navigate);
  console.log(location);
  console.log(params);
  console.log(match);
  useEffect(() => {

  })
  return (
    <div onClick={() => {
      navigate("/login",{
        state:465
      })
    }}>Course</div>
  )
}
