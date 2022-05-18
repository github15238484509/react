import React from 'react'
import { useNavigate, useLocation, useParams,useMatch } from 'react-router-dom';
export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let match = useMatch("a");
  console.log(navigate);
  console.log(location);
  console.log(params);
  console.log(match);
  return (
    <div>Login</div>
  )
}
