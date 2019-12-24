import React from "react";
import GithubName from "./src/GitHubName/index";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test github name component", () => {
  const component = shallow(
    <GithubName
      username="unfernandito"
      name="test"
      location="test"
      company="test"
    />
  );

  it("must be render a name component", () => {
    expect(component.html()).toMatchSnapshot();
  });
});
