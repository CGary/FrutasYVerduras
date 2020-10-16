import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import Categorias from "../../components/Categorias";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

// beforeEach(() => {
// });

describe("<Head />", () => {
  it("prueba 1", () => {
    const wrapper = shallow(<Categorias />);
    // console.log(wrapper.debug());
    expect(1).toEqual(1);
  });

  it("otra prueba", () => {
    const wrapper = create(
      <BrowserRouter>
        <Categorias />
      </BrowserRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
