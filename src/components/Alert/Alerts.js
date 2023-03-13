import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// export default function Alerts({ openAlert, message, severity, handleCloseAlert }) {
export default function Alerts({ alert }) {
  useEffect(() => {
    // console.log(alert);
  });
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        // onClose={handleCloseAlert}
      >
        <Alert
          // onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
