import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import { Button, Typography } from "@mui/material";
import ServiceRequestRegistrationForm from "../components/Forms/ServiceRequestRegistrationForm";
import { Card } from "@mui/material";


const ServiceRequestRegistration = () => {
  



  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{
          bgcolor: "#f1f1f1",
          width: "100%",
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
          <Card
            sx={{
              bgcolor: "white",
              border: "solid",
              marginTop: "70px",
              marginBottom: 3,
              boxShadow: 5,
              borderRadius: 3,
              border: "solid",
              borderColor: "secondary.main",
            }}
          >
            <Box
              sx={{
                padding: 2,
                textAlign: "center",
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{ borderBottom: "solid", borderColor: "secondary.main",color:"secondary.dark" }}
              >
                Create Service Request 
              </Typography>
              <Typography sx={{color:"secondary.dark"}}>
              Simply fill out the form below to create a service request. Our trusted providers are here to help. Let's turn your vision into reality.
              </Typography>
            </Box>
            <Box
              sx={{
                padding: 3,
                minWidth: "600px",
                minHeight: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ServiceRequestRegistrationForm />
            </Box>
          </Card>
      </Box>
    </ThemeProvider>
  );
};

export default ServiceRequestRegistration;
