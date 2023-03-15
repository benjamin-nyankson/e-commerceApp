import React from "react";
import { Button } from "@mui/material";
export default function ForgotButton({ handleForgot, disable }) {
  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        disabled={disable}
        onClick={handleForgot}
        sx={{
          bgcolor: "#ffc801",
          color: "black",
          fontWeight: "bold",
          textTransform: "capitalize",
          fontSize: "20px",
          borderRadius: "20px",
          "&:hover": {
            bgcolor: "#ffc801",
          },
        }}
        disableElevation
      >
        Reset password
      </Button>
    </div>
  );
}
