import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface CheckboxProps {
    icon?: JSX.Element;
    label: string
    disabled?: boolean
    checked?: boolean
}

export const Checkbox = ({ icon, label, disabled = false, checked = false }: CheckboxProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(checked);

    return (
        <div>
            <label
                htmlFor={`checkbox${label}`}
                className="flex cursor-pointer select-none items-center"
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id={`checkbox${label}`}
                        disabled={disabled}
                        className="sr-only"
                        onChange={() => {
                            setIsChecked(!isChecked);
                        }}
                    />
                    <div
                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${isChecked && `border-primary bg-gray dark:bg-transparent`
                            }`}
                    >
                        <span className={`opacity-0 ${isChecked && `!opacity-100 text-gray-500`}`}>
                            {icon ? (icon) : (<CheckIcon aria-hidden="true" className="h-4 w-4" />)}
                        </span>
                    </div>
                </div>
                {label}
            </label>
        </div>
    )
}