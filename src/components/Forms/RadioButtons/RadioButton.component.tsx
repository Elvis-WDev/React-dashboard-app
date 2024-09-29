import { useState } from 'react';

interface RadioButtonProps {
    label: string
    disabled?: boolean
    checked?: boolean
}

export const RadioButton = ({ label, disabled, checked = false }: RadioButtonProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(checked);

    return (
        <div>
            <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        disabled={disabled}
                        className="sr-only"
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <div
                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${isChecked && 'border-primary'}`}
                    >
                        <span
                            className={`h-2.5 w-2.5 rounded-full bg-transparent ${isChecked && `bg-gray-500`}`}
                        />
                    </div>
                </div>
                {label}
            </label>
        </div>
    );
};