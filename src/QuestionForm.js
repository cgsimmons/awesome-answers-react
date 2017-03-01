import React from 'react';

function QuestionForm(props){
  const handleSubmit = function(event){
    event.preventDefault()
    const formEL = event.target

    const question = {
      title: formEL.querySelector('[name=title]').value,
      body: formEL.querySelector('[name=body]').value
    }

    props.onSubmit(question)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='QuestionFrom'>
      <input type='text' name='title'/>
      <textarea name='body' />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default QuestionForm;
