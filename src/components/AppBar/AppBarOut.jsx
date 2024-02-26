import * as React from "react";
import { useState} from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import Modal from "../Modals/Modal";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/Theme";
import HandymanIcon from "@mui/icons-material/Handyman";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AppBarOut() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorAccount, setAnchorAccount] = useState(null);
  const open = Boolean(anchorEl);
  const openAccount = Boolean(anchorAccount)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickAccount = (event) => {
    setAnchorAccount(event.currentTarget);
  };
  const handleCloseAccount = () => {
    setAnchorAccount(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Toolbar sx={{ bgcolor: "white", display: { xs: "none", lg: "flex" }, gap: 1,width:"100%",justifyContent:"space-between"}}>
            <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",marginLeft:2}}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 0 }}
              >
                <HandymanIcon sx={{ fontSize: "45px", color: "primary.main" }} />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: "fantasy",
                  color: "secondary.main",
                  whiteSpace: "nowrap",
                }}
              >
                HANDY CONNECT
              </Typography>
            </Box >
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button sx={{ color: "secondary.main" }}>Home</Button>
                <Button sx={{ color: "secondary.main", whiteSpace: "nowrap" }}>
                  About Us
                </Button>
                <Button sx={{ color: "secondary.main" }}>Solutions</Button>
                <Button sx={{ color: "secondary.main" }}>Contact</Button>
              </Box>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <SearchIcon sx={{ color: "secondary.main" }} />
                <TextField
                  id="outlined-basic"
                  label="Search"
                  size="small"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ display: "flex", gap: 1 ,marginRight:2}}>
                <Modal
                  text="SIGN IN"
                  endpoint="sign-in"
                  message="To login to this website, please enter your email address and password here."
                />
                <Modal
                  text="SIGN UP"
                  endpoint="sign-up"
                  message="To subscribe to this website, please enter your email address and create a password here."
                />
              </Box>
            </Box>
          </Toolbar>
          {/******************************************************************************************************************************/}
          <Toolbar sx={{ bgcolor: "white", display: { xs: "inline", lg: "none" }, gap: 1,width:"100%"}}>
            <Box sx={{ display: "flex", gap: 3,alignItems:"center",justifyContent:"space-between"}}>
              <Box
                sx={{
                  display:"flex",
                  
                }}
              >
                <Button id="basic-button" onClick={handleClick}>
                  <MenuIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                  <MenuItem onClick={handleClose}>About Us</MenuItem>
                  <MenuItem onClick={handleClose}>Solutions</MenuItem>
                  <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Menu>
              </Box>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 0}}
                  
                >
                  <HandymanIcon
                    sx={{ fontSize: "45px", color: "primary.main" }}
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontFamily: "fantasy",
                    color: "secondary.main",
                    whiteSpace: "nowrap",
                    
                  }}
                >
                  HANDY CONNECT
                </Typography>
              </Box >
              <Box sx={{ display: {xs:"none",sm:"flex"}, gap: 1, alignItems: "center" }}>
                <SearchIcon sx={{ color: "secondary.main" }} />
                <TextField
                  id="outlined-basic-sx"
                  label="Search"
                  size="small"
                  variant="outlined"
                />
              </Box>
             
                <Box
                  sx={{
                    display: { xs: "flex", lg: "none" },
                  }}
                >
                  <Button id="account-button" onClick={handleClickAccount}>
                    <AccountCircleIcon />
                  </Button>
                  <Menu
                    id="account-menu"
                    anchorEl={anchorAccount}
                    open={openAccount}
                    onClose={handleCloseAccount}
                  >
                    <MenuItem >
                      <Modal
                        text="SIGN IN"
                        endpoint="sign-in"
                        message="To login to this website, please enter your email address and password here."
                      />
                      
                    </MenuItem>
                    <MenuItem >
                      <Modal
                        text="SIGN UP"
                        endpoint="sign-up"
                        message="To subscribe to this website, please enter your email address and create a password here."
                      />
                      
                    </MenuItem>
                   
                  </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
