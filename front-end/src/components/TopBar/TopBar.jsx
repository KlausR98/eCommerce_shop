export function TopBar({ children }) {
    return (
        <div className="grid grid-cols-3 w-full max-w-[1600px] mx-auto items-center ">
            {children}
        </div>
    );
}