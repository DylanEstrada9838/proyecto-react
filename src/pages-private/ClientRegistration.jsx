import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import { Button, Typography } from "@mui/material";
import ClientRegistrationForm from "../components/Forms/ClientRegistrationForm";
import ClientInformation from "../components/Forms/ClientInformation";
import { Card } from "@mui/material";
import TokenInterceptor from "../utils/tokenInterceptor";
import axios from "axios";
import BaseUrl from "../utils/BaseUrl";
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

const ClientRegistration = () => {
  const [clientExists, setClientExists] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    TokenInterceptor();
    axios
      .get(`${BaseUrl}/users/clients`)
      .then((response) => {
        console.log(response);
        setInfo(response.data);
        if (response.status == 200) {
          setClientExists(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

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
        {!clientExists ? (
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
                Client Registration
              </Typography>
              <Typography sx={{color:"secondary.dark"}}>
                <strong>Welcome to Handy Connect!</strong> We're thrilled to
                offer you a seamless experience for all your home service needs.
                By registering as a client, you gain access to a wide range of
                trusted and professional service providers ready to assist you
                with carpentry, electrical work, plumbing, and more
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
              <ClientRegistrationForm />
            </Box>
          </Card>
        ) : (
          <Card
            sx={{
              bgcolor: "white",
              border: "solid",
              marginTop: "70px",
              marginBottom: 3,
              boxShadow: 5,
              borderRadius: 3,
              border: "solid",
              borderColor: "secondary.main"}}
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
                Client Information
              </Typography>
              <Typography sx={{color:"secondary.dark"}}>
                Get ready to enjoy the convenience of finding trusted service
                providers for all your needs. Whether it's a quick fix or a
                major renovation, we've got you covered. Start browsing our
                network of professionals and take the first step towards
                transforming your home today!"
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
                gap:3
              }}
            >
              <Link to={"/service-request-form"}>
                <Button variant="contained" color="secondary" sx={{color:"white"}}><CreateIcon sx={{marginRight:1}}/> Create a Service Request</Button>
                
              </Link><ClientInformation info={info} />
            </Box>
          </Card>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ClientRegistration;
