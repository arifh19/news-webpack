import '../scripts/components/news-list.js';
import DataSource from "../data/api.js";

const main = () => {
    const newsListElement = document.querySelector("news-list");

    document.addEventListener("DOMContentLoaded", async() => {
        const side = document.querySelector("aside");
        const home = document.querySelector("#home");
        const entertainment = document.querySelector("#entertainment");
        const health = document.querySelector("#health");
        const science = document.querySelector("#science");
        let confirmIndo = ""; 
        let recoveryIndo = ""; 
        let deathIndo = ""; 
        try{
            const result = await DataSource.getNews();
            const covidIndo = await DataSource.getCovidIndo();
            confirmIndo = covidIndo[0].confirmed
            recoveryIndo = covidIndo[0].recovered
            deathIndo = covidIndo[0].deaths
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
        home.addEventListener("click", async function () {
            try{
                const result = await DataSource.getNews();
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        });

        entertainment.addEventListener("click", async function () {
            try{
                const result = await DataSource.getEntertain();
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        });
        health.addEventListener("click", async function () {
            try{
                const result = await DataSource.getHealth();
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        });
        science.addEventListener("click", async function () {
            try{
                const result = await DataSource.getScience();
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        });

        const covidElement = document.createElement("covid-item");
        covidElement.innerHTML = `
        <div class="card">    
            <h3 class="center">Info Covid 19 Indonesia</h3>
            <div class="card-body">
                <h4>
                        Positif : ${confirmIndo}
                </h4>
                <h4>
                        Meninggal Dunia : ${deathIndo}
                </h4>
                <h4>
                        Sembuh : ${recoveryIndo}
                </h4>
            </div>
        </div>
        `
        side.appendChild(covidElement);

        const footer = document.createElement("footer");
        footer.innerHTML = `
        <p>Berita Indonesia &#169; 2020, Dicoding Academy</p>
        `
        document.body.appendChild(footer);
    });
    const renderResult = (results) => {
        newsListElement.newslist = results;
    };

    const fallbackResult = message => {
        newsListElement.renderError(message);
    };
    
};

export default main;