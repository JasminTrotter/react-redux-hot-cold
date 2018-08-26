import {MAKE_GUESS, RESTART_GAME, AURAL_UPDATE} from '../actions';

const initialState = {
	guesses: [],
	correctAnswer: Math.floor(Math.random() * 100) + 1,
	showInfo: false,
	feedback: 'Make your guess!',
	auralStatus: ''
};



export default (state=initialState, action) => {
	if(action.type === MAKE_GUESS) {
		let feedback, guess;

		guess = parseInt(action.guess, 10);
		    if (isNaN(guess)) {
		      return { ...state, feedback: 'Please enter a valid number' }
		    }

		    const difference = Math.abs(guess - state.correctAnswer);

		    if (difference >= 50) {
		      feedback = 'You\'re Ice Cold...';
		    } else if (difference >= 30) {
		      feedback = 'You\'re Cold...';
		    } else if (difference >= 10) {
		      feedback = 'You\'re Warm.';
		    } else if (difference >= 1) {
		      feedback = 'You\'re Hot!';
		    } else {
		      feedback = 'You got it!';
		    }
		    return {
		    	//copy the state, 
				//update the key 'guesses' with the current guesses 
				//that are in the state and the new guess that is coming from the action
		    	...state,
		    	guesses: [...state.guesses, action.guess]
		    }
	}
	if(action.type === RESTART_GAME) {
		return {
			guesses: [],
			correctAnswer: Math.floor(Math.random() * 100) + 1,
			showInfo: false,
			feedback: 'Make your guess!',
			auralStatus: ''
		}
	}
	if(action.type === AURAL_UPDATE) {
		const { guesses, feedback } = state;

	    // If there's not exactly 1 guess, we want to
	    // pluralize the nouns in this aural update.
	    const pluralize = state.guesses.length !== 1;

	    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

	    if (guesses.length > 0) {
	      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
	    }
	}
};