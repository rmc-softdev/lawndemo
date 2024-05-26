export const ANIME_BASE_URL = 'https://kitsu.io/api/edge/anime'
export const DATE_QUERY = ANIME_BASE_URL + '?page[limit]=20&page[offset]=5&sort=-averageRating'
export const DEFAULT_QUERY = ANIME_BASE_URL + '?limit=20'
export const POPULARIY_QUERY = ANIME_BASE_URL + '?page[limit]=20&page[offset]=0&sort=-startDate&sort=-averageRating'