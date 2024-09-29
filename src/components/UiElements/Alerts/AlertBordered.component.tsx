
import { AlertColorStyles } from "../../../config";


interface AlertBorderedProps {
    color: keyof typeof AlertColorStyles;
    Title: string;
    Message: string;
    icon: React.ReactNode;
}

export const AlertBordered: React.FC<AlertBorderedProps> = ({ color, Title, Message, icon }) => {

    const { text, darkText, border, darkBorder } = AlertColorStyles[color] || AlertColorStyles['blue'];

    return (
        <div
            className={`flex items-center p-4 mb-4 text-sm border border-${border} rounded-lg bg-gray-50 text-${text} dark:bg-gray-800 dark:text-${darkText} dark:border-${darkBorder}`}
            role="alert"
        >
            {icon}
            <span className="sr-only">Info</span>
            <div className="ms-3">
                <span className="font-medium">{Title}</span> {Message}
            </div>
        </div>
    );
};
