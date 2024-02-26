import { useForm } from "react-hook-form";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";


export default function MyForm({info}) {
  const {
    register
  } = useForm({
    defaultValues: {
      name: info.name,
      lastName:info.lastName,
      phone:info.phone,
      phone2:info.phone2,
      age: info.age,
      gender:info.gender
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
        {...register("name")}
        id="name"
        label="Name"
        type="text"
        disabled
      />
      <TextField
        {...register("lastName")}
        id="lastName"
        label="Last Name"
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
        {...register("age")}
        id="age"
        label="Age"
        type="number"
        disabled
      />
      <FormControl>
        <InputLabel id="gender">{info.gender}</InputLabel>
        <Select {...register("gender")} id="gender" label={"Gender"} disabled defaultValue={info.gender}>
          <MenuItem value="MALE">Male</MenuItem>
          <MenuItem value="FEMALE">Female</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
