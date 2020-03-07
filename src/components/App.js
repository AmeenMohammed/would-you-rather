import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Nav from './Nav';
import LeaderBoard from './LeaderBoard'



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
          <Switch>
          <Route path='/' exact component={Dashboard} />
         <Route path='/leaderboard' exact component={LeaderBoard} />
         </Switch>
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
