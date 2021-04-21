import _ from "lodash";

export const counterSelector = (state) => _.get(state, ["example", "counter"]);
