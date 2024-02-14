import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import ArrowIcon from "../../assets/arrow.svg";

export function ExpandableMenuSidebar() {
    const activePath = "odziez";
    const activeSubpath = "swetry";

    return (
        <div className="pl-4 min-w-44 h-full">
            <p className="font-semibold py-4">Kobieta</p>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink className="flex flex-row justify-between">
                                {category.categoryName}
                                <img
                                    src={ArrowIcon}
                                    alt="ArrowIcon"
                                    className={`${activePath === category.path ? 'rotate-180' : ''}`}
                                />
                            </NavLink>
                            <ul>
                                {category.subCategories.map((subCategory) => {
                                    return (
                                        <li
                                            className={`pl-8 ${activeSubpath === subCategory.path ? 'font-semibold' : ''}`}
                                            key={subCategory}
                                        >
                                            <NavLink to={subCategory.path}>
                                                {subCategory.categoryName}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}