import { useState } from "react";
// import { FlexContainer } from "../FlexContainer/FlexContainer";

export function Photos({ product }) {

    const [currentPhoto, setCurrentPhoto] = useState(product[0].photos[0]);

    return (
        <div className="flex flex-row ">
            <div className="flex flex-col">
                {product[0].photos.map((photo) => {
                    return (
                        <img
                            onClick={() => { setCurrentPhoto(photo) }}
                            key={photo}
                            src={photo}
                            className={`h-[120px] w-[85px] min-w-[85px] min-h-[120px] mb-4 cursor-pointer
                            ${photo === currentPhoto ? 'border-2 border-[#222020]' : ''}
                            `}
                        />
                    );
                })}
            </div>
            <img
                src={currentPhoto}
                className="flex w-[500px] h-[700px] pl-4"
            />
        </div>
    );
}