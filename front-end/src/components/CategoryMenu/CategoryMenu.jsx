import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

export function CategoryMenu() {
    const params = useParams();
    const [activeLink, setActiveLink] = useState(0);

    return (
        <div className="text-white text-base font-normal bg-[#056943] w-full">
            <ul className="p-4 mx-auto max-w-[1600px] w-full flex flex-column flex-start gap-4">
                {CATEGORIES.map((category, index) => {
                    return (
                        <li
                            className={`${activeLink === index ? ' border-b-[2px] border-[#fff]' : ''}`}
                            key={category.path}
                            onClick={() => setActiveLink(index)}
                        >
                            <NavLink to={`/${params.gender}/${category.path}`}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}