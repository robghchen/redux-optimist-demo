export const GET_PIKACHU = 'GET_PIKACHU';
export const GET_RAICHU = 'GET_RAICHU';
export const GET_RAICHU_FAILED = 'GET_RAICHU_FAILED';

export const getPikachu = () => {
	return dispatch => {
		return fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
			.then(res => res.json())
			.then(pikachu => {
				dispatch({
					type: GET_PIKACHU,
					payload: { pokemon: pikachu }
				});
			})
			.catch(console.error);
	};
};

export const getRaichu = () => {
	return dispatch => {
		setTimeout(() => {
			return fetch('https://pokeapi.co/api/v2/pokemon/raichu/')
				.then(res => res.json())
				.then(raichu => {
					dispatch({
						type: GET_RAICHU,
						payload: { pokemon: raichu }
					});
				})
				.catch(error => {
					dispatch({
						type: GET_RAICHU_FAILED,
						payload: { error }
					});
				});
		}, 1000);
	};
};
