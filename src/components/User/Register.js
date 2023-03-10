import React from "react";
import { signUp } from "../../Constants/signup";
import {
  FormControl,
  TextField,
  Box,
  FormLabel,
  InputAdornment,
} from "@mui/material";
import SignupButton from "../../CardSlider/Buttons/SignupButton";
import useRegister from "../../Hooks/useRegister";
import { Link } from "react-router-dom";
export default function Register() {
  const [handleSubmit, handleChange, disable] = useRegister();
  return (
    <FormControl sx={{ width: "80%" }}>
      <h3>Create an Account</h3>
      {signUp.map((input) => (
        <Box sx={{ textAlign: "left", mt: 2, mb: 1 }} key={input.id}>
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
      <SignupButton handleSubmit={handleSubmit} disable={disable} />
      <p>
        {" "}
        Already have an account? Login <Link to="/login">here</Link>{" "}
      </p>
    </FormControl>
  );
}
