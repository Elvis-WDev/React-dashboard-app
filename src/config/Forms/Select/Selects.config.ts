import { StylesConfig } from "react-select";

export interface ColourOption {
    value: string;
    label: string;
    isFixed?: boolean;
    isDisabled?: boolean;
}

export const colourOptions: ColourOption[] = [
    { value: 'purple', label: 'Purple' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate' },
    { value: 'silver', label: 'Silver' },
];

export interface ProductOption {
    id: number;
    NameProduct: string;
    DescriptionProduct: string;
    CategoryProduct: string;
    SubcategoryProduct: string;
    SalePriceProduct: number;
    BuyingPriceProduct: number;
    StockProduct: number;
    ImageProduct: string;
}

export const ProductOptions: ProductOption[] = [
    {
        id: 1,
        NameProduct: 'Cellphone',
        DescriptionProduct: 'Purple',
        CategoryProduct: 'Category',
        SubcategoryProduct: 'Subcategory',
        SalePriceProduct: 100,
        BuyingPriceProduct: 50,
        StockProduct: 10,
        ImageProduct: 'https://i.imgur.com/3dVB5B9.jpg'
    },
    {
        id: 2,
        NameProduct: 'Fridge',
        DescriptionProduct: 'Orange',
        CategoryProduct: 'Category',
        SubcategoryProduct: 'Subcategory',
        SalePriceProduct: 100,
        BuyingPriceProduct: 50,
        StockProduct: 10,
        ImageProduct: 'https://i.imgur.com/3dVB5B9.jpg'
    },
    {
        id: 3,
        NameProduct: 'Tv',
        DescriptionProduct: 'Yellow',
        CategoryProduct: 'Category',
        SubcategoryProduct: 'Subcategory',
        SalePriceProduct: 100,
        BuyingPriceProduct: 50,
        StockProduct: 10,
        ImageProduct: 'https://i.imgur.com/3dVB5B9.jpg'
    }

];

export const darkModeColors = {
    optionBg: '#2d3748', // Color de fondo para las opciones en modo oscuro
    optionHoverBg: '#4a5568', // Color de fondo al pasar el ratón en modo oscuro
    optionSelectedBg: '#1a202c', // Color de fondo para la opción seleccionada en modo oscuro
    textColor: '#f9fafb', // Color del texto en modo oscuro
};

export const lightModeColors = {
    optionBg: '#f9fafb', // Color de fondo para las opciones en modo claro
    optionHoverBg: '#e2e8f0', // Color de fondo al pasar el ratón en modo claro
    optionSelectedBg: '#e2e8f0', // Color de fondo para la opción seleccionada en modo claro
    textColor: '#333', // Color del texto en modo claro
};

export const getStyles = <T,>(theme: string): StylesConfig<T> => {
    const isDarkMode = theme === 'dark';
    const colors = isDarkMode ? darkModeColors : lightModeColors;

    return {
        control: (styles) => ({
            ...styles,
            backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
            borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            width: '100%',
            color: colors.textColor,
            fontSize: '0.875rem',
            boxShadow: 'none',
            '&:hover': {
                borderColor: isDarkMode ? '#9ca3af' : '#9ca3af',
            },
        }),
        option: (styles, { isDisabled, isFocused, isSelected }) => ({
            ...styles,
            backgroundColor: isDisabled ? undefined : isSelected ? colors.optionSelectedBg : isFocused ? colors.optionHoverBg : colors.optionBg,
            color: isDisabled ? '#ccc'
                : isSelected
                    ? 'white'
                    : colors.textColor,
            cursor: isDisabled ? 'not-allowed' : 'default',
            padding: '0.5rem',
            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? colors.optionSelectedBg
                        : colors.optionHoverBg
                    : undefined,
            },
        }),
        multiValue: (styles) => ({
            ...styles,
            backgroundColor: isDarkMode ? '#2d3748' : '#e2e8f0',
            color: colors.textColor,
            borderRadius: '0.25rem',
        }),
        multiValueLabel: (styles) => ({
            ...styles,
            color: colors.textColor,
        }),
        multiValueRemove: (styles) => ({
            ...styles,
            color: isDarkMode ? '#e2e8f0' : '#333',
            ':hover': {
                backgroundColor: isDarkMode ? '#4a5568' : '#d1d5db',
                color: isDarkMode ? '#f9fafb' : '#000',
            },
        }),
        input: (styles) => ({
            ...styles,
            color: colors.textColor,
        }),
        placeholder: (styles) => ({
            ...styles,
            color: isDarkMode ? '#6b7280' : '#9ca3af',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: isDarkMode ? '#f9fafb' : '#333',
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: colors.optionBg,
            borderRadius: '0.5rem',
            border: `1px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`,
        }),
        menuList: (styles) => ({
            ...styles,
            padding: 0,
        }),
    };
};
