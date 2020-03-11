import React, { Component } from 'react'

class NewQuestion extends Component {

  render() {


    return (
      <div>
        <h3 className='center'>Create New Question</h3>
        <form className='new-question'>
          <input
                      className='question-option'

            placeholder="First Option"
          />
          <h4 className='center'>OR</h4>
          <input
            className='question-option'
            placeholder="Second Option"
          />
          <button
            className='button'
            type='submit'>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default NewQuestion