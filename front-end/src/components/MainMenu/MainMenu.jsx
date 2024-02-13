import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";

export function MainMenu() {

    return <ul className="flex items-center gap-4 justify-start p-4 ">
        {GENDERS.map((category) => {
            return (
                <li key={category.path}>
                    <NavLink className="active:text-[#2220202] active:border-b-[3px] text-[#7A7A7A]" to={category.path} >
                        {category.categoryName.toUpperCase()}
                    </NavLink>

                </li>
            );
        })}

    </ul>;
}