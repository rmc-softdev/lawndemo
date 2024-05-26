export interface Anime {
  id: number;
  attributes: {
    slug: string;
    posterImage: {
      tiny: string;
    };
    canonicalTitle: string;
    showType: string;
  };
}
