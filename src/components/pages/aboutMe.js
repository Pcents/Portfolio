import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function aboutMe() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <Stack direction="row" spacing={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
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
              James Plasencia
            </Typography>
          </Grid>
        </Grid>

        {/* <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar
              style={{ whiteSpace: "pre-line" }}
              alt="Me"
              sx={{ width: 56, height: 56 }}
              src="/static/images/avatar/1.jpg"
            />
          </Grid>
        </Grid> */}
      </Stack>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h5"
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
          here is a bunch of information about me. i like food, MM..FOOD. I like
          music and the album MM..FOOD
        </Typography>
      </Grid>
    </Box>
  );
}

export default aboutMe;
