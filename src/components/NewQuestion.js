import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'


class NewQuestion extends Component {

  state = {
   optionOne: '',
   optionTwo: '',
   toHome: false,
  }
  
  handleOptionOneChange = (e) => {
    const optionOneValue = e.target.value
    this.setState(() => ({
     optionOne: optionOneValue
    }))
  }
  handleOptionTwoChange = (e) => {
    const optionTwoValue = e.target.value
    this.setState(() => ({
     optionTwo: optionTwoValue
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))
  }
  render() {
    const { optionOne, optionTwo, toHome} = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Create New Question</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <input
            className='question-option'
            placeholder="First Option"
            value={optionOne}
            onChange={this.handleOptionOneChange}
          />
          <h4 className='center'>OR</h4>
          <input
            className='question-option'
            placeholder="Second Option"
            value={optionTwo}
            onChange={this.handleOptionTwoChange}
          />
          <button
            className='button'
            type='submit'
            disabled={optionTwo === '' || optionOne === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)