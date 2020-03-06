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
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='question'>
          <div>
            <span>
              <strong>{name} asks: </strong>
              <em>Would you rather?</em>
            </span>
            <br/>
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
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id]

  return {
    details: question
      ? formatQuestion (question, users[question.author])
      : null
  }
}

export default connect(mapStateToProps)(QuestionDetails)