import React, { Component } from 'react';
import './App.css';

import  QuestionList  from './components/quiz/QuestionList';
import  Scorebox  from './components/quiz/Scorebox';
import  Results  from './components/quiz/Results';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [ 
        {
          id: 1,
          text: 'What is your Name?',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Brad'
            },
            {
              id: 'c',
              text: 'Steven'
            }
          ],
          correct: 'b'
        },

        {
          id: 2,
          text: 'What is your Mothers Name?',
          choices: [
            {
              id: 'a',
              text: 'Sara'
            },
            {
              id: 'b',
              text: 'Sue'
            },
            {
              id: 'c',
              text: 'Donna'
            }
          ],
          correct: 'c'
        },

        {
          id: 3,
          text: 'What is your Fathers Name?',
          choices: [
            {
              id: 'a',
              text: 'Bobby'
            },
            {
              id: 'b',
              text: 'Harry'
            },
            {
              id: 'c',
              text: 'Wayne'
            }
          ],
          correct: 'c'
        },

        {
          id: 4,
          text: 'What is your Friends Name?',
          choices: [
            {
              id: 'a',
              text: 'John'
            },
            {
              id: 'b',
              text: 'Paul'
            },
            {
              id: 'c',
              text: 'Jose'
            }
          ],
          correct: 'a'
        },
      ],

      score: 0,
      current: 1      
    }
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }


  render() {
    
    if (this.state.current > this.state.questions.length) {
        var scorebox = '';
        var results = <Results {...this.state} />
    } else {
        var scorebox = <Scorebox {...this.state}></Scorebox>;
        var results = '';
    }
    
    return (
      <div>
      {scorebox}
      <QuestionList {...this.state}
          setCurrent = {this.setCurrent.bind(this)}
          setScore = {this.setScore.bind(this)}
      />
      {results}
      </div>
    );
  }
}

export default App;
