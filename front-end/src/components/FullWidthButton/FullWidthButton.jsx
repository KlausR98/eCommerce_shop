export function FullWidthButton({ children, onClick, background }) {
    return (
        <button onClick={onClick}
            className={`bg-[${background}] h-[50px] w-[292px] 
        text-white  font-bold text-base
        justify-center items-center flex`}
        >
            {children}
        </button>
    );
}