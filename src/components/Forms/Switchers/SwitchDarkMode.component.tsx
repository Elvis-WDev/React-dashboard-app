import { useState } from 'react';

interface SwitchIconProps {
    LeftIcon?: React.JSX.Element;
    RightIcon?: React.JSX.Element;
    color?: string;
    onClick?: () => void
    className?: string
}

export const SwitchDarkMode = ({ color, LeftIcon, RightIcon, onClick, className }: SwitchIconProps) => {

    const [enabled, setEnabled] = useState<boolean>(true);

    const handleSwitch = () => {
        setEnabled(!enabled);
    }

    return (
        <div className={`${className}`}>
            <label
                htmlFor="SwitchDarkMode"
                className="flex cursor-pointer select-none items-center"
            >
                <div className="relative">
                    <input
                        onClick={onClick}
                        type="checkbox"
                        id="SwitchDarkMode"
                        className="sr-only"
                        onChange={handleSwitch}
                    />
                    <div className={`block h-8 w-14 rounded-full bg-gray-200 dark:bg-${color}-600`}>

                    </div>
                    <div
                        className={`absolute flex justify-center items-center text-gray-400 left-1 top-1 h-6 w-6 rounded-full bg-white dark:bg-white transition ${enabled && '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                            }`}
                    >
                        {
                            enabled ? (
                                LeftIcon
                            ) : (
                                RightIcon
                            )
                        }
                    </div>
                </div>
            </label>
        </div>
    );
};

