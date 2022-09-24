import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Paper from "@mui/material/Paper";
// import CssBaseline from "@mui/material/CssBaseline";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemText from "@mui/material/ListItemText";
// import Avatar from "@mui/material/Avatar";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {/* {href/anchor tags here?} */}
          <BottomNavigationAction
            target="_blank"
            component={"a"}
            href={"https://github.com/Pcents"}
            icon={<GitHubIcon />}
          />
          <BottomNavigationAction
            target="_blank"
            component={"a"}
            href={"https://www.linkedin.com/in/james-plasencia-aa6843237/"}
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            target="_blank"
            component={"a"}
            href={
              "https://www.youtube.com/channel/UCOd5RnXm0cN2z2thrqYstbw/featured"
            }
            icon={<YouTubeIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
