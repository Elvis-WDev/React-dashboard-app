import { XMarkIcon } from "@heroicons/react/24/outline";
import { AlertColorStyles } from "../../../config";

interface AlertDismissProps {
    color: keyof typeof AlertColorStyles;
    InfoMessage: string;
    icon: React.ReactNode;
}

export const AlertDismissing: React.FC<AlertDismissProps> = ({ color, InfoMessage, icon }) => {

    const { text, darkText } = AlertColorStyles[color] || AlertColorStyles['blue'];

    return (
        <div
            id="alert-1"
            className={`flex items-center p-4 mb-4 text-${text} rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-${darkText}`}
            role="alert"
        >
            {icon}
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
                {InfoMessage}
            </div>
            <button
                type="button"
                className={`ms-auto -mx-1.5 -my-1.5 text-${text} rounded-lg focus:ring-2 focus:ring-gray-200 focus:dark:ring-gray-800 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-${darkText} dark:hover:bg-gray-700`}
                data-dismiss-target="#alert-1"
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
        </div>
    );
};
