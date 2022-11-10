const initialUserData = {
  score: 0,
  assertions: 0,
  gravatarEmail: '',
  name: '',
};

const player = (state = initialUserData, action) => {
  switch (action.type) {
  case 'HANDLE_USER':
    return ({
      ...state,
      gravatarEmail: action.payload.email,
      name: action.payload.name,
    });
  default:
    return state;
  }
};

export default player;