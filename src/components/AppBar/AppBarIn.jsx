import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/Theme";
import ModalLogout from "../Modals/ModalLogout";
import HandymanIcon from '@mui/icons-material/Handyman';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TokenInterceptor from "../../utils/tokenInterceptor";
import axios from "axios";
import BaseUrl from "../../utils/BaseUrl";

export default function AppBarIn() {
  const [clientButton, setClientButton] = useState("Register as Client");
  const [supplierButton, setSupplierButton] = useState("Register as Supplier");

  useEffect(() => {
    TokenInterceptor();
    axios
      .get(`${BaseUrl}/users/clients`)
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          setClientButton("Client Account");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });

      axios
      .get(`${BaseUrl}/users/suppliers`)
      .then((response) => {
        console.log(response.data);
        
        if (response.status == 200) {
          setSupplierButton("Supplier Account");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },[]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{position:"fixed"}} color="primary">
          <Toolbar sx={{bgcolor:"white"}}>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0}}
            >
              <HandymanIcon sx={{fontSize:"45px",color:"primary.main"}}/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:"fantasy",color:"secondary.main" }}>
              HANDY CONNECT
            </Typography>
            <Box sx={{display:"flex",gap:3}}>
              <Box sx={{display:"flex",gap:2,alignItems:"center"}}>
                <Link to={"/home-in"}>
                <Button sx={{color:"secondary.main"}}>Home</Button>
              </Link>
                <Button sx={{color:"secondary.main"}}>Solutions</Button>
                <Link to={"/suppliers"}>
                <Button sx={{color:"secondary.main"}}>Suppliers</Button>
              </Link>
                <Link to={"/client-registration"}>
                <Button variant="contained" color="primary" sx={{color:"white",whiteSpace:"nowrap"}}>{clientButton}</Button>
              </Link>
              <Link to={"/supplier-registration"}>
                <Button variant="contained" color="primary" sx={{color:"white",whiteSpace:"nowrap"}}>{supplierButton}</Button>
                
              </Link>
              </Box >
              <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
                <SearchIcon sx={{color:"secondary.main"}}/>
                <TextField id="outlined-basic" label="Search" size="small" variant="outlined" />                
              </Box>
              <Box sx={{display:"flex",gap:1}}>
              <ModalLogout/>
              </Box>
            </Box >
            
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
