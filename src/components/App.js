import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import Login from './Login'
// import Home from './Home';
// import Nav from './Nav';
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Nav from './Nav';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render(){
    const { authedUser } = this.props
    return(
      <Router>
      <Fragment>
        <Nav/>
      <LoadingBar />
        {authedUser === null? null:(
          <Dashboard/>
        )}
      </Fragment>
      </Router>
    )
  }

}
function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App);
