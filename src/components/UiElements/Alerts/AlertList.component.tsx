import { AlertColorStyles } from "../../../config";

interface AlertListProps {
    color: keyof typeof AlertColorStyles;
    Title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}

export const AlertList: React.FC<AlertListProps> = ({ color, Title, icon, children }) => {

    const { text, darkText } = AlertColorStyles[color] || AlertColorStyles['blue'];

    return (
        <div className={`flex p-4 mb-4 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 text-${text} dark:text-${darkText}`} role="alert">
            {icon}
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">{Title}</span>
                <ul className="mt-1 list-disc list-inside">
                    {children}
                </ul>
            </div>
        </div>
    );
};
