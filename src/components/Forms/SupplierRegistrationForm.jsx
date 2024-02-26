import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import BaseUrl from "../../utils/BaseUrl";
import Axios from "axios";
import TokenInterceptor from "../../utils/tokenInterceptor";
import {
  TextField,
  FormHelperText,
  Button,
} from "@mui/material";

const schema = z.object({
  businessName: z.string().min(1).max(100),
  phone: z.string().min(5).max(15),
  phone2: z.string().optional(),
  address: z.string().min(5).max(100),
});

export default function MyForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });
  TokenInterceptor();

  const onSubmit = async (data) => {
    if (data.phone2 === "") {
      data.phone2 = null;
    }
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await Axios.post(`${BaseUrl}/suppliers`, {
      businessName: data.businessName,
      phone: data.phone,
      phone2: data.phone2,
      address: data.address,
    })
      .then((response) => {
        console.log(response)
        setTimeout(function () {
            location.reload();
          }, 2000);
        return alert("Supplier created succesfully");
        
        
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
      <TextField
        {...register("businessName")}
        error={errors.businessName}
        id="businessName"
        label="Business Name"
        type="text"
        required
        helperText={errors.businessName && `${errors.businessName.message}`}
      />
      <TextField
        {...register("phone")}
        error={errors.phone}
        id="phone"
        label="Phone"
        type="text"
        required
        helperText={errors.phone && `${errors.phone.message}`}
      />
      <TextField
        {...register("phone2")}
        error={errors.phone2}
        id="phone2"
        label="Phone 2 (Optional)"
        type="text"
        helperText={errors.phone2 && `${errors.phone2.message}`}
      />
      <TextField
        {...register("address")}
        error={errors.address}
        id="address"
        label="Address"
        type="text"
        required
        helperText={errors.address && `${errors.address.message}`}
      />
      <Button
        color="secondary"
        variant="contained"
        disabled={isSubmitting}
        type="submit"
        sx={{ minWidth: "200px", alignSelf: "center" }}
      >
        {isSubmitting ? "Submitting" : "Register"}
      </Button>
    </form>
  );
}
