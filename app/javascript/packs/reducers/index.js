const initialState = {
  boardCount: 10,
  boardHeight: 20,
  boardWidth: 130,
  roomHeight: 300,
  roomWidth: 400,
  cutFirstBoard: false,
  firstBoardWidth: 130,
  minBoardWidth: 20
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_BOARD_COUNT': {
      return {
        ...state,
        boardCount: payload
      }
    }
    case 'SET_BOARD_HEIGHT': {
      return {
        ...state,
        boardHeight: payload
      }
    }
    case 'SET_BOARD_WIDTH': {
      return {
        ...state,
        boardWidth: payload
      }
    }
    case 'SET_CUT_FURST_BOARD': {
      return {
        ...state,
        cutFirstBoard: payload
      }
    }
    case 'SET_FIRST_BOARD_WIDTH': {
      return {
        ...state,
        firstBoardWidth: payload
      }
    }
    case 'SET_MIN_BOARD_WIDTH': {
      return {
        ...state,
        minBoardWidth: payload
      }
    }
    case 'SET_ROOM_HEIGHT': {
      return {
        ...state,
        roomHeight: payload
      }
    }
    case 'SET_ROOM_WIDTH': {
      return {
        ...state,
        roomWidth: payload
      }
    }
    default:
      return state;
  }
};
