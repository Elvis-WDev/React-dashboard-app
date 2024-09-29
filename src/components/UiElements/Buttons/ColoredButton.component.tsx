import { ColoredButtonColors, SizesButtons } from "../../../config";

interface ColoredButtonProps {
    gradient: keyof typeof ColoredButtonColors;
    title: string;
    size?: keyof typeof SizesButtons;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}



export const ColoredButton = ({ leftIcon, rightIcon, gradient, title, size = 'sm' }: ColoredButtonProps) => {

    const selectedColoredClasses = ColoredButtonColors[gradient];

    const SizeButton = SizesButtons[size];

    return (
        <button
            type="button"
            className={`flex items-center justify-center text-white font-medium rounded-lg focus:outline-none focus:ring-4 me-2 mb-2 ${selectedColoredClasses} ${SizeButton}`}
        >
            {leftIcon && leftIcon}
            {title}
            {rightIcon && rightIcon}
        </button >
    );
};