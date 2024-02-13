import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";

export function CategoryMenu() {
    return (
        <div className="text-white text-base font-normal bg-[#056943] w-full">
            <ul className="p-4 mx-auto max-w-[1600px] w-full flex flex-column flex-start gap-4">
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={category.path}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}