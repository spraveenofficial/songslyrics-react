import axios from "axios";
import Baseurl from "../baseurl";

const requestNewSong = async (dispatch, user) => {
  dispatch({ type: "REQUEST_SONG" });
  try {
    const { data } = await axios({
      method: "POST",
      url: `${Baseurl}/request`,
      data: {
        name: user.name,
        email: user.email,
        requestType: user.requestType,
        songName: user.songName,
      },
    });
    if (data.success) {
      dispatch({ type: "REQUEST_SONG_SUCCESS", payload: data });
    } else {
      dispatch({ type: "REQUEST_SONG_FAILURE", payload: data.message });
    }
  } catch (error) {
    dispatch({ type: "REQUEST_SONG_FAILURE", payload: error });
  }
};

export { requestNewSong };
