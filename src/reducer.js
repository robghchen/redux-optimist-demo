import { GET_PIKACHU, GET_RAICHU, GET_RAICHU_FAILED } from './pokemonActions';

const initialState = { pokemon: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PIKACHU:
		case GET_RAICHU: {
			return { ...state, pokemon: action.payload.pokemon };
		}
		case GET_RAICHU_FAILED: {
			return { ...state, error: action.payload.error };
		}
		default:
			return state;
	}
};

export default reducer;
