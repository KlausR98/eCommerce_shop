import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import ArrowIcon from "../../assets/arrow.svg";

const PATH_TO_GENDER_NAME = {
    kobieta: "Kobieta",
    mezczyzna: "Mężczyzna",
    dziecko: "Dziecko",
};


export function ExpandableMenuSidebar() {
    const params = useParams();
    const activePath = params.category;

    return (
        <div className="pl-4 min-w-44 h-full">
            <p className="font-semibold py-4">{PATH_TO_GENDER_NAME[params.gender]}</p>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li
                            key={category.path}

                        >
                            <NavLink
                                className={`${category.path === activePath ? 'font-semibold' : ''} flex flex-row justify-between`}
                                to={`/${params.gender}/${category.path}`}>
                                {category.categoryName}{" "}
                                <img
                                    src={ArrowIcon}
                                    alt="ArrowIcon"
                                    className={`${activePath === category.path ? 'rotate-180' : ''}`}
                                />
                            </NavLink>
                            {activePath === category.path && (
                                <ul>
                                    {category.subCategories.map((subCategory) => {
                                        return (
                                            <li className="pl-8" key={subCategory.path}>
                                                <NavLink
                                                    to={`/${params.gender}/${params.category}/${subCategory.path}`}
                                                    className={`${activePath === subCategory.path ? 'font-semibold' : ''}`}
                                                >
                                                    {subCategory.categoryName}
                                                </NavLink>
                                            </li>
                                        );
                                    }
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

