import { isServer, PORT } from '../constants/env';

const fetchEnv = (url: string, options?: Record<string, unknown>) => {
    const fetchUrl =
        isServer && url.startsWith('/')
            ? `http://localhost:${PORT}${url}`
            : url;
    return fetch(fetchUrl, options).then((res) => res.json());
};

export { fetchEnv as fetch };
