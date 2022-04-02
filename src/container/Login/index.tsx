import React, { useEffect } from "react";
import { Backdrop, Card, TextField } from "@mui/material";

export interface LoginProps {
  open: boolean
}

const Login: React.FC<LoginProps> = ({ open }) => {
  return (
    <Backdrop open={open} sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Card>
        <TextField
          id="username"
          type={"text"}
          label="username"
          color={"primary"}
          autoFocus
        />
        <TextField
          id="password"
          type={"password"}
          label="password"
          color={"primary"}
        />
      </Card>
    </Backdrop>
  )
}
export default Login;