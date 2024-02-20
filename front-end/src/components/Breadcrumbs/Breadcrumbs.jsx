import { NavLink, useParams } from "react-router-dom";
import ArrowIcon from "../../assets/arrow.svg";
import { CATEGORIES, GENDERS } from "../../constants/categories";

export function Breadcrumbs() {
    const { gender, category, subCategory } = useParams();

    const foundGender = GENDERS.find((g) => g.path === gender);
    const foundCategory = CATEGORIES.find((c) => c.path === category);

    const breadcrumbs = [
        {
            categoryName: foundGender.categoryName,
            path: `/${foundGender.path}`,
        },
        {
            categoryName: foundCategory.categoryName,
            path: `/${foundGender.path}/${foundCategory.path}`,
        },
    ];

    if (subCategory) {
        const foundSubCategory = foundCategory.subCategories.find(
            (sc) => sc.path === subCategory);

        breadcrumbs.push({
            categoryName: foundSubCategory.categoryName,
            path: `/${foundGender.path}/${foundCategory.path}/${foundSubCategory.path}`
        });
    }

    return (
        <ul className="flex flex-row uppercase gap-2 pt-4 px-4">
            {breadcrumbs.map((breadcrumb, index, array) => {
                const isLast = index === array.length - 1;

                return (
                    <li key={breadcrumb.path}>
                        <NavLink to={breadcrumb.path} className={`flex flex-row gap-1 ${isLast ? 'font-semibold' : ''}`}>
                            {breadcrumb.categoryName}
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