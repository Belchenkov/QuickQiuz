import React, { Component } from 'react';

class Results extends Component {

  render() {

    var persent = (this.props.score / this.props.questions.length * 100);

    if (persent > 80) {
        var message = 'Awesome Job!';
    } else if (persent < 80 && persent > 60) {
        var message = 'You Did Ok!';
    } else {
        var message = 'You Did Horrible!';
    }

    return (
         <div className="card bg-faded">
            <div className="card-block">
                <h4>You Got {this.props.score} out of {this.props.questions.length}</h4>
                <h1>{persent}% - {message}</h1>
                <hr/>
                <a href="/app">Take Again</a>
            </div>
         </div> 
    );
  }
}

export default Results;
