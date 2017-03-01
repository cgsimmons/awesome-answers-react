import React from 'react';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';

function QuestionDetail(props){
  const q = props.question
  return (
    <div className='QuestionDetail'>
      <div
        onClick={props.onBackClick}
        className='BackButton'>
                      <FaChevronLeft />
      </div>

      <h1>Title{q.title}</h1>
      <p>{q.body}</p>
      <div>
        <span>Created at</span>{q.created_at}
      </div>
      <div>
        <span>View Count</span>{q.view_count}
      </div>
      <div>
        <span>Created by: </span>{q.user.first_name}
      </div>
    </div>
  )
}

export default QuestionDetail;
