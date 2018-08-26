import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

//connect react to redux, to
//1. call the action to update the state
//2. use the state inside the component
import {connect} from 'react-redux';

//state comes from the store automatically
export const mapStateToProps = state => {
  guesses: state.guesses,
  restartGame: state.restartGame,
  showInfo: state.showInfo,
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  auralStatus: '',
  feedback: 'Make your guess!'
}





export class Game extends React.Component {


  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.props.dispatch(restartGame())}
          onGenerateAuralUpdate={() => this.props.dispatch(auralUpdate())}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.props.dispatch(makeGuess(guess))}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Game);
