// import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenuSidebar } from "../../components/ExpandableMenuSidebar/ExpandableMenuSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { Photos } from "../../components/Photos/Photos";

export function ProductDetailsPage() {
    const product = [
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        }
    ];

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
