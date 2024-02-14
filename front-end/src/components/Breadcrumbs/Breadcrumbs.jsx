import { NavLink } from "react-router-dom";
import ArrowIcon from "../../assets/arrow.svg";

export function Breadcrumbs() {
    const activePath = "swetry";

    const breadcrumbs = [
        {
            categoryName: "Kobieta",
            path: "kobieta"
        },
        {
            categoryName: "Odzież",
            path: "odziez"
        },
        {
            categoryName: "Swetry",
            path: "swetry"
        }
    ];

    return (
        <ul className="flex flex-row uppercase gap-2 pt-4 px-4">
            {breadcrumbs.map((breadcrumb, index, array) => {
                const isLast = index === array.length - 1;

                return (
                    <li key={breadcrumb.path}>
                        <NavLink
                            className="flex flex-row gap-1 "
                            to={breadcrumb.path}
                        >
                            <p
                                className={`${activePath === breadcrumb.path ? 'font-semibold' : ''}`}
                            >
                                {breadcrumb.categoryName}
                            </p>
                            {!isLast && (
                                <img
                                    className="rotate-[270deg]"
                                    src={ArrowIcon}
                                />
                            )}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}