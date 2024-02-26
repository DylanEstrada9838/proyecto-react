import * as React from "react";
import "../styles/background.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import handyhome from ".././assets/handy_home.jpg";
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


const HomePublic = () => {
  const size = "100px";
  const services = ["Electrical","Cleaning","Painting","Plumbing","Carpentry","HVAC","Roofing","Security","Pest Control"]
  const list = [
    <ElectricalServicesIcon sx={{ fontSize: `${size}` }} />,
    <CleaningServicesIcon sx={{ fontSize: `${size}` }} />,
    <FormatPaintIcon sx={{ fontSize: `${size}` }} />,
    <PlumbingIcon sx={{ fontSize: `${size}` }} />,
    <CarpenterIcon sx={{ fontSize: `${size}` }} />,
    <HvacIcon sx={{ fontSize: `${size}` }} />,
    <RoofingIcon sx={{ fontSize: `${size}` }} />,
    <SecurityIcon sx={{ fontSize: `${size}` }} />,
    <PestControlIcon sx={{ fontSize: `${size}` }} />,
  ];

  return (
    <ThemeProvider theme={theme}>
      <div
        className="bg"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
      
          <Box sx={{marginTop:10}}>
            <img
            src={handyhome}
            alt="collage"
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
            </Box>
        
        <div style={{ maxWidth: "850px" }}>
            <Typography variant="h3" sx={{textAlign:"center",lineHeight:"1.3", fontSize:"3",borderBottom:"solid 2px",borderTop:"solid 2px",borderColor:"primary.main",marginTop:3}}>
              <strong>HANDY CONNECT:</strong> Your One-Stop Home Services Platform
            </Typography>
            <Typography paragraph={true} align="center" sx={{lineHeight:"1.5",marginTop:3,marginBottom:3}}>
              Welcome to <strong>Handy Connect</strong>, the ultimate platform
              designed to seamlessly connect users, clients, and suppliers for all
              your home service needs. Whether you're a homeowner in need of{" "}
              <strong>carpentry, electrical, plumbing, or other services</strong>,
              or a skilled supplier looking to offer your expertise, Handy Connect
              is your go-to destination. <br />
            </Typography>
        </div>
        <Box
          component="section"
          sx={{
            width: "100%",
            height: 370,
            borderRadius: 0,
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"
          }}
        >
        
            <Typography variant="h2" sx={{marginTop:0,}}>Our main services:</Typography>
            
          <Box
            sx={{
              width: "80%",
              height: 180,
              borderRadius: 0,
              bgcolor: "primary.main",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {list.map((icon, index) => (
              <Box
                key={index}
                sx={{
                  width: "12%",
                  height: 160,
                  borderRadius: 2,
                  bgcolor: "primary.light",
                  margin: "1%",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  flexDirection:"column"
                }}
              >
                <Typography variant="subtitle1" align="center">{services[index]}</Typography>
                {icon}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          component="section"
          sx={{
            maxWidth:"850px",
            height: "370px",
            borderRadius: 0,
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
      </div>
    </ThemeProvider>
  );
};

export default HomePublic;
