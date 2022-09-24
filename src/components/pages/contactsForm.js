import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FilledInput from "@mui/material/FilledInput";
import Paper from "@mui/material/Paper";
import { validateEmail } from "../../utils/helpers";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function contactsForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and Message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the Message is not valid. If so, we set an error message regarding the Message.
    }
    if (!checkMessage(Message)) {
      setErrorMessage(`Message not long enough: ${userName}`);
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <Paper variant="outlined .MuiPaper-elevation2">
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <Stack direction="row" spacing={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <FormControl>
              <InputLabel htmlFor="component-filled">Name</InputLabel>
              <Input
                // fullWidth="true"
                id="my-input"
                value={userName}
                onChange={handleInputChange}
                aria-describedby="my-helper-text"
                name="names"
                type="names"
                // placeholder="names"
              />
            </FormControl>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <FormControl>
              <InputLabel htmlFor="component-filled">Message</InputLabel>
              <Input
                fullWidth="true"
                id="my-input"
                value={message}
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
          <Grid>
            <Button type="button" onClick={handleFormSubmit}>
              Submit
            </Button>
          </Grid>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </Stack>
      </Box>
    </Paper>
  );
}
export default contactsForm;
