import { InformationCircleIcon, EyeIcon } from "@heroicons/react/16/solid";
import { Breadcrumb, AlertBasic, AlertIcon, AlertBordered, AlertContent, AlertList, AlertDismissing, AlertBorderAccent } from "../../../components";

export const Alerts = () => {
    return (
        <>
            <Breadcrumb pageName="Ui elements / Alerts" />

            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    {/* <!-- Default Alerts --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">

                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Default alert
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <AlertBasic color={'blue'} Title={'Info alert! '} Message={'Change a few things up and try submitting again.'} />

                            <AlertBasic color={'red'} Title={'Info alert! '} Message={'Change a few things up and try submitting again.'} />

                            <AlertBasic color={'green'} Title={'Info alert! '} Message={'Change a few things up and try submitting again.'} />

                            <AlertBasic color={'yellow'} Title={'Info alert! '} Message={'Change a few things up and try submitting again.'} />

                            <AlertBasic color={'indigo'} Title={'Info alert! '} Message={'Change a few things up and try submitting again.'} />

                            <AlertBasic color={'gray'} Title={'Info alert! '} Message={'Change a few things up and try submitting again.'} />

                        </div>



                    </div>

                    {/* <!-- Alerts with icons --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Alerts with icons
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <AlertIcon icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'blue'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertIcon icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'red'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertIcon icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'green'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertIcon icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'yellow'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertIcon icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'indigo'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertIcon icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'gray'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                        </div>
                    </div>

                    {/* <!--  Alerts Bordered --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Alerts Bordered
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <AlertBordered icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'blue'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertBordered icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'red'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertBordered icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'green'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertBordered icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'yellow'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertBordered icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'indigo'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                            <AlertBordered icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'gray'} Title={'Info alert!'} Message={'Change a few things up and try submitting again.'} />

                        </div>
                    </div>

                    {/* <!--  Alerts Additional content  --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Alerts Additional content
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <AlertContent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'blue'} Title={'Info alert!'}>
                                <div className="mt-2 mb-4 text-sm">
                                    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                </div>
                                <div className="flex">
                                    <button type="button" className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <EyeIcon aria-hidden="true" className="h-4 w-4 me-1" />
                                        View more
                                    </button>
                                    <button type="button" className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </AlertContent>

                            <AlertContent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'red'} Title={'Info alert!'}>
                                <div className="mt-2 mb-4 text-sm">
                                    More info about this info danger goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                </div>
                                <div className="flex">
                                    <button type="button" className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <EyeIcon aria-hidden="true" className="h-4 w-4 me-1" />
                                        View more
                                    </button>
                                    <button type="button" className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </AlertContent>

                            <AlertContent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'green'} Title={'Info alert!'}>
                                <div className="mt-2 mb-4 text-sm">
                                    More info about this info success goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                </div>
                                <div className="flex">
                                    <button type="button" className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        <EyeIcon aria-hidden="true" className="h-4 w-4 me-1" />
                                        View more
                                    </button>
                                    <button type="button" className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800" data-dismiss-target="#alert-additional-content-3" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </AlertContent>

                            <AlertContent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'yellow'} Title={'Info alert!'}>
                                <div className="mt-2 mb-4 text-sm">
                                    More info about this info warning goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                </div>
                                <div className="flex">
                                    <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-700 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500">
                                        <EyeIcon aria-hidden="true" className="h-4 w-4 me-1" />
                                        View more
                                    </button>
                                    <button type="button" className="text-yellow-500 bg-transparent border border-yellow-400 hover:bg-yellow-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-500" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </AlertContent>

                            <AlertContent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'indigo'} Title={'Info alert!'}>
                                <div className="mt-2 mb-4 text-sm">
                                    More info about this info warning goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                </div>
                                <div className="flex">
                                    <button type="button" className="text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-indigo-500 dark:text-gray-100 dark:hover:bg-indigo-600 dark:focus:ring-indigo-500">
                                        <EyeIcon aria-hidden="true" className="h-4 w-4 me-1" />
                                        View more
                                    </button>
                                    <button type="button" className="text-indigo-500 bg-transparent border border-indigo-600 hover:bg-indigo-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-indigo-500 dark:border-indigo-300 dark:text-indigo-300 dark:hover:text-gray-100 dark:focus:ring-indigo-500" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </AlertContent>

                            <AlertContent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3" />} color={'gray'} Title={'Info alert!'}>
                                <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
                                    More info about this info dark goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                </div>
                                <div className="flex">
                                    <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">
                                        <EyeIcon aria-hidden="true" className="h-4 w-4 me-1" />
                                        View more
                                    </button>
                                    <button type="button" className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-additional-content-5" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </AlertContent>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    {/* <!-- Alert List --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Alert List
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <AlertList icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3 mt-0.5" />} color={'blue'} Title={'Ensure that these requirements are met:'}>
                                <li>At least 10 characters (and up to 100 characters)</li>
                                <li>At least one lowercase character</li>
                                <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                            </AlertList>

                            <AlertList icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3 mt-0.5" />} color={'red'} Title={'Ensure that these requirements are met:'}>
                                <li>At least 10 characters (and up to 100 characters)</li>
                                <li>At least one lowercase character</li>
                                <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                            </AlertList>

                            <AlertList icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3 mt-0.5" />} color={'green'} Title={'Ensure that these requirements are met:'}>
                                <li>At least 10 characters (and up to 100 characters)</li>
                                <li>At least one lowercase character</li>
                                <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                            </AlertList>

                            <AlertList icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3 mt-0.5" />} color={'yellow'} Title={'Ensure that these requirements are met:'}>
                                <li>At least 10 characters (and up to 100 characters)</li>
                                <li>At least one lowercase character</li>
                                <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                            </AlertList>

                            <AlertList icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3 mt-0.5" />} color={'indigo'} Title={'Ensure that these requirements are met:'}>
                                <li>At least 10 characters (and up to 100 characters)</li>
                                <li>At least one lowercase character</li>
                                <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                            </AlertList>

                            <AlertList icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4 me-3 mt-0.5" />} color={'gray'} Title={'Ensure that these requirements are met:'}>
                                <li>At least 10 characters (and up to 100 characters)</li>
                                <li>At least one lowercase character</li>
                                <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                            </AlertList>

                        </div>
                    </div>

                    {/* <!-- Alerts Dismissing --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Alerts Dismissing
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <AlertDismissing icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'blue'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertDismissing icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'red'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertDismissing icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'green'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertDismissing icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'yellow'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertDismissing icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'indigo'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertDismissing icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'gray'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                        </div>
                    </div>

                    {/* <!--  Alerts Border accent --> */}
                    <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
                        <div className="border-b border-inherit border-gray-100 dark:border-gray-800 py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Alerts Border accent
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">

                            <AlertBorderAccent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'blue'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertBorderAccent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'red'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertBorderAccent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'green'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertBorderAccent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'yellow'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertBorderAccent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'indigo'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                            <AlertBorderAccent icon={<InformationCircleIcon aria-hidden="true" className="h-4 w-4" />} color={'gray'} InfoMessage={'A simple info alert with an example link. Give it a click if you like.'} />

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};