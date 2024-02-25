import { Link, useFetcher } from "react-router-dom";
import Heart from "../../assets/heart.svg";
import { useState } from "react";
import HeartFull from "../../assets/heart-full.svg";
import { Price } from "../Price/Price";

const ENDPOINT_TO_PATH_MAPPING = {
    men: "mezczyzna",
    women: "kobieta",
    children: "dziecko",
};

export function Product({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const { Form } = useFetcher();


    return (
        <Link
            to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}
            className="relative"
        >
            <img className="h-[300px] w-[200px]" src={product.photos[0]} />
            <p className="font-[750]">{product.productName}</p>
            <p className="text-[#C60C0C] ">
                <Price product={product} />
            </p>
            <Form
                onClick={(e) => {
                    e.stopPropagation();
                }}
                method="POST"
                action={`/add-to-favourites/${product.id}`}
            >
                <button>
                    <img
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        src={isHovered ? HeartFull : Heart}
                        alt="Heart"
                        className="absolute top-2 left-2 w-6 h-6 bg-no-repeat bg-cover"
                    />
                </button>
            </Form>
        </Link >
    );
}