import { Link } from "react-router-dom";
import Heart from "../../assets/heart.svg";
import { useState } from "react";
import HeartFull from "../../assets/heart-full.svg";

const ENDPOINT_TO_PATH_MAPPING = {
    men: "mezczyzna",
    women: "kobieta",
    children: "dziecko",
};

export function Product({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}
            className="relative"
        >
            <img className="h-[300px] w-[200px]" src={product.photos[0]} />
            <p className="font-[750]">{product.productName}</p>
            <p className="text-[#C60C0C] ">{product.pricePLN}zł</p>

            <img
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                src={isHovered ? HeartFull : Heart}
                alt="Heart"
                className="absolute top-2 left-2 w-6 h-6 bg-no-repeat bg-cover"
            />
        </Link>
    );
}