import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

const arrColorProgress = ["#2387de", "#E85850", "gray", "#00C624"];

export default styled(LinearProgress)<{ colorProgress: number }>`
  border-radius: 5px;
  &.MuiLinearProgress-colorPrimary {
    background-color: lightgray;
  }
  .MuiLinearProgress-barColorPrimary {
    background-color: ${({ colorProgress }) => arrColorProgress[colorProgress]};
  }
`;
