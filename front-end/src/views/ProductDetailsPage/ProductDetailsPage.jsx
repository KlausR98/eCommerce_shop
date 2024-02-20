import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenuSidebar } from "../../components/ExpandableMenuSidebar/ExpandableMenuSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { Photos } from "../../components/Photos/Photos";
import { useLoaderData } from "react-router-dom";

export function ProductDetailsPage() {
    const product = useLoaderData();

    return (
        <FlexContainer>
            <ExpandableMenuSidebar />
            <div className="w-full">
                <Breadcrumbs />
                <div className="pt-4 w-full">
                    <FlexContainer>
                        <Photos product={product} />
                        <ProductDetail product={product} />
                    </FlexContainer>
                </div>
            </div>
        </FlexContainer>
    );
}
