export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
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

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = () => ({
	type: AURAL_UPDATE
});