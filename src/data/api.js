const KEY = "7900c016c15d400ba3f750a23ec10bcc"
class DataSource {
     
    static async getNews() {
        try {
            const response = await fetch(`http://newsapi.org/v2/top-headlines?country=id&apiKey=${KEY}`);
            const responseJson = await response.json();
            if (responseJson.articles) {
                return Promise.resolve(responseJson.articles);
                
            } else {
                return Promise.reject(`Somethis is wrong`);
            }
        } catch (error) {
            return Promise.reject(error);
        }   
    }
    static async getEntertain() {
        try {
            const response = await fetch(`http://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=${KEY}`);
            const responseJson = await response.json();
            if (responseJson.articles) {
                return Promise.resolve(responseJson.articles);
                
            } else {
                return Promise.reject(`Somethis is wrong`);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
    static async getHealth() {
        try {
            const response = await fetch(`http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=${KEY}`);
            const responseJson = await response.json();
            if (responseJson.articles) {
                return Promise.resolve(responseJson.articles);
                
            } else {
                return Promise.reject(`Somethis is wrong`);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
    static async getScience() {
        try {
            const response = await fetch(`http://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=${KEY}`);
            const responseJson = await response.json();
            if (responseJson.articles) {
                return Promise.resolve(responseJson.articles);
                
            } else {
                return Promise.reject(`Somethis is wrong`);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
    static async getCovidIndo() {
        try {
            const response = await fetch(`https://covid19.mathdro.id/api/countries/Indonesia/confirmed`);
            const responseJson = await response.json();
            if (responseJson) {
                return Promise.resolve(responseJson);
                
            } else {
                return Promise.reject(`Somethis is wrong`);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default DataSource;