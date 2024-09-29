import { useState } from 'react';

interface SwitchBasicProps {
    disabled?: boolean
    checked?: boolean
}

export const SwitchBasic = ({ checked = false, disabled }: SwitchBasicProps) => {

    const [enabled, setEnabled] = useState<boolean>(checked);

    return (
        <div>
            <label
                htmlFor="BasicSwitch"
                className="flex cursor-pointer select-none items-center"
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id="BasicSwitch"
                        disabled={disabled}
                        className="sr-only"
                        onChange={() => {
                            setEnabled(!enabled);
                        }}
                    />
                    <div className="block h-8 w-14 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                    <div
                        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white dark:bg-white transition ${enabled && '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                            }`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

