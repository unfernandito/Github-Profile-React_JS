import React from "react";
import GithubCard from "./index";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test github render profile", () => {
  const component = shallow(<GithubCard username="unfernandito" />);

  it("must be render a complete github profile component", () => {
    expect(component.html()).toMatchSnapshot();
  });
});
