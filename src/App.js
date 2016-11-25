import React, { Component } from 'react';
import $ from 'jquery';

const BASE_URL = 'http://localhost:5000'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      questions: []
    }
  }

//retrieve questions and store in state
  getQuestion(){
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      success: function(questions){
        this.setState({questions: questions})
        //bind because setting state
      }.bind(this)
    })
  }

  componentDidMount(){
    this.getQuestion();
  }
  render() {
    return (
      <div className="App">
        {
          JSON.stringify(this.state.questions)
        }
      </div>
    );
  }
}

export default App;
