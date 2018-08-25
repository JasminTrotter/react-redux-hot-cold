export const SET_GUESS = 'SET_GUESS';
export const setGuess = guess => ({
	type: SET_GUESS,
		guess
});

export const RESTART_GAME ='RESTART_GAME';
export const restartGame = {
	type: RESTART_GAME
}

export const SHOW_INFO = 'SHOW_INFO';
export const showInfo = {
	type: SHOW_INFO
}