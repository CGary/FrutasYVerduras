import React from "react";
// import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import Categorias from ".";
import { BrowserRouter } from "react-router-dom";

// beforeEach(() => {
// });

describe("<Categoria />", () => {
  it("snapshot", () => {
    const wrapper = create(
      <BrowserRouter>
        <Categorias />
      </BrowserRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
