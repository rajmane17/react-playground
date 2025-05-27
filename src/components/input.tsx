interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    placeholder: string,
    type: string,
    children?: React.ReactNode,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required: boolean,
    error?:string,
    disabled?: boolean,
    icon?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
    className,
    placeholder,
    type,
    children,
    onChange,
    required,
    value,
    disabled,
    error,
    icon
}) => {
    return (
        <div className="w-full">
          <div
            className={`flex items-center gap-2 px-4 py-2 border rounded-md bg-white focus-within:ring-2 ${
              error ? "border-red-500 ring-red-200" : "border-gray-300 ring-blue-200"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {icon && <span className="text-gray-500">{icon}</span>}
            <input
              className={`w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent ${className}`}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
            />
            {children}
          </div>
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
      );
}

export default Input
