import { Link } from "react-router-dom";

export function Product({ product }) {
    return (
        <Link>
            <img className="h-[300px] w-[200px]" src={product.photos[0]} />
            <p className="font-[750]">{product.productName}</p>
            <p className="text-[#C60C0C]">{product.pricePLN}zł</p>
        </Link>
    );
}