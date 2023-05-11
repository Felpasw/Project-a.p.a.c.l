import { Outlet } from 'react-router-dom'
import NotAllowed from '../../pages/NotAllowed'

export default function AuthGuard() {

  if (sessionStorage.getItem("token")) {

    return (<Outlet />)

  }
  else {

    return (<NotAllowed />)

  }

}