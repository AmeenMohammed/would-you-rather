import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render(){
    const { authedUser } = this.props
    return(
      <Router>
      <div>
        {authedUser === null?(
          <Route render={()=>(
            <Login />
          )}/>
          
        ):(
          <Route exact path='/'/>
        )}
        
      </div>
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
