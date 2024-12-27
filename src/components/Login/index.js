import {Component} from 'react'
import {CgProfile} from 'react-icons/cg'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', isChecked: false, showError: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onFailure = errorMsg => {
    this.setState({showError: errorMsg})
  }

  onSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30}) // Use consistent naming
    history.replace('/') // Redirect to the home page
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)

    if (response.ok) {
      const data = await response.json()
      this.onSuccess(data.jwt_token) // Use the correct property name
    } else {
      const data = await response.json()
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isChecked, showError} = this.state
    const isButtonEnabled = username.length !== 0 && password.length !== 0

    return (
      <div className="loginBackground">
        <div className="loginForm">
          <img
            className="logo"
            src="https://res.cloudinary.com/duajungih/image/upload/v1731829794/Logo_qbffkn.jpg"
            alt="website logo"
          />
          <form className="formFrame" onSubmit={this.onSubmitForm}>
            <div className="inputContainer">
              <label htmlFor="username" className="inputLabel">
                Username
              </label>
              <div className="inputWrapper">
                <CgProfile className="inputIcon" />
                <input
                  value={username}
                  onChange={this.onChangeUsername}
                  id="username"
                  className="inputBox"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="inputContainer">
              <label htmlFor="password" className="inputLabel">
                Password
              </label>
              <div className="inputWrapper">
                <img
                  src="https://res.cloudinary.com/duajungih/image/upload/v1733467122/lock-circle_mspxvd.svg"
                  className="inputIcon"
                  alt="password"
                />
                <input
                  id="password"
                  value={password}
                  onChange={this.onChangePassword}
                  className="inputBox"
                  type={isChecked ? 'text' : 'password'}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="checkboxContainer">
              <input
                id="showPassword"
                type="checkbox"
                checked={isChecked}
                onChange={this.togglePasswordVisibility}
              />
              <label htmlFor="showPassword" className="checkbox">
                Show Password
              </label>
            </div>
            <button
              type="submit"
              className="loginButton"
              disabled={!isButtonEnabled}
              style={{
                backgroundColor: isButtonEnabled ? '#088C03' : '#ccc',
              }}
            >
              Login
            </button>
          </form>
          {showError && <p className="errorMessage">{showError}</p>}
        </div>
      </div>
    )
  }
}

export default Login
