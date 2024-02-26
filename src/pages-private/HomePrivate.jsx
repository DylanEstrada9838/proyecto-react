import * as React from "react";
import "../styles/background.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import handyhome from ".././assets/handy_home.jpg";
import handyhomesm from ".././assets/handy-sm.jpg";
import { Box } from "@mui/system";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import HvacIcon from "@mui/icons-material/Hvac";
import RoofingIcon from "@mui/icons-material/Roofing";
import SecurityIcon from "@mui/icons-material/Security";
import PestControlIcon from "@mui/icons-material/PestControl";
import { Typography } from "@mui/material";


const HomePrivate = () => {
  const size = "100px";
  const services = ["Electrical","Cleaning","Painting","Plumbing","Carpentry","HVAC","Roofing","Security","Pest Control"]
  const color = "secondary.main"
  const list = [
    <ElectricalServicesIcon sx={{ fontSize: `${size}`, color:`${color}` }} />,
    <CleaningServicesIcon sx={{ fontSize: `${size}`, color:`${color}` }} />,
    <FormatPaintIcon sx={{ fontSize: `${size}`, color:`${color}` }} />,
    <PlumbingIcon sx={{ fontSize: `${size}` , color:`${color}`}} />,
    <CarpenterIcon sx={{ fontSize: `${size}`, color:`${color}` }} />,
    <HvacIcon sx={{ fontSize: `${size}` , color:`${color}`}} />,
    <RoofingIcon sx={{ fontSize: `${size}` , color:`${color}`}} />,
    <SecurityIcon sx={{ fontSize: `${size}` , color:`${color}`}} />,
    <PestControlIcon sx={{ fontSize: `${size}`, color:`${color}` }} />,
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          maxWidth:"xl",
        }}
      >
      
          <Box sx={{marginTop:10,display:{xs:"none",lg:"block"}}}>
            <img
            src={handyhome}
            alt="collage"
            style={{
              objectFit: "cover",
              maxWidth:"1200px"
            }}
          />
            </Box>
            <Box sx={{marginTop:10,display:{xs:"none",md:"block",lg:"none"}}}>
            <img
            src={handyhome}
            alt="collage"
            style={{
              objectFit: "cover",
              maxWidth:"900px"
            }}
          />
            </Box>
            <Box sx={{marginTop:10,display:{xs:"none",sm:"block",md:"none"}}}>
            <img
            src={handyhome}
            alt="collage"
            style={{
              objectFit: "cover",
              maxWidth:"600px"
            }}
          />
            </Box>
            <Box sx={{marginTop:10,display:{xs:"block",sm:"none"}}}>
            <img
            src={handyhomesm}
            alt="collage"
            style={{
              objectFit: "cover",
              maxWidth:"600px"
            }}
          />
            </Box>
            
        
        <Box sx={{maxWidth:"md"}}>
            <Typography variant="h3" sx={{textAlign:"center",lineHeight:"1.3", fontSize:"3",borderBottom:"solid 2px",borderTop:"solid 2px",borderColor:"primary.main",marginTop:3}}>
              <Typography sx={{color:"secondary.main",fontSize:50}}>
                <strong>HANDY CONNECT:</strong>
              </Typography> Your One-Stop Home Services Platform
            </Typography>
            <Typography paragraph={true} align="center" sx={{lineHeight:"1.5",marginTop:3,marginBottom:3}}>
              Welcome to <strong>Handy Connect</strong>, the ultimate platform
              designed to seamlessly connect users, clients, and suppliers for all
              your home service needs. Whether you're a homeowner in need of{" "}
              <strong>carpentry, electrical, plumbing, or other services</strong>,
              or a skilled supplier looking to offer your expertise, Handy Connect
              is your go-to destination. <br />
            </Typography>
        </Box>
        <Box
          component="section"
          sx={{
         
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column",
            gap:5,
            padding:3
          }}
        >
        
            <Typography variant="h3" sx={{marginTop:0,color:"white",}}><strong>Our main services:</strong></Typography>
            
          <Box
            sx={{
              
              bgcolor: "primary.main",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent:"center"
            }}
          >
            {list.map((icon, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "12%",
                  height: 160,
                  borderRadius: 2,
                  bgcolor: "white",
                  margin: "1%",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  flexDirection:"column"
                }}
              >
                <Typography variant="subtitle1" align="center" color="secondary.main">{services[index]}</Typography>
                {icon}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          component="section"
          sx={{
            maxWidth:"md",
           
            bgcolor: "#ffffff",
          }}
        >
          
            <Typography paragraph={true} align="center" sx={{lineHeight:"1.5",marginTop:3,marginBottom:3}}>
              <strong>Handy Connect </strong>facilitates seamless communication
              between clients and suppliers through our intuitive messaging
              system. Once a quote is accepted by the client, the appointment
              process begins, ensuring a smooth and hassle-free experience for
              both parties involved. <br />
              <br />
              Furthermore, we prioritize transparency and quality service through
              our rating system.{" "}
              <strong>
                Clients have the opportunity to rate and provide feedback on the
                services they receive
              </strong>
              , fostering accountability and maintaining high standards within our
              community. <br />
              <br />
              Join Handy Connect today and experience the convenience of finding
              reliable home services or expanding your business with ease. <br />
              <br />
              <strong>Let us connect </strong>you to a world of possibilities
              right at your doorstep.
            </Typography>
          
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePrivate;
