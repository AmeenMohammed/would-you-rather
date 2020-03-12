import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {

  handleLogout = ()=> {
    const { history, dispatch } = this.props;
    dispatch(setAuthedUser(null));
    history.push('/');
  }

  render(){
    const { authedUser, user } = this.props
    const { name, avatarURL } = user
    return (
      <nav className="navbar navbar-expand-lg nav-bar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/' exact  className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/add'  className="nav-link">
              New Question
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/leaderboard' className="nav-link">
              Leader Board
            </Link>
          </li>
          { authedUser === null
              ? null
              : <li>
                  <span>{name} </span>
                  <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                  />

                  <a href='/' className='nav-link' onClick={this.logoutUser}>
                    Logout
                  </a>
                </li>}
        </ul>

        <hr />
      </nav>
    )
  }
}
function mapStateToProps ({authedUser, users}) {
  const user = authedUser ? users[authedUser] : {}

  return {
    user: user,
    authedUser,
  }
}
export default withRouter(connect(mapStateToProps)(Nav))

