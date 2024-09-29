import { SimpleButtonColors, SizesButtons } from "../../../config";

interface SimpleButtonProps {
    color: keyof typeof SimpleButtonColors;
    size?: keyof typeof SizesButtons;
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const SimpleButton = ({ leftIcon, rightIcon, color, title, size = 'sm' }: SimpleButtonProps) => {

    const selectedColorClasses = SimpleButtonColors[color];

    const SizeButton = SizesButtons[size];

    return (
        <button
            type="button"
            className={`flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-4 ${selectedColorClasses} ${SizeButton}`}

        >
            {leftIcon && leftIcon}
            {title}
            {rightIcon && rightIcon}
        </button>

    );
};