import { DATE_QUERY, DEFAULT_QUERY, POPULARIY_QUERY } from '@/client/constants';
import { fetcher } from '@/client/utils/fetcher';

export type SortOption = 'popularity' | 'date' | ''

interface SortQuery {
    queryKey: ['animes', SortOption]
}

export const getSortedAnimes = async ({ queryKey }: SortQuery) => {
    const [, sort] = queryKey;
    let SORT_URL;

    switch (sort) {
        case 'date':
            SORT_URL = DATE_QUERY;
            break;
        case 'popularity':
            SORT_URL = POPULARIY_QUERY;
            break;
        default:
            SORT_URL = DEFAULT_QUERY;
            break;
    }

    const response = await fetcher(SORT_URL);
    return response;
};
