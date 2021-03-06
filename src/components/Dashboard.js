import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDetails from './QuestionDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {

  state = {
    showUnanswered: true,
  }
  showUnansweredQuestions = () => {
    this.setState(() => ({ showUnanswered: true }))
  }
  showansweredQuestions = () => {
    this.setState(() => ({ showUnanswered: false }))
  }
  render () {
    const { showUnanswered } = this.state
    const { unansweredIds, answeredIds } = this.props
    const unansweredQuestionsClass = showUnanswered ? 'activeQuestions' : ''
    const answeredQuestionsClass = showUnanswered ? '' : 'activeQuestions'
    const questionsIds = showUnanswered ? unansweredIds : answeredIds
    console.log(unansweredIds)
    return (
      <div className='container'>
        <table className='table dashboard'>
          <tbody>
          <tr>
          <th className='unanswered'><h3 className={unansweredQuestionsClass} onClick={this.showUnansweredQuestions}>UnAnswered Questions</h3></th>
          <th>< h3 className={answeredQuestionsClass} onClick={this.showansweredQuestions}>Answered Questions</h3></th>
          </tr>
          </tbody>
        </table>
      {/* <div className="row sub-page-menu dashboard">
        <div className="col-xs-6 unanswered">
        </div>
        <div className="col-xs-6 answered">
        </div>
    </div> */}
      <div>
        <ul>
          {questionsIds.map((id) => (
            <QuestionDetails key={id} id={id}/>
            ))}
        </ul>
        </div>
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