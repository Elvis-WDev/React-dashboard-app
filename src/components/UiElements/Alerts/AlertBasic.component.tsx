import { AlertColorStyles } from "../../../config";

interface AlertBasicProps {
    color: keyof typeof AlertColorStyles;
    Title: string;
    Message: string;
}

export const AlertBasic: React.FC<AlertBasicProps> = ({ color, Title, Message }) => {

    const { text, darkText } = AlertColorStyles[color] || AlertColorStyles['blue'];

    return (
        <div className={`flex p-4 mb-4 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 text-${text} dark:text-${darkText}`} role="alert">
            <span className="font-medium">{Title}</span> {Message}
        </div>
    );
};
