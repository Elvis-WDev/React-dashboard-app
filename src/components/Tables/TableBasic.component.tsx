
import BrandOne from '/brand/brand-01.svg';
import BrandTwo from '/brand/brand-02.svg';
import BrandThree from '/brand/brand-03.svg';
import BrandFour from '/brand/brand-04.svg';
import BrandFive from '/brand/brand-05.svg';

export type BRAND = {
    logo: string;
    name: string;
    visitors: number;
    revenues: string;
    sales: number;
    conversion: number;
};

const brandData: BRAND[] = [
    {
        logo: BrandOne,
        name: 'Google',
        visitors: 3.5,
        revenues: '5,768',
        sales: 590,
        conversion: 4.8,
    },
    {
        logo: BrandTwo,
        name: 'Twitter',
        visitors: 2.2,
        revenues: '4,635',
        sales: 467,
        conversion: 4.3,
    },
    {
        logo: BrandThree,
        name: 'Github',
        visitors: 2.1,
        revenues: '4,290',
        sales: 420,
        conversion: 3.7,
    },
    {
        logo: BrandFour,
        name: 'Vimeo',
        visitors: 1.5,
        revenues: '3,580',
        sales: 389,
        conversion: 2.5,
    },
    {
        logo: BrandFive,
        name: 'Facebook',
        visitors: 3.5,
        revenues: '6,768',
        sales: 390,
        conversion: 4.2,
    },
];

export const TableBasic = () => {
    return (
        <div className="rounded-lg shadow-default bg-white dark:bg-gray-900">
            <h4 className="mb-6 p-6 text-xl font-semibold text-black dark:text-white border-b border-inherit border-gray-100 dark:border-gray-800 dark:border-strokedark">
                Top Channels
            </h4>

            <div className="flex flex-col px-6">
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 bg-gray-100 dark:bg-gray-800 sm:grid-cols-5">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Source
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Visitors
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Revenues
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Sales
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Conversion
                        </h5>
                    </div>
                </div>

                {brandData.map((brand, key) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
                            ? ''
                            : 'border-b border-inherit border-gray-100 dark:border-gray-800 dark:border-strokedark'
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                <img src={brand.logo} alt="Brand" />
                            </div>
                            <p className="hidden text-black dark:text-white sm:block">
                                {brand.name}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{brand.visitors}K</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-meta-3">${brand.revenues}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{brand.sales}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-5">{brand.conversion}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

