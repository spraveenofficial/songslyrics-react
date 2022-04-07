export const RequestSong = (state, action) => {
  switch (action.type) {
    case "REQUEST_SONG":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_SONG_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        message: "Song Requested Successfully.",
      };
    case "REQUEST_SONG_FAILURE":
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
