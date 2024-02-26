import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, FormHelperText, Typography, CircularProgress } from "@mui/material";
import theme from "../../utils/Theme";
import { useState } from "react";
import axios from "axios";
import BaseUrl from "../../utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const schema = z.object({
  email: z.string().email().min(3).max(50),
  password: z.string().min(3).max(50),
});

export default function Modal({ text, endpoint, message }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [open, setOpen] = useState(false);
  const [successMessage, setsuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    axios
    .post(`${BaseUrl}/users/${endpoint}`, {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      setSuccess(true);
     
      

      const token = response.data.token;
      console.log(token);

      // Save the token to local storage
      localStorage.setItem("token", token);

      setTimeout(function () {
        navigate("/home-in"); // Refresh the page after the delay
        location.reload();
      }, 2000);
    })
    .catch((error) => {
      console.log(error.response);
          if (error.response.data.code == "ERR_DUPLICATE_ENTRY" || error.response.data.code =="ERR_FORBIDDEN") {
            setError("root", {
              message: error.response.data.message,
            });
          } else {
            setError("root", {
              message: error.response.data.details,
            });
          }
    });
  // handleClose();

  }

  return (
    <ThemeProvider theme={theme}>
      {text == "SIGN IN" ? (
        <Button variant="solid" sx={{color:"secondary.main"}} onClick={handleClickOpen}>
          <LoginIcon sx={{ mr: 1,color:"secondary.main" }} />
          <Typography sx={{whiteSpace:"nowrap"}}>{text}</Typography>
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          disableElevation
        >
          <Typography sx={{whiteSpace:"nowrap"}}>{text}</Typography>
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit(onSubmit)
        }}
      >
        <DialogTitle>{text}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
          {errors.root && (
        <FormHelperText sx={{ color: "error.main" }}>
          {errors.root.message}
        </FormHelperText>
        
      )}
      {success && 
        <FormHelperText sx={{ color: "success.main" }}>
            Succesfully authenticated, logging in ...
          </FormHelperText>
     
        }
          <TextField
          {...register("email")}
          error={errors.email}
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            helperText={
              errors.email && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.email.message}
                </FormHelperText>
              )
            }
          />
          <TextField
          {...register("password")}
          error={errors.name}
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            helperText={
              errors.password && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.password.message}
                </FormHelperText>
              )
            }
          
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
