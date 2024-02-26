import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import BaseUrl from "../../utils/BaseUrl";
import Axios from "axios";
import TokenInterceptor from "../../utils/tokenInterceptor";
import axios from "axios";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import HouseIcon from '@mui/icons-material/House';


const schema = z.object({
  experienceYear: z.number().min(1).max(99),
  serviceId: z.number().min(1).max(99),
});

export default function MyForm() {
  const [services, setServices] = useState([]);
  const [addressEmpty, setAddressEmpty] = useState(true);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });
  TokenInterceptor();

  const fetchView = () => {
    axios
      .get(`${BaseUrl}/services`)
      .then((response) => {
        console.log(response.data);
        setServices(response.data);
        console.log(services);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${BaseUrl}/users/clients`)
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
         

          axios
            .get(`${BaseUrl}/clients/${response.data.id}/addresses`)
            .then((response) => {
              if (response.status == 200) {
                console.log(response.data);
                if (response.data.length < 0) {
                  setAddressEmpty(false);
                } else {
                  setAddresses(response.data);
                }
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchView();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await Axios.post(`${BaseUrl}/suppliers/${clientId}/services`, {
      yearsExperience: data.yearsExperience,
      serviceId: data.serviceId,
    })
      .then((response) => {
        setTimeout(function () {
          location.reload();
        }, 2000);
        return alert("Service added succesfully");
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.code == "ERR_DUPLICATE_ENTRY") {
          setError("root", {
            message: error.response.data.message,
          });
        } else {
          setError("root", {
            message: error.response.data.details,
          });
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 30,
        minWidth: "80%",
      }}
    >
      {errors.root && (
        <FormHelperText sx={{ color: "error.main" }}>
          {errors.root.message}
        </FormHelperText>
      )}
      <FormControl error={errors.serviceId} required>
        <InputLabel id="serviceId">Service</InputLabel>
        <Select
          {...register("serviceId")}
          id="serviceId"
          label="Service"
          defaultValue=""
        >
          <MenuItem value="">
            <em>Select a service</em>
          </MenuItem>
          {services.map((service, index) => (
            <MenuItem key={index} value={service.id}>
              {service.service}
            </MenuItem>
          ))}
        </Select>
        {errors.serviceId && (
          <FormHelperText>{errors.serviceId.message}</FormHelperText>
        )}
      </FormControl>

      <TextField
        {...register("yearsExperience")}
        error={errors.yearsExperience}
        id="yearsExperience"
        label="Experience years"
        type="number"
        required
        helperText={errors.yearsExperience && `${errors.yearsExperience.message}`}
      />

      

      <Button
        color="secondary"
        variant="contained"
        disabled={isSubmitting}
        type="submit"
        sx={{ minWidth: "200px", alignSelf: "center" }}
      >
        {isSubmitting ? "Submitting" : "Add service"}
      </Button>
    </form>
  );
}
