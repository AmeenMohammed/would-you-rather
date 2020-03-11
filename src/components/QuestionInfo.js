import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class QuestionPage extends Component {
  render() {
    const { noMatch, showContent, results } = this.props

    if (showContent === false) {
      return null
    }

    if (noMatch === true) {
      return <p>Not Found</p>
    }

    return (
      <div>
        { results.answeredQuestion === true
          ? <p>show results</p>
          :  <p>show answer</p>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users, loadingBar }, props) {
  const { id } = props.match.params
  const question = questions ? questions[id] : undefined
  const noMatch = question === undefined
  const results = noMatch ? {} : formatQuestion(question, users[question.author], authedUser)

  return {
    noMatch,
    results,
    showContent: loadingBar ? (loadingBar.default === 0) : false,
  }
}

export default connect(mapStateToProps)(QuestionPage)