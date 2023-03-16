import React from "react";
import { signUp } from "../../Constants/signup";
import { countries } from "../../Constants/Countries";
import {
  FormControl,
  TextField,
  Box,
  FormLabel,
  InputAdornment,
  Autocomplete,
  MenuItem,
  Button,
} from "@mui/material";
import SignupButton from "../Buttons/SignupButton";
import useRegister from "../../Hooks/useRegister";
import { Link } from "react-router-dom";
import Alerts from "../Alert/Alerts";
export default function Register() {
  const [
    handleSubmit,
    handleChange,
    disable,
    country,
    handleCountry,
    alert,
    handleCloseAlert,
  ] = useRegister();
  return (
    <FormControl sx={{ width: "80%" }}>
      <Alerts alert={alert} handleCloseAlert={handleCloseAlert} />
      <h3>Create an Account</h3>
      {signUp.map((input) => (
        <Box sx={{ textAlign: "left", mt: 0, mb: 1 }} key={input.id}>
          <FormLabel
            htmlFor={input.Placeholder}
            sx={{ textAlign: "left", mt: 2, mb: 1, fontWeight: "bold" }}
          >
            {input.Placeholder}
          </FormLabel>
          <br />
          <TextField
            type={input.type}
            placeholder={input.Placeholder}
            id={input.Placeholder}
            fullWidth
            name={input.name}
            pattern={input.pattern}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{input.icon}</InputAdornment>
              ),

              inputProps: {
                //   style: {
                //     fontSize: "20px",
                //     height: "20px",
                //     color: "white",
                //   },
              },
            }}
          />
        </Box>
      ))}
      

      <Box sx={{ textAlign: "left" }}>
      <FormLabel
            htmlFor=''
            sx={{ textAlign: "left", mt: 2, mb: 1, fontWeight: "bold" }}
          >
           Country
          </FormLabel>
        <TextField
          select
          fullWidth
          value={country}
          label="Choose a country"
          onChange={handleCountry}
        >
          {countries.map((country, index) => (
            <MenuItem value={country.label} key={index}>
              {country.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <br />
      <SignupButton handleSubmit={handleSubmit} disable={disable} />

      <p>
        {" "}
        Already have an account? Login <Link to="/login">here</Link>{" "}
      </p>
    </FormControl>
  );
}
