//Fetch funktion till API
export function fetchGames(url = 'https://stryk.herokuapp.com/stryktipset-sommar-2021') {
    return fetch(url)
        .then(result => result.json())
        .then(data => {
            return data;
        })
}