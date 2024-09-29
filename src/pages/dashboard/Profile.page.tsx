import { ArrowUpTrayIcon, EnvelopeIcon, PencilSquareIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';
import { Breadcrumb } from '../../components/Breadcumbs/Breadcumbs.component';
import userLogging from '/user.jpg'

export const Profile = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-0 xl:gap-0 xl:container xl:mx-auto px-1 xl:px-10">

                <Breadcrumb pageName="Perfil" />

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                            <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-7">
                                <h3 className="font-medium text-black dark:text-white">
                                    Profile photo
                                </h3>
                            </div>
                            <div className="p-7">
                                <form action="#">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="h-14 w-14 rounded-full">
                                            <img src={userLogging} alt="User" />
                                        </div>
                                        <div>
                                            <span className="mb-1.5 text-black dark:text-white">
                                                Profile photo
                                            </span>
                                            <span className="flex gap-2.5">
                                                <button className="text-sm hover:text-primary">
                                                    Delete
                                                </button>
                                                <button className="text-sm hover:text-primary">
                                                    Edit
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="FileUpload"
                                        className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-gray-300 dark:border-gray-700 bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                        />
                                        <div className="flex flex-col items-center justify-center space-y-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                                <ArrowUpTrayIcon className="h-5 w-5" />
                                            </span>
                                            <p>
                                                <span className="text-primary">Click to upload photo</span> or drag and drop
                                            </p>
                                            <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                                            <p>(max, 800 X 800px)</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-4">
                                        <button
                                            className="flex justify-center rounded border border-gray-200 dark:border-gray-800 py-1 xl:py-2 px-2 xl:px-6 font-medium text-black hover:shadow-1 dark:text-white"
                                            type="submit"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="flex justify-center rounded border border-gray-200 dark:border-gray-800 bg-indigo-500 dark:bg-indigo-600 py-1 xl:py-2 px-2 xl:px-6 font-medium text-white dark:text-white hover:bg-opacity-90"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-12">
                        <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">
                            <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-7">
                                <h3 className="font-medium text-black dark:text-white">
                                    Personal information
                                </h3>
                            </div>
                            <div className="p-7">
                                <form action="#">
                                    <div className="mb-5 flex flex-col gap-4 sm:flex-row">
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="fullName">
                                                Fullname
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-4">
                                                    <UserIcon className="h-5 w-5" />
                                                </span>
                                                <input
                                                    className={`bg-gray-50 border w-full py-4 px-10 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                                    // ${null ? 'focus:ring-red-100 border-red-300 ring-red-300' : 'focus:ring-indigo-600 border-gray-300 ring-gray-300'}`}
                                                    type="text"
                                                    name="fullName"
                                                    id="fullName"
                                                    placeholder="Devid Jhon"
                                                    defaultValue="Devid Jhon"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="phoneNumber">
                                                Phone
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-4">
                                                    <PhoneIcon className="h-5 w-5" />
                                                </span>
                                                <input
                                                    className={`bg-gray-50 border w-full py-4 px-10 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                                    // ${null ? 'focus:ring-red-100 border-red-300 ring-red-300' : 'focus:ring-indigo-600 border-gray-300 ring-gray-300'}`}
                                                    type="text"
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    placeholder="+990 3343 7865"
                                                    defaultValue="+990 3343 7865"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="emailAddress"
                                        >
                                            Email
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-4">
                                                <EnvelopeIcon className="h-6 w-5" />
                                            </span>
                                            <input
                                                className={`bg-gray-50 border w-full py-4 px-10 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                                type="email"
                                                name="emailAddress"
                                                id="emailAddress"
                                                placeholder="devidjond45@gmail.com"
                                                defaultValue="devidjond45@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="Username"
                                        >
                                            Username
                                        </label>
                                        <input
                                            className={`bg-gray-50 border w-full py-4 px-4 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                            type="text"
                                            name="Username"
                                            id="Username"
                                            placeholder="devidjhon24"
                                            defaultValue="devidjhon24"
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="bio"
                                        >
                                            Biography
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-4">
                                                <PencilSquareIcon className="h-6 w-5" />
                                            </span>

                                            <textarea
                                                className={`bg-gray-50 border w-full py-4 px-10 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-600 border-gray-300 ring-gray-300`}
                                                name="bio"
                                                id="bio"
                                                rows={6}
                                                placeholder="Write your bio here"
                                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-4">
                                        <button
                                            className="flex justify-center rounded border border-gray-200 dark:border-gray-800 py-1 xl:py-2 px-2 xl:px-6 font-medium text-black hover:shadow-1 dark:text-white"
                                            type="submit"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="flex justify-center rounded border border-gray-200 dark:border-gray-800 bg-indigo-500 dark:bg-indigo-600 py-1 xl:py-2 px-2 xl:px-6 font-medium text-white dark:text-white hover:bg-opacity-90"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

