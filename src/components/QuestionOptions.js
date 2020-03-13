import React, {Component} from 'react'

class QuestionOptions extends Component {

  render() {
    const { name, optionOneText, optionTwoText, avatar } = this.props.results
    console.log('jsigsgs', this.props.results)

    return (
      <div className='question-details'>
        <div className='question-header'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className="question-title">
            {name} asks:
          </div>
        </div>
        <div className='question-info'>
          <h2>Would you rather? </h2>

          <form>
            <div>
              <label>
                <input
                  type="radio"
                  name="answer"
                  /> {optionOneText}
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name="answer"
                /> {optionTwoText}
              </label>
            </div>
            <br/>
            <button
                className='button'
                >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default QuestionOptions