import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import HvacIcon from "@mui/icons-material/Hvac";
import RoofingIcon from "@mui/icons-material/Roofing";
import SecurityIcon from "@mui/icons-material/Security";
import PestControlIcon from "@mui/icons-material/PestControl";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import Button from "@mui/material/Button";
import BaseUrl from "../utils/BaseUrl";
import Axios from "axios";
import TokenInterceptor from "../utils/tokenInterceptor";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Chip } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import s1 from ".././assets/1.jpg";
import s2 from ".././assets/2.jpg";
import s3 from ".././assets/3.jpg";
import s4 from ".././assets/4.jpeg";
import s5 from ".././assets/5.jpg";
import s6 from ".././assets/6.jpg";
import s7 from ".././assets/7.jpg";
import s8 from ".././assets/8.jpg";
import s9 from ".././assets/9.jpg";
import s10 from ".././assets/10.jpg";

const images = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]

const SuppliersPage = () => {
  const [id, setId] = useState(1);
  const [suppliers, setSuppliers] = useState([]);
  const changeId = (newId) => {
    setId(newId);
  };

  TokenInterceptor();
  const fetchView = ({ id }) => {
    Axios.get(`${BaseUrl}/suppliers/services/${id}`).then((response) => {
      setSuppliers(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchView({ id });
  }, [id]);

  const size = "100px";
  const color = "white";
  const services = [
    "Plumbing",
    "Electrical",
    "Carpentry",
    "Painting",
    "HVAC",
    "Cleaning",
    "Pest Control",
    "Roofing",
    "Home Security",
  ];
  const list = [
    <PlumbingIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <ElectricalServicesIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <CarpenterIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <FormatPaintIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <HvacIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <CleaningServicesIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <PestControlIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <RoofingIcon sx={{ fontSize: `${size}`, color: { color } }} />,
    <SecurityIcon sx={{ fontSize: `${size}`, color: { color } }} />,
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{ bgcolor: "primary", width: "100%", marginTop: "60px" }}
      >
        <Box
          component="section"
          sx={{
            width: "100%",
            borderRadius: 0,
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "50px", color: "white" }}>
            Select a service to view our suppliers:
          </Typography>
          <Box
            sx={{
              width: "80%",
              height: 200,
              borderRadius: 0,
              bgcolor: "primary.main",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {list.map((icon, index) => (
              <Button
                key={index}
                onClick={() => changeId(index + 1)}
                sx={{
                  width: "12%",
                  height: 180,
                  borderRadius: 2,
                  bgcolor: "secondary.main",
                  margin: "1%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <h3
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {services[index]}
                  </h3>
                  {icon}
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              minHeight: 600,
              width: "80%",
             
              display:"flex",
              flexDirection:"column",
              gap:3,
              padding:3,
              alignItems:"center"
            }}
          >
            {suppliers.map((supplier, index) => (
              <Card elevation={5} sx={{ minWidth: "70%",padding:2}} key={index}>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <CardContent sx={{display:"flex",flexDirection:"row",gap:4}}>
                     <CardMedia
                    component="img"
                    sx={{ width: 100,boxShadow:5 }}
                    image={images[supplier.supplierId-1]}
                    alt="Supplier Logo"
                    
                  />
                    <Box>
                      <Typography variant="h5" component="div">
                        {supplier.supplier}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {supplier.address}
                      </Typography>
                      <Typography variant="body2">
                        Experience years: {supplier.yearsExperience}
                      </Typography>
                      
                      
                      <Box sx={{display:"flex",flexDirection:"row",gap:1,alignItems:"center"}}>
                        <Rating
                          name="read-only"
                          value={supplier.averageRating}
                          readOnly
                        />
                        <Typography variant="body2">
                           {`(${supplier.countRating})`}
                        </Typography>
                      </Box >
                    </Box>
                    
                  </CardContent>
                  <CardActions sx={{alignSelf:"flex-end"}}>
                    
                    {supplier.status == "ACTIVE" ? (
                      <Chip variant="filled" color="success" label={`${supplier.status}`}></Chip>
                    ) : (
                      <Chip variant="filled" color="danger" label={`${supplier.status}`}></Chip>
                    )}
                    <Button size="small" variant="contained" sx={{color:"white"}}>
                      Request service
                    </Button>
                  </CardActions>
                </Box>
               
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SuppliersPage;
