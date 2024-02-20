import { NavLink } from "react-router-dom";

export function Pagination({ numberOfPages }) {
    const pages = Array(numberOfPages).fill(null);

    return (
        <ul className="flex flex-row pt-8 pb-12 justify-center gap-4">
            {pages.map((page, index) => {
                return (
                    <li key={index}>
                        <NavLink to={`?page=${index + 1}`}>{index + 1}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
}