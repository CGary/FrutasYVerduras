import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MdShowChart, MdAssignmentTurnedIn } from "react-icons/md";

export default function TabInfo({ name, child0, child1 }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper
        elevation={0}
        style={{
          marginBottom: "16px",
          backgroundColor: "rgb(244, 247, 250)",
          // height: "60px",
        }}
      >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
          style={{ height: "60px" }}
        >
          <Tab
            label="Seguimiento"
            icon={<MdShowChart size="20px" />}
            style={{
              paddingTop: "0px",
              paddingBottom: "0px",
              minHeight: "60px",
            }}
          />
          <Tab
            label={name}
            icon={<MdAssignmentTurnedIn size="20px" />}
            style={{
              paddingTop: "0px",
              paddingBottom: "0px",
              minHeight: "60px",
            }}
          />
        </Tabs>
      </Paper>
      {{ 0: child0, 1: child1 }[value]}
    </>
  );
}
