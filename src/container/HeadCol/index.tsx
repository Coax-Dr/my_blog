import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./avatar";
import "./style"

export interface HeadColProps {
    options: { name: string, path: string, key: string }[]
}

const HeadCol: React.FC<HeadColProps> = ({ options }) => {
    return (
        <div className="head_row">
            {options.map(o => (
                <div className="head_row_col" key={o.key}>
                    <Link to={o.path}>{o.name}</Link>
                </div>
            ))}
            <Avatar />
        </div>
    );
}

export default HeadCol;