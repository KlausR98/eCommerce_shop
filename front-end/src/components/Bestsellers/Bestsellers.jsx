import { CenterContent } from "../CenterContent/CenterContent";
import { Product } from "../Product/Product";

export function Bestsellers({ products }) {
    return (
        <CenterContent >
            <div className="pl-[198px]">
                <h2 className="pt-8  font-[750]">Sprawdź nasze bestsellery</h2>
                <div className="pt-4  flex flex-row justify-between">
                    {products.map((product) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </CenterContent>
    );
}