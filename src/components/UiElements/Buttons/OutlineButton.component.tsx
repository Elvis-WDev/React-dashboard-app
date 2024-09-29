import { OutlinedButtonColors, SizesButtons } from "../../../config";

interface BorderButtonProps {
    variant: keyof typeof OutlinedButtonColors;
    title: string;
    size?: keyof typeof SizesButtons;
    icon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const OutlineButton = ({ leftIcon, rightIcon, variant, title, size = 'sm' }: BorderButtonProps) => {

    const selectedButtonClasses = OutlinedButtonColors[variant];
    const SizeButton = SizesButtons[size];

    return (
        <button
            type="button"
            className={`flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-4 me-2 mb-2 ${selectedButtonClasses} ${SizeButton}`}
        >
            {leftIcon && leftIcon}
            {title}
            {rightIcon && rightIcon}
        </button>
    );
};
