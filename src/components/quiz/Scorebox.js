import React, { Component } from 'react';
import Question from './Question';

class Scorebox extends Component {

  render() {
    return (
         <div className="card bg-faded">
            <div className="card-block">
                Question {this.props.current} out of {this.props.questions.length}
                <span className="pull-right">
                    <strong>Score: {this.props.score}</strong>
                </span>
             </div>
         </div> 
    );
  }
}

export default Scorebox;
