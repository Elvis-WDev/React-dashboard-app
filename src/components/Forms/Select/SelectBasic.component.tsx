import Select from 'react-select';
import { getStyles } from '../../../config';
import { useThemeState } from '../../../hooks/useTheme';

export interface SelectBasicProps<T> {
    data: T[];
    ValueField: keyof T;
    LabelField: keyof T;
}

export const SelectBasic = <T extends object>({ data, ValueField, LabelField }: SelectBasicProps<T>) => {

    const theme = useThemeState();

    const Styles = getStyles(theme);

    const options = data.map(item => ({
        value: ValueField ? item[ValueField] : item[LabelField],
        label: item[LabelField],
    }));

    return (
        <Select
            defaultValue={options[1]}
            options={options}
            styles={Styles}
        />
    );
};