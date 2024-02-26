import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import theme from "../../utils/Theme";
import CopyrightIcon from "@mui/icons-material/Copyright";
import HandymanIcon from "@mui/icons-material/Handyman";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{
          width: "100%",
          bgcolor: "secondary.main",
          display: "flex",
            flexDirection: {xs:"column",md:"row"},
            justifyContent: "space-evenly",
            alignItems: "center",
        }}
      >
        
          <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:2}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "300px",
                alignItems: "center",
                
              }}  
            >
                <HandymanIcon sx={{ fontSize: "45px",color:"primary.main" }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:"fantasy",color:"white" }}>
                HANDY CONNECT
              </Typography>
              
              <Typography variant="h8" component="div" sx={{ flexGrow: 1,fontFamily:"fantasy",color:"white" }}>
                EST. 2024
              </Typography>
              <h4 style={{ fontFamily: "fantasy", margin: "0" }}></h4>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
              
              }}
            >
              
              <YouTubeIcon sx={{color:"white"}}/>
              <FacebookIcon sx={{color:"white"}}/>
              <InstagramIcon sx={{color:"white"}}/>
              <XIcon sx={{color:"white"}}/>
            </Box>
            <Box style={{display:"flex",flexDirection:"row"}}>
            
                <Typography sx={{color:"white"}}>
                  <CopyrightIcon fontSize="10px" sx={{color:"white"}}/>2024 All rights reserved. HandyConnect MX
                  
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",padding:3}}>
            <Typography variant="h4" sx={{color:"white"}}>Contact Us</Typography>
            <Typography sx={{color:"white"}}>handyconnect2024@gmail.com</Typography>
            <Typography sx={{color:"white"}}>Tel. 871-333-4448</Typography>
          </Box>
        </Box>
      
    </ThemeProvider>
  );
};

export default Footer;
