import { NavLink } from "react-router-dom";

export function Logo() {
    return (
        <NavLink to="/">
            <h1 className="uppercase font-semibold text-center">TOPSKLEP®</h1>
        </NavLink>
    );
}
