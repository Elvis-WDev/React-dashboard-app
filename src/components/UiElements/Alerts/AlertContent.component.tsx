
import { AlertColorStyles } from "../../../config";

interface AlertContentProps {
    color: keyof typeof AlertColorStyles;
    Title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}

export const AlertContent: React.FC<AlertContentProps> = ({ color, icon, Title, children }) => {

    const { text, darkText, border, darkBorder } = AlertColorStyles[color] || AlertColorStyles['blue'];

    return (
        <div
            id="alert-additional-content-1"
            className={`p-4 mb-4 border border-${border} rounded-lg bg-gray-50 text-${text} dark:bg-gray-800 dark:text-${darkText} dark:border-${darkBorder}`}
            role="alert"
        >
            <div className="flex items-center">
                {icon}
                <span className="sr-only">Info</span>
                <h3 className="text-lg font-medium ms-2">{Title}</h3>
            </div>

            {children && <div className="mt-2 text-sm">{children}</div>}
        </div>
    );
};
