export const getGifs = async (category) => {
    const limit = 9;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZLTRUTweBZPsiSxcuCSgcrR9i4mSsIAH&q=${category}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url,
    }));

    return gifs;
};
