import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchImages = async (searchQuery, page) => {
    console.log(searchQuery)
    const params = new URLSearchParams({
        key: '34896772-f933e5acb00e33c723219ffd4',
        q: searchQuery,
        per_page: 12,
        page: page,
    })
    const response = await axios.get(`/?${params}`)
    const { hits } = response.data
    return hits;
}
