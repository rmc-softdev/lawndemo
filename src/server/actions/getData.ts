type Animes = {
  id: number;
  attributes: {
    slug: string;
  };
}[];

export async function getData() {
  try {
    const response = await fetch('https://kitsu.io/api/edge/trending/anime?limit=20');
    const { data } = (await response.json()) as { data: Animes };
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error };
  }
}
