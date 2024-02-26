import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import { Button, Typography } from "@mui/material";
import AppServiceRegistrationForm from "../components/Forms/AppServiceRegistrationForm";
import { Card } from "@mui/material";


const AppServiceRegistration = () => {
  
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
                Add services  
              </Typography>
              <Typography sx={{color:"secondary.dark"}}>
              Ready to showcase your expertise and expand your reach? Simply fill out the form below to add your services to our platform. Our community of clients is eager to connect with you. Let's make your skills shine - tell us about your services, and let's get you visible to homeowners in need!</Typography>
            </Box>
            <Box
              sx={{
                padding: 3,
                minWidth: "600px",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppServiceRegistrationForm />
            </Box>
          </Card>
      </Box>
    </ThemeProvider>
  );
};

export default AppServiceRegistration;
