import * as api from "../api";

//Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  //post is retreived from form elements,
  try {
    const { data } = await api.createPost(post); // then posted by api axios,
    dispatch({ type: "CREATE", payload: data }); // then dispatched to action
  } catch (err) {
    console.log(err.message);
  }
};
