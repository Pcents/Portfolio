import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import TeeTime from "../assets/tee-time.jpg";
import Alien from "../assets/alien.jfif";
import Game from "../assets/Game_Glutton Logo.png";
import Notes from "../assets/images.png";
import Weather from "../assets/weather-images.jpg";
import Text from "../assets/text.png";

function projects() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
        >
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Tee Time"
                height="140"
                image={TeeTime}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Golf Tee Time Reservation
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  icon={<GitHubIcon />}
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={
                    "https://github.com/Jeanette-Ralph/Golf-Tee-Time-Reservation"
                  }
                >
                  Deployed Application
                </Button>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://golf-n-stuff.herokuapp.com/"}
                >
                  Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="weather"
                height="140"
                image={Weather}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Weather App
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={
                    "https://pcents.github.io/Weather-Forecast-JP-Challenge-6/"
                  }
                >
                  Deployed Application
                </Button>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={
                    "https://github.com/Pcents/Weather-Forecast-JP-Challenge-6"
                  }
                >
                  Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="video game catalogue"
                height="140"
                image={Game}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Game Glutton
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://gg-ez415.github.io/Game-Glutton/"}
                >
                  Deployed Application
                </Button>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://github.com/GG-EZ415/Game-Glutton"}
                >
                  Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
        >
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="alien"
                height="140"
                image={Alien}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Paranormal Blog
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://pcents.github.io/My-MVC-Blog/"}
                >
                  Deployed Application
                </Button>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://github.com/Pcents/My-MVC-Blog"}
                >
                  Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Note Pad"
                height="140"
                image={Notes}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Note Organizer
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://secure-brushlands-31759.herokuapp.com/"}
                >
                  Deployed Application
                </Button>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://github.com/Pcents/Random-Note-Organizer.git"}
                >
                  Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="text editing?"
                height="140"
                image={Text}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Text Editor
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://jate-text-editor-jp.herokuapp.com/"}
                >
                  Deployed Application
                </Button>
                <Button
                  target="_blank"
                  size="small"
                  component={"a"}
                  href={"https://github.com/Pcents/Text-Editor.git"}
                >
                  Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default projects;
