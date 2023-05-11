import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': '7460ec98edmsh2535ee148ef70cdp15eb76jsnb9c10138adf7',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}
