import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component{
    state = {
        user: ''
      }
      handleSubmit = (e) => {
        e.preventDefault();
    
        const { dispatch } = this.props;
        const { user } = this.state;
        //todo : go to home
        if(user !== '') {
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
                  <h3 className='center'>Sign In</h3>
                 <form onSubmit={this.handleSubmit}>
                     <Select
                         onChange={this.handleChange}
                         placeholder={'Select User'}
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