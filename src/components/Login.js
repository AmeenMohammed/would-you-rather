import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';
import { setAuthedUser } from '../actions/authedUser'

  const colourStyles = {
    option: (styles, { value }) => {
      const { avatarURL } = value
      return {
        background: `url(${process.env.PUBLIC_URL + avatarURL}) no-repeat`,
        backgroundSize: '40px',
        backgroundPosition: '10px 10px',

        height: '40px',
        ...styles,
        paddingLeft: '60px',
        paddingTop: '10px',
        margin: '3px 0'
      };
    },
  };
class Login extends Component{
    state = {
        user: null
      }
      handleSubmit = (e) => {
        e.preventDefault();
    
        const { dispatch } = this.props;
        const { user } = this.state;
        //todo : go to home
        if(user !== null) {
          dispatch(setAuthedUser(user))
        }
      }

    handleChange = (e) => {
        this.setState({
            user: e.value.id
        })
      }
    
    render(){
        const { users } = this.props

        return(
            <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
              <h3 className='center'>Welcome to Would You Rather App!</h3>
                <h3 className='center'>Please sign in to continue</h3>
                 <form onSubmit={this.handleSubmit}>
                     <Select
                         onChange={this.handleChange}
                         placeholder={'Select User'}
                         styles={colourStyles}
                         options={
                          Object.keys(users).map((id)=>(
                          {
                           value: users[id],
                           label: users[id].name,
                           }
                         ))
                      }
                     />
                    <button className='submit-btn'>Sign In</button>
                </form>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        )
    }
}
function mapStateToProps ({ users }) {
    return {
      users
    }
  }
  
export default connect(mapStateToProps)(Login)