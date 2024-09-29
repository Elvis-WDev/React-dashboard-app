import { ArrowUpIcon, ArrowDownIcon, CurrencyDollarIcon, EyeIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/outline"
import { AreaChart, BarChart, ChatUsers, TopBuyers, TopProducts, PieChart, InfoCard, TableBasic } from "../../components";

export const Dashboard = () => {

    return (

        <>
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-4">

                <InfoCard title="$3.456K" description="Total revenue" helptext={<>
                    0.43%
                    <ArrowUpIcon aria-hidden="true" className="h-4 w-4" />
                </>} icon={<CurrencyDollarIcon aria-hidden="true" className="h-8 w-8" />} />

                <InfoCard title="50K" description="Total views" helptext={<>
                    0.43%
                    <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
                </>} icon={<EyeIcon aria-hidden="true" className="h-8 w-8" />} helptextError />

                <InfoCard title="50K" description="Total sales" helptext={<>
                    0.43%
                    <ArrowUpIcon aria-hidden="true" className="h-4 w-4" />
                </>} icon={<ShoppingCartIcon aria-hidden="true" className="h-8 w-8" />} />

                <InfoCard title="3K" description="Total views" helptext={<>
                    0.43%
                    <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
                </>} icon={<UsersIcon aria-hidden="true" className="h-8 w-8" />} helptextError />

            </div >

            {/* Contenedor de gráficos */}
            < div className="grid grid-cols-12 gap-4 mb-4" >
                {/* Area Chart */}
                < div className="col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" >

                    <AreaChart />

                </div >

                {/* Bar chart */}
                < div className="col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" >

                    <BarChart />

                </div >

            </div >


            <div className="grid grid-cols-12 gap-4 mb-4">
                {/* Pie chart */}
                <div className="col-span-12 xl:col-span-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">

                    <PieChart />

                </div>
                {/* DataTable */}
                <div className="col-span-12 xl:col-span-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">

                    <TableBasic />

                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mb-4">
                {/* Card Users */}
                <div className="col-span-12 xl:col-span-4 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">

                    <ChatUsers />

                </div>
                {/* Card Buyers */}
                <div className="col-span-12 xl:col-span-4 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">

                    <TopBuyers />

                </div>
                {/* Card Products */}
                <div className="col-span-12 xl:col-span-4 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">

                    <TopProducts />

                </div>

            </div>

        </>


    )
}
