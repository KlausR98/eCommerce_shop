import { CenterContent } from "../CenterContent/CenterContent";
import { Product } from "../Product/Product";

export function AllProductsContainer({ products, headTitle }) {
    return (
        <CenterContent >
            <div>
                <h2 className="py-4 font-[750]">{headTitle}</h2>
                <div className="flex flex-wrap gap-x-20 ">
                    {products.map((product) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </CenterContent>
    );
}