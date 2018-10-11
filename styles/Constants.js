import range from 'lodash';

const Constants = {
    Color: {
        LightBlue: {
            '300': '#4FC3F7',
            '500': '#03A9F4',
        },
        Teal: {
            '500': '#009688',
            '800': '#00695C',
        },
        Orange: {
            '500': '#FF9800',
        },
        DeepOrange: {
            '500': '#FF5722',
        },
        Brown: {
            '800': '#4E342E',
        },
        Grey: {
            '100': '#F5F5F5',
            '300': '#E0E0E0',
        },
        BlueGrey: {
            '500': '#607D8B',
            '800': '#37474F',
        }
    },
    Size: {
        'Sun': 100,
        'Clouds': [0.2, 0.25, 0.3]
    },
    Location: {
        'Clouds': [0.1, 0.2, 0.3]
    },
    Speed: {
        'Clouds': [5000, 7000, 10000]
    }
}

export default Constants;