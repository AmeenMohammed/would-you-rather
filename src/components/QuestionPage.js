import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import QuestionValue from './QuestionValue'
import QuestionOptions from './QuestionOptions.js'

class QuestionPage extends Component {
  render() {
    const { noMatch, showContent, results, dispatch } = this.props

    if (showContent === false) {
      return null
    }

    if (noMatch === true) {
      return <p>Not Found</p>
    }

    return (
      <div>
        { results.answeredQuestion === true
          ? <QuestionValue results={results}/>
          : <QuestionOptions results={results} dispatch={dispatch}/>}
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