import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";
import * as React from "react";

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      size="small"
      checked={checked}
      onChange={handleChange}
      sx={{
        color: red[900],
        "&.Mui-checked": {
          color: red[900],
        },
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
