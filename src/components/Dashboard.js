import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  state = {
    showUnanswered: true,
  }
  render () {
    const { showUnanswered } = this.state
    const { unansweredIds, answeredIds } = this.props
    const unansweredQuestionsClass = showUnanswered ? 'activeQuestions' : ''
    const answeredQuestionsClass = showUnanswered ? '' : 'activeQuestions'
    const questionsIds = showUnanswered ? unansweredIds : answeredIds
    console.log(unansweredIds)
    return (
      <div>
        <header>
          <ul>
            <li className={unansweredQuestionsClass} >
              Unanswered Questions
            </li>
            <li className={answeredQuestionsClass} >
              Answered Questions
            </li>
          </ul>
        </header>
        <ul>
          {questionsIds.map((id) => (
            <li key={id} >{id}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answeredIds = authedUser ? Object.keys(users[authedUser].answers) : []
  const unanswerIds = Object.keys(questions).filter((qid) => !answeredIds.includes(qid))

  return {
    unansweredIds: unanswerIds
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

    answeredIds: answeredIds
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)