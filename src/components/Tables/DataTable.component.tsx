import { EyeIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline"

export type Package = {
    name: string;
    price: number;
    invoiceDate: string;
    status: string;
};


const packageData: Package[] = [
    {
        name: 'Free package',
        price: 0.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Paid',
    },
    {
        name: 'Standard Package',
        price: 59.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Paid',
    },
    {
        name: 'Business Package',
        price: 99.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Unpaid',
    },
    {
        name: 'Standard Package',
        price: 59.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Pending',
    },
];

export const DataTable = () => {
    return (
        <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
            <div className="max-w-full overflow-x-auto p-6">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left bg-gray-100 dark:bg-gray-800">
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Package
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Invoice date
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Status
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {packageData.map((packageItem, key) => (
                            <tr key={key}>
                                <td className="border-b border-inherit border-gray-100 dark:border-gray-800 dark:border-strokedark py-5 px-4">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.name}
                                    </h5>
                                    <p className="text-sm">${packageItem.price}</p>
                                </td>
                                <td className="border-b border-inherit border-gray-100 dark:border-gray-800 dark:border-strokedark py-5 px-4">
                                    <p className="text-black dark:text-white">
                                        {packageItem.invoiceDate}
                                    </p>
                                </td>
                                <td className="border-b border-inherit border-gray-100 dark:border-gray-800 py-5 px-4 dark:border-strokedark">
                                    <p
                                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${packageItem.status === 'Paid'
                                            ? 'bg-success text-success'
                                            : packageItem.status === 'Unpaid'
                                                ? 'bg-danger text-danger'
                                                : 'bg-warning text-warning'
                                            }`}
                                    >
                                        {packageItem.status}
                                    </p>
                                </td>
                                <td className="border-b border-inherit border-gray-100 dark:border-gray-800 dark:border-strokedark py-5 px-4">
                                    <div className="flex items-center space-x-3.5">
                                        <button className="hover:text-indigo-500">
                                            <EyeIcon aria-hidden="true" className="h-5 w-5" />
                                        </button>
                                        <button className="hover:text-indigo-500">
                                            <PencilSquareIcon aria-hidden="true" className="h-5 w-5" />
                                        </button>
                                        <button className="hover:text-indigo-500">
                                            <TrashIcon aria-hidden="true" className="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
