import React,{ Component } from 'react'

class QuestionValue extends Component {

    render(){

        const { name, avatar, optionOneText, optionTwoText, selectedOptionOne, selectedOptionTwo, optionOneVotes, optionTwoVotes, totalVotes, percentOptionOne, percentOptionTwo } = this.props.results
        const optOneCss = selectedOptionOne ? 'selected-value' : ''
        const optTwoCss = selectedOptionTwo ? 'selected-value' : ''

        return(
            <div className='question-details'>
            <div className='question-header'>
              <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
              />
              <div className="question-title">
                Asked by {name}
              </div>
            </div>
            <div className='question-info'>
              <h2>Results: </h2>
              <div className={optOneCss}>
                <h4> Would you rather {optionOneText}?</h4>
                <p> <strong>{percentOptionOne}%</strong> of answers with <strong> ({optionOneVotes} out of {totalVotes} votes)</strong> </p>
              </div>
              <div className={optTwoCss}>
                <h4> Would you rather {optionTwoText}?</h4>
                <p> <strong>{percentOptionTwo}%</strong> of answers with <strong> ({optionTwoVotes} out of {totalVotes} votes)</strong> </p>
              </div>
            </div>
          </div>
        )
    }

}
export default QuestionValue