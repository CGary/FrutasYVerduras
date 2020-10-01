export const login = () => async (dispatch) => {
  // dispatch({
  //   type: "loading",
  // });

  // try {
  // setTimeout(() => {
  dispatch({
    type: "login",
    payload: {
      nombre: "Pepe",
      apellido: "Cortizona",
    },
  });
  // }, 4000);
  // } catch (error) {
  //   console.log(error.message);
  //   dispatch({
  //     type: "logout",
  //   });
  // }
};

export const login2 = (payload) => ({
  type: "login",
  payload: {
    nombre: "Pepe",
    apellido: "Cortizona",
  },
});
