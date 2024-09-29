import { GradientButtonColors, SizesButtons } from "../../../config";

interface GradientButtonProps {
    color: keyof typeof GradientButtonColors;
    title: string;
    size?: keyof typeof SizesButtons;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const GradientButton = ({ leftIcon, rightIcon, color, title, size = 'sm' }: GradientButtonProps) => {

    const selectedGradientClasses = GradientButtonColors[color];

    const SizeButton = SizesButtons[size];

    return (
        <button
            type="button"
            className={`flex items-center justify-center text-white font-medium rounded-lg focus:outline-none focus:ring-4 me-2 mb-2 ${selectedGradientClasses} ${SizeButton}`}
        >
            {leftIcon && leftIcon}
            {title}
            {rightIcon && rightIcon}
        </button>
    );
};
