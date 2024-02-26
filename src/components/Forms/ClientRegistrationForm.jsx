import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import BaseUrl from "../../utils/BaseUrl";
import Axios from "axios";
import TokenInterceptor from "../../utils/tokenInterceptor";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
  Button,
} from "@mui/material";

const schema = z.object({
  name: z.string().min(3),
  lastName: z.string().min(3),
  phone: z.string().min(10).max(15),
  phone2: z.string().nullable(),
  age: z.string().min(1).max(2),
  gender: z.nativeEnum(["MALE", "FEMALE"]),
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
    
      await Axios.post(`${BaseUrl}/clients`, {
        name: data.name,
        lastName: data.lastName,
        phone: data.phone,
        phone2: data.phone2,
        age: parseInt(data.age, 10),
        gender: data.gender,
      })
        .then((response) => {
          console.log(response)
            setTimeout(function () {
                location.reload();
              }, 2000);
            return alert("Client created succesfully");
          
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
        {...register("name")}
        error={errors.name}
        id="name"
        label="Name"
        type="text"
        required
        helperText={errors.name && `${errors.name.message}`}
      />
      <TextField
        {...register("lastName")}
        error={errors.lastName}
        id="lastName"
        label="Last Name"
        type="text"
        required
        helperText={errors.lastName && `${errors.lastName.message}`}
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
        {...register("age")}
        error={errors.age}
        id="age"
        label="Age"
        type="number"
        required
        helperText={errors.age && `${errors.age.message}`}
      />
      <FormControl error={errors.gender}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select {...register("gender")} id="gender" label="Gender" required defaultValue="">
          <MenuItem value="">
            <em>Select a gender</em>
          </MenuItem>
          <MenuItem value="MALE">Male</MenuItem>
          <MenuItem value="FEMALE">Female</MenuItem>
        </Select>
        {errors.gender && (
          <FormHelperText>{errors.gender.message}</FormHelperText>
        )}
      </FormControl>

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
