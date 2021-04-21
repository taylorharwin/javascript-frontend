import { shallow } from "enzyme";
import { App } from "./App";

it("should render app", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toExist();
});
