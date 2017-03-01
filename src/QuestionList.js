import React from 'react';

function QuestionList (props) {
  const forwardQuestion = function(id){

    return function(event){
      props.onClick(id)
    }
  }
  return (
    <ul className='QuestionList'>
      {
        props.questions.map(
          function (question, index) {
            return (
              <li
                onClick={forwardQuestion(question.id)}
                key={question.id}>{question.title}
              </li>
              )
          }
        )
      }
    </ul>
  )
}

// You can specify default values for your component's props
// Assign an object to the property defaultProps on the component
// object
// This object will contain keys named after your props. Its values
// will be the default values.
QuestionList.defaultProps = {
  questions: [],
  onClick: function(){}
}

// We can export any variable
export default QuestionList;
