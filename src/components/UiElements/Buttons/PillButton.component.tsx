import { PillButtonColors, SizesButtons } from "../../../config";

interface PillButtonProps {
    color: keyof typeof PillButtonColors;
    title: string;
    size?: keyof typeof SizesButtons;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const PillButton = ({ leftIcon, rightIcon, color, title, size = 'sm' }: PillButtonProps) => {

    const selectedPillColorClasses = PillButtonColors[color];

    const SizeButton = SizesButtons[size];

    return (
        <button
            type="button"
            className={`flex items-center justify-center font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none focus:ring-4 ${selectedPillColorClasses} ${SizeButton}`}
        >
            {leftIcon && leftIcon}
            {title}
            {rightIcon && rightIcon}
        </button>

    );
};