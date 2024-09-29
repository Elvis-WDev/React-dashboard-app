import { XMarkIcon } from "@heroicons/react/24/outline";
import { AlertColorStyles } from "../../../config";

interface AlertBorderAccentProps {
    color: keyof typeof AlertColorStyles;
    InfoMessage: string;
    icon: React.ReactNode;
}

export const AlertBorderAccent: React.FC<AlertBorderAccentProps> = ({ color, InfoMessage, icon }) => {
    const { border, text, darkText, darkBorder, ring } = AlertColorStyles[color] || AlertColorStyles['blue'];

    return (
        <div
            id="alert-border-1"
            className={`flex items-center p-4 mb-4 border-t-4 border-${border} bg-gray-50 text-${text} dark:text-${darkText} dark:bg-gray-800 dark:border-${darkBorder}`}
            role="alert"
        >
            {icon}
            <div className="ms-3 text-sm font-medium">
                {InfoMessage}
            </div>
            <button
                type="button"
                className={`ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-${text} rounded-lg focus:ring-2 focus:ring-${ring} p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-${darkText} dark:hover:bg-gray-700`}
                data-dismiss-target="#alert-border-1"
                aria-label="Close"
            >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
        </div>
    );
};
