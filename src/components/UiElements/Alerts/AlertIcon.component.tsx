import { AlertColorStyles } from "../../../config";

interface AlertIconProps {
    color: keyof typeof AlertColorStyles;
    Title: string;
    Message: string;
    icon: React.ReactNode;
}


export const AlertIcon: React.FC<AlertIconProps> = ({ color, Title, Message, icon }) => {

    const { text, darkText } = AlertColorStyles[color] || AlertColorStyles['blue'];

    return (
        <div
            className={`flex items-center p-4 mb-4 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 text-${text} dark:text-${darkText}`}
            role="alert"
        >
            {icon}
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">{Title}</span> {Message}
            </div>
        </div>
    );
};
