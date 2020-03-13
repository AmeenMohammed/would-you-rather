import React, {Component} from 'react'
import {handleSaveAnswer} from '../actions/questions'

class QuestionOptions extends Component {
    state = {
        option: ''
      }
      submitAnswer = (e) => {
        e.preventDefault()
        const { results, dispatch } = this.props
        dispatch(handleSaveAnswer(results.id, this.state.option))
      }
    
      handleInputChange = (e) => {
        this.setState({
            option: e.target.value
        });
      };

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
                  value="optionOne"
                  checked={this.state.option === "optionOne"}
                  onChange={this.handleInputChange}
                  /> {optionOneText}
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="optionTwo"
                  checked={this.state.option === "optionTwo"}
                  onChange={this.handleInputChange}
                /> {optionTwoText}
              </label>
            </div>
            <br/>
            <button
                className='button'
                onClick={this.submitAnswer}
                disabled={this.state.option === ''}
                >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default QuestionOptions