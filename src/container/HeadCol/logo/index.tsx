import React, { useState } from "react";
import { Avatar } from "@mui/material";
import Login from "container/Login";
import pic from "assets/img/avatar.png";
import "./style";

const Logo: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <React.Fragment>
            <div className="avatar" onClick={() => setOpen(!open)}>
                <Avatar src={pic} />
            </div>
            {open && <Login open={open} />}
        </React.Fragment>
    );
}

export default Logo;