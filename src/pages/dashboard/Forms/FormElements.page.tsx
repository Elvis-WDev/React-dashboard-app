import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    Breadcrumb,
    SwitchBasic,
    SwitchFlat,
    SwitchCheck,
    SelectBasic,
    SelectMultiple,
    Checkbox,
    RadioButton,
    DatePicker,
} from "../../../components";

import { colourOptions, ProductOptions } from "../../../config";



export const FormElements = () => {
    return (
        <>
            <Breadcrumb pageName="Forms / Elements" />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    {/* <!-- Inputs Fields --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Inputs Fields
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Input por defecto
                                </label>
                                <input
                                    type="text"
                                    placeholder="Default Input"
                                    className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Input Activo
                                </label>
                                <input
                                    type="text"
                                    placeholder="Active Input"
                                    className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-medium text-black dark:text-white">
                                    Input deshabilitado
                                </label>
                                <input
                                    type="text"
                                    placeholder="Disabled label"
                                    disabled
                                    className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:disabled:bg-gray-950 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Inputs Switches --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Switches
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <SwitchBasic />
                            <SwitchFlat />
                            <SwitchCheck />
                        </div>
                    </div>

                    {/* <!-- Inputs Dates --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Fechas
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    DatePicker
                                </label>
                                <DatePicker id="date-picker-basic" mode="single" dateFormat='Y-m-d' monthSelectorType="static" />
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Multiple DatePicker
                                </label>
                                <DatePicker id="date-picker-multiple" mode="multiple" dateFormat='Y-m-d' monthSelectorType="static" />
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Range DatePicker
                                </label>
                                <DatePicker id="date-picker-range" mode="range" dateFormat='Y-m-d' monthSelectorType="static" />
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Time DatePicker
                                </label>
                                <DatePicker id="date-picker-time" mode="time" dateFormat='H:i' monthSelectorType="static" enableTime noCalendar />
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    DateTime DatePicker
                                </label>
                                <DatePicker id="date-picker-datetime" mode="single" dateFormat='Y-m-d H:i' monthSelectorType="static" enableTime />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Inputs File upload --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Subir archivos
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Adjuntar archivo
                                </label>
                                <input
                                    type="file"
                                    className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:disabled:bg-gray-950 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300 file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary dark:file:bg-white/30 dark:file:text-white`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {/* <!-- Inputs Textarea --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Textarea Fields
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Default textarea
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Default textarea"
                                    className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:disabled:bg-gray-950 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                ></textarea>
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Active textarea
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Active textarea"
                                    className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:disabled:bg-gray-950 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                ></textarea>
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Disabled textarea
                                </label>
                                <textarea
                                    rows={6}
                                    disabled
                                    placeholder="Disabled textarea"
                                    className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:disabled:bg-gray-950 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Inputs Checkbox and Radio buttons --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Checkboxes y radio buttons
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <Checkbox label="Checkbox disabled" disabled />
                            <Checkbox label="Checkbox check" checked />
                            <Checkbox label="Checkbox Mark" icon={<XMarkIcon aria-hidden="true" className="h-4 w-4" />} checked />
                            <RadioButton label="Radio disabled" disabled />
                            <RadioButton label="Radio button" checked />
                        </div>
                    </div>

                    {/* <!-- Inputs Selects --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Selects inputs
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <SelectBasic data={colourOptions} ValueField={'value'} LabelField={'label'} />
                            <SelectMultiple data={ProductOptions} ValueField={'id'} LabelField={'NameProduct'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
