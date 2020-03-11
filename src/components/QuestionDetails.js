import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'

class QuestionDetails extends Component {
  render() {
    const { details } = this.props
    if (details === null) {
      return <p>This question doesnt exist</p>
    }
    const {
      name, avatar, id, optionOneText, optionTwoText
    } = details

    return (
      <div className='question-details'>
        <div className='question-header'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
            />
            <div className='question-title'>
              {name} Asks:
              <em> Would you rather?</em>
            </div>
         </div>
         <div className='question-info'>  
            <p>
              {optionOneText} 
              <strong> or </strong>
              {optionTwoText}
            </p>
            <Link to={`/questions/${id}`} className='question-link'>
                View Poll
            </Link>
            </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]

  return {
    details: question
      ? formatQuestion (question, users[question.author], authedUser)
      : null
  }
}
export default connect(mapStateToProps)(QuestionDetails)