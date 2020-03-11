import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatScores } from '../utils/helpers'
import Score from './Score'

class LeaderBoard extends Component {
  render () {
    const { userScores } = this.props

    return (
      <div>
        <h3 className="center"> Competition </h3>
        <div>
          {userScores.map((user) => (
            <Score key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }) {
  const userScoresNew = users ? Object.keys(users).map(id => formatScores(users[id], questions)) : []

  return {
    userScores:  userScoresNew.sort((a,b) => b.score - a.score)
  }
}
export default connect(mapStateToProps)(LeaderBoard)