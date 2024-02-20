import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenuSidebar } from "../../components/ExpandableMenuSidebar/ExpandableMenuSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { AllProductsContainer } from "../../components/AllProductsContainer/AllProductsContainer";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";


export function ProductListPage() {
    const { products, numberOfPages } = useLoaderData();
    const params = useParams();

    const foundCategory = CATEGORIES.find((c) => c.path === params.category);

    let foundSubCategory;

    if (params.subCategory) {
        foundSubCategory = foundCategory.subCategories.find(
            (sc) => sc.path === params.subCategory);
    }

    return (
        <FlexContainer>
            <ExpandableMenuSidebar />
            <div className="flex flex-col">
                <Breadcrumbs />
                <AllProductsContainer
                    headTitle={foundSubCategory
                        ? foundSubCategory.categoryName
                        : foundCategory.categoryName}
                    products={products}
                />
                <Pagination numberOfPages={numberOfPages} />
            </div>
        </FlexContainer>
    );
}