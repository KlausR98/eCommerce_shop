export function FullWidthButton({ children, onClick }) {
    return (
        <button onClick={onClick} className="bg-[#056943] h-[50px] w-[292px] 
        text-white  font-bold text-base
        justify-center items-center flex">
            {children}
        </button>
    );
}