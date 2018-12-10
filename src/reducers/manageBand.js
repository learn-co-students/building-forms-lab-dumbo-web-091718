export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_NAME':
      return {bands: state.bands.concat(action.payload.name)}

    default:
    return state
  }
};
