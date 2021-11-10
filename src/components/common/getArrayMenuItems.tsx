import * as React from "react";
import { MenuItem } from "@material-ui/core";

export default (arrItems) =>
  arrItems?.map(({ value, text }) => (
    <MenuItem key={"item" + value} value={value}>
      {text}
    </MenuItem>
  ));
