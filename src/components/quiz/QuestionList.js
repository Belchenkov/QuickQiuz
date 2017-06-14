import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {

  render() {
    return (
      <div>
         <div className="questions">
            {
              this.props.questions.map(question => {
                if (question.id == this.props.current) {
                   return <Question 
                          key={question.id}
                          question={question} 
                          {...this.props}        
                        />
                }
                
              })
            }
         </div> 
      </div>
    );
  }
}

export default QuestionList;
