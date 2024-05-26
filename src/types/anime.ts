export interface Anime {
  id: number;
  attributes: {
    slug: string;
    posterImage: {
      tiny: string;
      medium: string;
    };
    canonicalTitle: string;
    showType: string;
  };
}
