import { useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { DateOption } from 'flatpickr/dist/types/options';
import { CustomLocale, key as LocaleKey } from 'flatpickr/dist/types/locale';

interface DatePickerProps {
    id: string,
    className?: string,
    mode: "single" | "multiple" | "range" | "time",
    dateFormat: string,
    monthSelectorType: "dropdown" | "static"
    locale?: LocaleKey | Partial<CustomLocale>;
    noCalendar?: boolean,
    defaultDate?: DateOption | DateOption[]
    enableTime?: boolean,

}

const ActualDate = (() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
})();


export const DatePicker = ({ id, className, mode, dateFormat, locale = 'es', monthSelectorType, noCalendar, defaultDate = ActualDate, enableTime }: DatePickerProps) => {

    useEffect(() => {

        flatpickr(`#${id}`, {
            mode: mode,
            dateFormat: dateFormat,
            monthSelectorType: monthSelectorType,
            locale: locale,
            noCalendar: noCalendar,
            defaultDate: defaultDate,
            enableTime: enableTime,
            prevArrow:
                '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
            nextArrow:
                '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        });

    }, [id, className, mode, dateFormat, locale, monthSelectorType, noCalendar, defaultDate, enableTime]);

    return (
        <>

            <div className="relative">
                <input
                    id={id}
                    className={`${className} w-full bg-gray-50 border py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                    placeholder="Y-m-d"
                />
                <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                    <CalendarIcon className="h-5 w-5" />
                </div>
            </div>


        </>
    );
};
