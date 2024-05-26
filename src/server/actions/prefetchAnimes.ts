import { DEFAULT_QUERY } from "@/client/constants";
import { fetcher } from "@/client/utils/fetcher";
import { Anime } from "@/types/anime";


export const prefetchAnimes = () => fetcher<Anime[]>(DEFAULT_QUERY)