import { Link } from "react-router-dom";
import Heart from "../../assets/heart.svg";
import { useState } from "react";
import HeartFull from "../../assets/heart-full.svg";

export function Product({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link className="relative">
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