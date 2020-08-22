import "./news-item.js"

class NewsList extends HTMLElement {

    set newslist(newslist) {
        this._newslist = newslist;
        this.render();
    }
    render() {
        this.innerHTML = "";
        this._newslist.forEach(news => {
            const newsItemElement = document.createElement("news-item");
            newsItemElement.news = news
            this.appendChild(newsItemElement);
        })

    }
    renderError(message) {
        this.innerHTML = ""
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
 }
}

customElements.define("news-list", NewsList);