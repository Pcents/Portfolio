import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
function resume() {
  return (
    <Stack direction="row" spacing={2}>
      <Typography
        variant="h2"
        noWrap
        style={{ whiteSpace: "pre-line" }}
        component="a"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Front End Proficiencies HTML CSS Something Bootstrap
      </Typography>
      <Typography
        variant="h2"
        noWrap
        style={{ whiteSpace: "pre-line" }}
        component="a"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Back End Proficiencies React Javascript Something Handlebars
      </Typography>
    </Stack>
  );
}
export default resume;
