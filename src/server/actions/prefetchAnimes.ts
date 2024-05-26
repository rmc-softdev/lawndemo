import { DEFAULT_QUERY } from "@/client/constants";
import { fetcher } from "@/client/utils/fetcher";

type Animes = {
  id: number;
  attributes: {
    slug: string;
  };
}[];

export const prefetchAnimes = () => fetcher(DEFAULT_QUERY)