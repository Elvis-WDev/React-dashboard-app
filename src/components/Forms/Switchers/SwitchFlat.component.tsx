import { useState } from 'react';

interface SwitchCheckProps {
    disabled?: boolean
    checked?: boolean
}

export const SwitchFlat = ({ checked = false, disabled }: SwitchCheckProps) => {
    const [enabled, setEnabled] = useState(checked);

    return (
        <div x-data="{ switcherToggle: false }">
            <label
                htmlFor="SwitchFlat"
                className="flex cursor-pointer select-none items-center"
            >
                <div className="relative">
                    <input
                        id="SwitchFlat"
                        type="checkbox"
                        disabled={disabled}
                        className="sr-only"
                        onChange={() => {
                            setEnabled(!enabled);
                        }}
                    />
                    <div className="h-5 w-14 rounded-full shadow-inner bg-gray-200 dark:bg-gray-800"></div>
                    <div
                        className={`dot absolute left-0 -top-1 h-7 w-7 rounded-full bg-gray-400 dark:bg-white shadow-switch-1 transition ${enabled && '!right-0 !translate-x-full !bg-primary dark:!bg-white'
                            }`}
                    ></div>
                </div>
            </label>
        </div>
    );
};