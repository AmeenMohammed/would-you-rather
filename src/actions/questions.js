import { saveQuestion, saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function receiveQuestions( questions ){
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    }
  }

  function addQuestion(question) {
    return {
      type: ADD_QUESTION,
      question,
    }
  }

  export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
      return saveQuestion({
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
        author: authedUser,
      })
      .then((question) => dispatch(addQuestion(question)))
    }
  }

  function addAnswer(id, answer, authedUser) {
    return {
      type: SAVE_ANSWER,
      id,
      answer,
      authedUser
    }
  }
  
  export function handleSaveAnswer(id, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
      return saveQuestionAnswer({
        authedUser: authedUser,
        qid: id,
        answer: answer,
      })
      .then(() => dispatch(addAnswer(id, answer, authedUser)))
    }
  }
  