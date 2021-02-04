export const getPostId = (id) => {
  return {
    type: "POST_ID",
    payload: id,
  };
};
