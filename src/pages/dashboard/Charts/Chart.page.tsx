import { AreaChart, BarChart, Breadcrumb, PieChart } from "../../../components";

export const Chart = () => {
    return (
        <>
            <Breadcrumb pageName="Chart" />

            <div className="grid grid-cols-12 gap-4 mb-4">

                <div className="col-span-12 xl:col-span-12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-default">

                    <AreaChart />

                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mb-4">

                <div className="col-span-12 xl:col-span-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-default">

                    <PieChart />

                </div>

                <div className="col-span-12 xl:col-span-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-default">

                    <BarChart height={500} />

                </div>

            </div>
        </>
    );
};

