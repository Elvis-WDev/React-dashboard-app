import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { OptionsAreaChart } from "../../config/charts/Charts.config";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface AreaChartData {
    series: {
        name: string;
        data: number[];
    }[];
}

export const AreaChart = () => {

    const theme = useSelector((state: RootState) => state.ui.theme);

    const [state, _setState] = useState<AreaChartData>({
        series: [
            {
                name: 'Product One',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },

            {
                name: 'Product Two',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
            },
        ],
    });

    return (
        <div className="col-span-12 rounded-sm px-4 pt-7.5 pb-5 shadow-default dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                <div className="flex w-full flex-wrap gap-3 sm:gap-5">
                    <div className="flex min-w-52">
                        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-indigo-500">
                            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-indigo-500"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-indigo-400">Total Revenue</p>
                            <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                    <div className="flex min-w-52">
                        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-cyan-500">
                            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-cyan-500"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-cyan-400">Total Sales</p>
                            <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full max-w-45 justify-end">
                    <div className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 p-1.5">
                        <button className="rounded bg-gray-100 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white py-1 px-3 text-xs font-medium shadow-card hover:bg-gray-200 dark:bg-boxdark dark:hover:bg-gray-700">
                            Day
                        </button>
                        <button className="rounded bg-gray-100 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white py-1 px-3 text-xs font-medium shadow-card hover:bg-gray-200 dark:bg-boxdark dark:hover:bg-gray-700">
                            Week
                        </button>
                        <button className="rounded bg-gray-100 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white py-1 px-3 text-xs font-medium shadow-card hover:bg-gray-200 dark:bg-boxdark dark:hover:bg-gray-700">
                            Month
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div id="chartOne" className="-ml-5">
                    <ReactApexChart
                        options={OptionsAreaChart(theme)}
                        series={state.series}
                        type="area"
                        height={350}
                    />
                </div>
            </div>
        </div>
    )
}
