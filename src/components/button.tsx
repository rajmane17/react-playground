export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    variant?: "primary" | "secondary" | "danger" | "ghost";
    icon?: React.ReactNode;
    fullWidth?: boolean;
}


const baseStyles =
    "flex items-center justify-center gap-2 rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 transition";

const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
};

const Button: React.FC<ButtonProps> = ({
    className = "",
    children,
    onClick,
    type = "button",
    disabled = false,
    loading = false,
    variant = "primary",
    icon,
    fullWidth = false,
    ...rest
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
          ${baseStyles}
          ${variants[variant]}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
            {...rest}
        >
            {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
            ) : (
                <>
                    {icon && <span className="text-lg">{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};

export default Button;