import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type ="button",
    ...props
}, ref) => {
    return (
        <button type={type} className={twMerge(`w-full rounded-full bg-[#38BBF8] px-6 py-2 disabled:cursor-not-allowed text-[#020024] font-bold hover:text-white hover:bg-[#020024] `, className)}
        disabled={disabled}
        ref={ref}
        {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button"

export default Button