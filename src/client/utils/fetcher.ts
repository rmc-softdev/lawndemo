export const fetcher = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const { data } = await response.json();
        console.log('Fetched data:', data);
        return { data };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error };
    }
};
