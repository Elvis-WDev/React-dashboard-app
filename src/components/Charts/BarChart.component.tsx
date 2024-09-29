import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { OptionsBarChart } from "../../config/charts/Charts.config";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface BarChartData {
    series: {
        name: string;
        data: number[];
    }[];
}

interface BarChartProps {
    height?: number
}

export const BarChart = ({ height = 350 }: BarChartProps) => {

    const theme = useSelector((state: RootState) => state.ui.theme);

    const [state, _setState] = useState<BarChartData>({
        series: [
            {
                name: 'Ventas',
                data: [44, 55, 41, 67, 22, 43, 65],
            },
            {
                name: 'Reventas',
                data: [13, 23, 20, 8, 13, 27, 15],
            },
        ],
    });


    return (
        <>

            <div className="mb-4 justify-between sm:flex">
                <div>
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Sales week
                    </h4>
                </div>
                <div>
                    <div className="relative z-20 inline-block">
                        <select
                            name="#"
                            id="#"
                            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none mx-2"
                        >
                            <option value="" className='dark:bg-boxdark'>This week</option>
                            <option value="" className='dark:bg-boxdark'>Last week</option>
                        </select>
                        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                            <ChevronDownIcon className="h-6 w-6" />
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <div id="chartTwo">
                    <ReactApexChart
                        options={OptionsBarChart(theme)}
                        series={state.series}
                        type="bar"
                        height={height}
                    />
                </div>
            </div>
        </>
    )
}
