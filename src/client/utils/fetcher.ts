
type Response<T> = {
    data: T;
    error?: undefined;
} | {
    error: unknown;
    data?: undefined;
}
export const fetcher = async<T>(url: string): Promise<Response<T>> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const { data } = await response.json();
        return { data };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error };
    }
};
