import { Link } from "react-router-dom";
import Bag from "../../assets/bag.svg";
import Heart from "../../assets/heart.svg";

export function IconMenu() {
    const cartItems = 2;

    return (
        <ul className="flex flex-row gap-4 relative">
            <li>
                <Link to="/ulubione">
                    <img src={Heart} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk">
                    <img src={Bag} />
                    <div className="absolute bottom-[-5px] right-[-5px] h-[16px] 
                    w-[16px] rounded-lg bg-yellow flex justify-center 
                    items-center text-[10px] font-semibold">
                        {cartItems}
                    </div>
                </Link>
            </li>
        </ul>
    );
}