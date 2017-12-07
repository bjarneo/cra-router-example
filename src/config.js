import merge from 'lodash.merge';

const {
    NODE_ENV
} = process.env;

const dflt = {
    'host': 'localhost',
    'port': 3000
};

const development = {
    'port': 1337
};

const production = {
    'host': 'https://mypage.telenor.no'
};

let config = {};

if (NODE_ENV === 'production') {
    config = merge(dflt, production);
} else if (NODE_ENV === 'development') {
    config = merge(dflt, development);
} else {
    config = dflt;
}

export default config;