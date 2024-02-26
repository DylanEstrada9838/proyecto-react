import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import { Button, Typography } from "@mui/material";
import SupplierRegistrationForm from "../components/Forms/SupplierRegistrationForm";
import SupplierInformation from "../components/Forms/SupplierInformation";
import { Card } from "@mui/material";
import TokenInterceptor from "../utils/tokenInterceptor";
import axios from "axios";
import BaseUrl from "../utils/BaseUrl";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from "react-router-dom";

const SupplierRegistration = () => {
  const [supplierExists, setSupplierExists] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    TokenInterceptor();
    axios
      .get(`${BaseUrl}/users/suppliers`)
      .then((response) => {
        console.log(response);
        setInfo(response.data);
        if (response.status == 200) {
          setSupplierExists(true);
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
        {!supplierExists ? (
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
                Supplier Registration
              </Typography>
              <Typography sx={{color:"secondary.dark"}}>
                <strong>Welcome to Handy Connect!</strong> We're thrilled to
                offer you a seamless experience for all your home service needs.
                By registering as a supplier, you gain access to a wide range of
                trusted and professional service providers ready to assist you
                with carpentry, electrical work, plumbing, and more
              </Typography>
            </Box>
            <Box
              sx={{
                minWidth: "600px",
                minHeight: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SupplierRegistrationForm />
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
                Supplier Information
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
                minWidth: "600px",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap:3,
                marginBottom:4
               
              }}
            >
               <Link to={"/app-service-form"}>
                <Button variant="contained" color="secondary" sx={{color:"white"}}><AddBoxIcon sx={{marginRight:1}}/>Add services</Button> 
                
               </Link>
               <SupplierInformation info={info} />
            </Box>
          </Card>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default SupplierRegistration;
