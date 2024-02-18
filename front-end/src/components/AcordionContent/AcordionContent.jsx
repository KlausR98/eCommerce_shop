import { useState } from "react";
import ArrowIcon from "../../assets/arrow.svg";

export function AcordionContent({ items }) {
    const [openItems, setOpenItems] = useState(new Array(items.length).fill(false));

    const toggleItem = (index) => {
        setOpenItems(prevOpenItems => {
            const newOpenItems = [...prevOpenItems];
            newOpenItems[index] = !newOpenItems[index]; // Przełącz wartość
            return newOpenItems;
        });
    };

    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <li
                        key={item.title}
                        onClick={() => toggleItem(index)}
                    >
                        <div
                            className=" flex justify-between items-center px-4 mt-2   
                            py-0 border-b-[1px] border-[#7A7A7A] cursor-pointer"
                        >
                            <p className="mt-2 font-semibold">{item.title}</p>
                            <img
                                className={`w-[12px] h-[12px]  
                                ${openItems[index] ? 'rotate-180' : ''}`}
                                src={ArrowIcon}
                            />
                        </div>
                        {openItems[index] && <p className="mt-2">{item.content}</p>}
                    </li>
                );
            })}
        </ul>
    );
}


// export function AcordionContent({ items }) {
//     const [activeItemIndex, setActiveItem] = useState(null);

//     const handleClick = (index) => {
//         setActiveItem(prevIndex => prevIndex !== index ? index : null);
//     }

//     return (
//         <ul className="pt-8">
//             {items.map((item, index) => {
//                 const isActive = activeItemIndex === index;
//                 return (
//                     <li key={item.title}
//                         className="flex flex-row items-center
//                     justify-between py-4 border-b-2 border-[#7A7A7A]
//                     cursor-pointer"
//                         onClick={() => { handleClick(index) }}
//                     >
//                         <h2 className="font-semibold">{item.title}</h2>
//                         <img
//                             className={`w-[12px] h-[12px] ${activeItemIndex === index ? 'rotate-180' : ''}`}
//                             src={ArrowIcon}
//                         />
//                     </li>
//                 );
//             })}
//             {items.map((item, index) => {
//                 const isActive = activeItemIndex === index;
//                 if (isActive) {
//                     return <p key={index} className="pt-2">{item.content}</p>;
//                 }
//                 return null;
//             })}
//         </ul>
//     )
// }

// export function AcordionContent({ items }) {
//     const [activeItemIndex, setActiveItem] = useState(0);

//     return (
//         <ul>
//             {items.map((item, index) => {
//                 return (
//                     <li
//                         key={item.title}
//                         onClick={() => {
//                             setActiveItem(index);
//                         }}
//                     >
//                         <div
//                             className=" flex justify-between items-center px-4 mt-2
//                         py-0 border-b-[1px] border-[#7A7A7A] cursor-pointer"
//                         >
//                             <p className="mt-2">{item.title}</p>
//                             <img
//                                 className={`w-[12px] h-[12px]
//                                 ${activeItemIndex === index ? 'rotate-180' : ''}`}
//                                 src={ArrowIcon}
//                             />
//                         </div>
//                         {activeItemIndex === index && <p className="mt-2">{item.content}</p>}
//                     </li>
//                 );
//             })}
//         </ul>
//     );
// }