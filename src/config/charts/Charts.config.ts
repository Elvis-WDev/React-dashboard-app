import { ApexOptions } from "apexcharts";

export const OptionsAreaChart = (theme: string = 'light'): ApexOptions => {

    return {

        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
        },
        colors: ['#22D3CE', '#6366F1'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            height: 335,
            type: 'area',
            dropShadow: {
                enabled: true,
                color: '#623CEA14',
                top: 10,
                blur: 4,
                left: 0,
                opacity: 0.1,
            },

            toolbar: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
        ],
        stroke: {
            width: [2, 2],
            curve: 'straight',
        },
        // labels: {
        //   show: false,
        //   position: "top",
        // },
        grid: {
            borderColor: theme == 'dark' ? '#2E3947' : '#F3F4F6',
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 4,
            colors: '#fff',
            strokeColors: ['#3056D3', '#80CAEE'],
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            hover: {
                size: undefined,
                sizeOffset: 5,
            },
        },
        xaxis: {
            type: 'category',
            categories: [
                'Sep',
                'Oct',
                'Nov',
                'Dec',
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: '#A9B0B5',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#A9B0B5',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },
            },
            title: {
                style: {
                    fontSize: '0px',
                },
            },
            min: 0,
            max: 100,
        },

    }
}



export const OptionsBarChart = (theme: string = 'light'): ApexOptions => {

    return {

        colors: ['#3C50E0', '#80CAEE'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            type: 'bar',
            height: 335,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },

        responsive: [
            {
                breakpoint: 1536,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            columnWidth: '25%',
                        },
                    },
                },
            },
        ],
        grid: {
            borderColor: theme == 'dark' ? '#2E3947' : '#F3F4F6',
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                columnWidth: '25%',
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
            },
        },
        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            labels: {
                style: {
                    colors: '#A9B0B5',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#A9B0B5',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },
            },

        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            fontFamily: 'Arial',
            fontWeight: 400,
            fontSize: '12px',
            labels: {
                colors: '#A9B0B5',
            },
        },
        fill: {
            opacity: 1,
        },

    }
}


export const OptionsPieChart = (theme: string = 'light'): ApexOptions => {

    return {
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            type: 'donut',
        },
        colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
        labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
        legend: {
            show: false,
            position: 'bottom',
        },

        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    background: 'transparent',
                },
            },
        },
        grid: {
            borderColor: theme == 'dark' ? '#2E3947' : '#F3F4F6',
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 2600,
                options: {
                    chart: {
                        width: 380,
                    },
                },
            },
            {
                breakpoint: 640,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
    }
};