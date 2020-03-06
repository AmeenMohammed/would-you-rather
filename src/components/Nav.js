import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {

  handleLogout = ()=> {
    const { history, dispatch } = this.props;
    dispatch(setAuthedUser(''));
    history.push('/');
  }

  render(){
    const { avatar, name } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/' exact  className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to='/add'  className="nav-link">
              New Question
            </Link>
          </li>
          <li className="nav-item active">
            <Link to='/leaderboard' className="nav-link">
              Leader Board
            </Link>
          </li>
          <li className="nav-item active">
            <a className="nav-link" onClick={this.handleLogout}>
              Log out
            </a>
          </li>
        </ul>

        <hr />
      </nav>
    )
  }
}

export default withRouter(connect()(Nav));