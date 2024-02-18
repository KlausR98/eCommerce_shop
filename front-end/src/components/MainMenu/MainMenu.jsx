import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";
import { useState } from "react";

export function MainMenu() {
    const [activeLink, setActiveLink] = useState(0);

    return <ul className="flex items-center gap-4 justify-start p-4 ">
        {GENDERS.map((category, index) => {
            return (
                <li key={category.path}>
                    <NavLink
                        className={`${activeLink === index ? ' border-b-[3px] text-[#222020] border-[#222020]' : 'text-[#7A7A7A]'}`}
                        to={category.path}
                        onClick={() => setActiveLink(index)}
                    >
                        {category.categoryName.toUpperCase()}
                    </NavLink>

                </li>
            );
        })}

    </ul>;
}