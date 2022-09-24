import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
function resume() {
  return (
    <Stack>
      <Typography
        noWrap
        style={{ whiteSpace: "pre-line" }}
        component="a"
        justify-content="center"
      >
        <Button
          size="large"
          variant="h1"
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
          Resume
        </Button>
      </Typography>

      <Stack direction="row" spacing={2}>
        <Typography
          variant="h3"
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
          <ul>
            Front End Proficiencies <li>HTML</li> <li>CSS</li>
            <li>Something Bootstrap</li>
          </ul>
        </Typography>
        <Typography
          variant="h3"
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
          <ul>
            Back End Proficiencies <li>React</li> <li>Javascript</li>{" "}
            <li>Something Handlebars</li>
          </ul>
        </Typography>
      </Stack>
    </Stack>
  );
}
export default resume;
