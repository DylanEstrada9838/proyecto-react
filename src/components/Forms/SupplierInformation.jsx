import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField
} from "@mui/material";


export default function MyForm({info}) {
  const {
    register
  } = useForm({
    defaultValues: {
      businessName: info.businessName,
      phone:info.phone,
      phone2:info.phone2, 
      address:info.address
    },
  });
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 30,
        minWidth: "80%",
      }}
    >
      <TextField
        {...register("businessName")}
        id="businessName"
        label="Business Name"
        type="text"
        disabled
      />
      
      <TextField
        {...register("phone")}
        id="phone"
        label="Phone"
        type="text"
        disabled
      />
      <TextField
        {...register("phone2")}
        id="phone2"
        label="Phone 2 (Optional)"
        type="text"
        disabled
      />
      <TextField
        {...register("address")}
        id="address"
        label="Address"
        type="text"
        disabled
      />
    </form>
  );
}
