import { createGlobalStyle } from "styled-components";

import base from "./base";
import reset from "./reset";
import variables from "./variables";

export default createGlobalStyle`
  ${reset}
  ${variables}
  ${base}

  body {
    background-color: ${props => props.color}
  }
`;
