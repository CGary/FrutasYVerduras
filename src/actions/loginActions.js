export const login = (query) => async (dispatch) => {
  dispatch({
    type: "loading",
  });

  try {
    setTimeout(() => {
      dispatch({
        type: "login",
        payload: {
          nombre: "Pepe",
          apellido: "Cortizona",
          ...query,
        },
      });
    }, 4000);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "logout",
    });
  }
};

export const cambiarNombre = (query) => async (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "cambiarNombre",
      payload: query,
    });
  }, 4000);
};
