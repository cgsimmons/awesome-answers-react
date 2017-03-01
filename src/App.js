import React, { Component } from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import QuestionForm from './QuestionForm';
import $ from 'jquery';

const BASE_URL = 'http://localhost:5000';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      question: undefined
    }
    this.expandQuestion = this.expandQuestion.bind(this);
    this.clearQuestion = this.clearQuestion.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
  }

  getQuestions() {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      success: function (questions) {
        // once we receive the questions from our server,
        // we store in the state
        this.setState({questions: questions})
      // this function is called asynchronously
      // we must bind(this) to be able to use this.setState
      }.bind(this)
    })
  }
  getQuestion(id) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions/${id}`,
      success: function (question) {
        // once we receive the questions from our server,
        // we store in the state
        this.setState({question: question})
      // this function is called asynchronously
      // we must bind(this) to be able to use this.setState
      }.bind(this)
    })
  }

  postQuestion(questionParams) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      method: 'POST',
      data: {question: questionParams},
      success: function (questions) {
        this.getQuestions()
      }.bind(this)
    })
  }

  createQuestion(questionParams){
    this.postQuestion(questionParams)
  }

  clearQuestion(){
    this.setState({
      question: undefined
    })
  }

  expandQuestion(id) {
    this.getQuestion(id)
  }

  componentDidMount () {
    // when the component is loaded on the page, we
    // will make an ajax request to fetch the questions
    this.getQuestions()
  }

  render() {
    var content;

    if (this.state.question){
      content = <QuestionDetail
                onBackClick={this.clearQuestion}
                question={this.state.question} />
    } else {
      content = <QuestionList
                questions={this.state.questions}
                onClick={this.expandQuestion}/>
    }

    return (
      <div className="App">
        <QuestionForm onSubmit={this.createQuestion}/>
        { content }
      </div>
    );
  }
}

export default App;
