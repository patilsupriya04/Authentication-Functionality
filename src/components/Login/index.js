// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setCookiesAndNavigateToHome = Token => {
    const {history} = props

    Cookies.set('jwt-token', Token, {expires: 30})
    history.replace('/')
  }

  const onSubmitForm = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setCookiesAndNavigateToHome(data.jwt_token)
    }
  }

  if (jwtToken !== true) {
    return <Redirect to="/" />
  }

  return (
    <div className="login">
      <h1 className="header">Please Login</h1>
      <button type="submit" onClick={onSubmitForm}>
        Login with simple creds
      </button>
    </div>
  )
}

export default withRouter(Login)
