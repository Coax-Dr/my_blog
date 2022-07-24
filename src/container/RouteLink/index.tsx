import React from "react";
import { Link } from "react-router-dom";
import "./style"

export interface RouteLinkProps {
    options: { name: string, path: string, key: string }[]
}

const RouteLink: React.FC<RouteLinkProps> = ({ options }) => {
    return (
        <div className="head_row">
            {options.map(o => <div className="head_row_col" key={o.key}><Link to={o.path} style={{ color: "#fff" }}>{o.name}</Link></div>)}
        </div>
    );
}

export default RouteLink;