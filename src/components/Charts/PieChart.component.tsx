import ReactApexChart from "react-apexcharts"
import { OptionsPieChart } from "../../config/charts/Charts.config";
import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface PieChartData {
    series: number[];
}

export const PieChart = () => {

    const theme = useSelector((state: RootState) => state.ui.theme);

    const [state, _setState] = useState<PieChartData>({
        series: [65, 34, 12, 56],
    });


    return (
        <>

            <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h5 className="text-xl font-semibold text-black dark:text-white">
                        Views
                    </h5>
                </div>
                <div>
                    <div className="relative z-20 inline-block">
                        <select
                            name=""
                            id=""
                            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none mx-2"
                        >
                            <option value="" className="dark:bg-boxdark">
                                Monthly
                            </option>
                            <option value="" className="dark:bg-boxdark">
                                Yearly
                            </option>
                        </select>
                        <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                            <ChevronDownIcon className="h-5 w-5" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center">
                    <ReactApexChart
                        options={OptionsPieChart(theme)}
                        series={state.series}
                        type="donut"
                    />
                </div>
            </div>

            <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Desktop </span>
                            <span> 65% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Tablet </span>
                            <span> 34% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Mobile </span>
                            <span> 45% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Unknown </span>
                            <span> 12% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Mobile </span>
                            <span> 45% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Unknown </span>
                            <span> 12% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Mobile </span>
                            <span> 45% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Unknown </span>
                            <span> 12% </span>
                        </p>
                    </div>
                </div>

                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Unknown </span>
                            <span> 12% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Mobile </span>
                            <span> 45% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Unknown </span>
                            <span> 12% </span>
                        </p>
                    </div>
                </div>

                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Unknown </span>
                            <span> 12% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Mobile </span>
                            <span> 45% </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full px-8">
                    <div className="flex w-full items-center">
                        <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                        <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                            <span> Unknown </span>
                            <span> 12% </span>
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}
