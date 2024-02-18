export function FullWidthButton({ children, onClick, background, width }) {
    return (
        <button onClick={onClick}
            className={`bg-[${background}] h-[50px] min-w-[292px] w-${width}
        text-white  font-bold text-base
        justify-center items-center flex`}
        >
            {children}
        </button>
    );
}