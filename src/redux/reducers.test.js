import getStore from "./getStore";
import reducers from "./reducers";

describe("Tests redux", () => {
  it("Test getstore vs reducers", () => {
    const store = getStore({ initialState: {}, arrComposes: [] });
    const expectativa = JSON.stringify(reducers());
    const respuesta = JSON.stringify(store.getState());
    expect(expectativa).toEqual(respuesta);
  });
});
