import { Link } from "react-router-dom";

interface Product {
    image: string;
    name: string;
    price: number;
    shopping: number;
    category: string;
    subcategory: string;
    stock: number;
};


const ProductsData: Product[] = [
    {
        image: './users/user-01.png',
        name: 'Devid Heilo',
        price: 300,
        shopping: 100,
        stock: 3,
        category: 'Eléctricos',
        subcategory: 'Casa',
    },
    {
        image: './users/user-02.png',
        name: 'Henry Fisher',
        price: 300,
        shopping: 100,
        stock: 0,
        category: 'Eléctricos',
        subcategory: 'Casa',
    },
    {
        image: './users/user-03.png',
        name: 'Jhon Doe',
        price: 300,
        shopping: 100,
        stock: 0,
        category: 'Eléctricos',
        subcategory: 'Casa',
    },
    {
        image: './users/user-04.png',
        name: 'Jane Doe',
        price: 300,
        shopping: 100,
        stock: 2,
        category: 'Eléctricos',
        subcategory: 'Casa',
    },
    {
        image: './users/user-05.png',
        name: 'Jhon Doe',
        price: 300,
        shopping: 100,
        stock: 0,
        category: 'Eléctricos',
        subcategory: 'Casa',
    },
    {
        image: './users/user-06.png',
        name: 'Jhon Doe',
        price: 300,
        shopping: 100,
        stock: 3,
        category: 'Eléctricos',
        subcategory: 'Casa',
    },
];


export const TopBuyers = () => {
    return (

        <>

            <h4 className="mb-6 px-6 text-xl font-semibold text-black dark:text-white">
                Top buyers
            </h4>

            <div>
                {ProductsData.map(({ image, name, price, shopping }, key) => (
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-6 hover:bg-gray-100 dark:hover:bg-gray-800"
                        key={key}
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={image} alt="User" />
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium text-black dark:text-white">
                                    {name}
                                </h5>
                                <p>
                                    <span className="text-sm text-black dark:text-white">
                                        {shopping} in stock
                                    </span>
                                </p>
                            </div>
                            <div className="flex p-2 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                <span className="text-sm font-medium text-gray-500 dark:text-white">
                                    {' '}
                                    $ {price} USD
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}
