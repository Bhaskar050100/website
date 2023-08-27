import {Component} from 'react'

import './index.css'

class Registration extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      }

      onChangeFirstName = event => {
        this.setState({firstname: event.target.value})
      }

      onChangeLastName = event => {
        this.setState({lastname: event.target.value})
      }

      onChangeEmailId = event => {
        this.setState({email: event.target.value})
      }
    
      onChangePassword = event => {
        this.setState({password: event.target.value})
      }
    
      submitForm = async event => {
        event.preventDefault()
        const {firstname,lastname,email,password} = this.state
        const userDetails = {firstname, lastname, email, password}
        console.log(userDetails)
      }
    
      renderPasswordField = () => {
        const {password} = this.state
    
        return (
          <>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Enter your password"
            />
          </>
        )
      }

      renderEmailField = () => {
        const {email} = this.state
    
        return (
          <>
            <label className="input-label" htmlFor="emailId">
              E-MAIL
            </label>
            <input
              type="email"
              id="emailId"
              className="input"
              value={email}
              onChange={this.onChangeEmailId}
              placeholder="Enter your e-mail"
            />
          </>
        )
      }

      renderLastNameField = () => {
        const {lastname} = this.state
    
        return (
          <>
            <label className="input-label" htmlFor="lastname">
              LAST NAME
            </label>
            <input
              type="text"
              id="lastname"
              className="input"
              value={lastname}
              onChange={this.onChangeLastName}
              placeholder="Enter your lastname"
            />
          </>
        )
      }
    
      renderFirstNameField = () => {
        const {firstname} = this.state
    
        return (
          <>
            <label className="input-label" htmlFor="firstname">
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstname"
              class="input"
              value={firstname}
              onChange={this.onChangeFirstName}
              placeholder="Enter your firstname"
            />
          </>
        )
      }

      render() {
    
        return (
          <div className="row" id='Registration'>
            <form className="form-cont" onSubmit={this.submitForm}>
            <div className='user-image-cont'>
                <img
                src="https://res.cloudinary.com/drlhpyjlf/image/upload/v1693061894/2fa-authentication-password-secure-notice-login-verification-or-sms-with-push-code-message-shield-icon-in-smartphone-phone-and-laptop-computer-pc-flat-colorful-free-vector_qkfn6w.jpg"
                className="login-img w-100"
                alt="website login"
                />
            </div>
            <div className='user-details-cont'>
              <h1 className='text-center mt-3'>Registration</h1>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className="input-cont col-12 col-lg-6">{this.renderFirstNameField()}</div>
                    <div className="input-cont col-12 col-lg-6">{this.renderLastNameField()}</div>
                    <div className="input-cont col-12 col-lg-6">{this.renderEmailField()}</div>
                    <div className="input-cont col-12 col-lg-6">{this.renderPasswordField()}</div>
                  </div>
                </div> 
              <button type="submit" className="signup-button">
                Sign Up
              </button>
              </div>
            </form>
          </div>
        )
      }
}
export default Registration


  