import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import Login from './Login'
// import Home from './Home';
// import Nav from './Nav';
// import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render(){
    const { authedUser } = this.props
    return(
      <Fragment>
        {/* {authedUser === null? null:( */}
          <Dashboard/>
        // )}
      </Fragment>
    )
  }

}
function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App);
