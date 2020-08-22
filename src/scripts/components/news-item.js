import moment from "moment";
import 'moment/locale/id';


class NewsItem extends HTMLElement {
    constructor(){
        super();
        this.published = ""
    }
    set news(news) {
        this._news = news;
        this.published = moment(this._news.publishedAt).fromNow();

        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card">
                <img class="card-img-top" src="${this._news.urlToImage}" alt="${this._news.description}">
            
                <div class="card-body">
                    <a href="${this._news.url}">
                        <h4 class="card-title">
                            ${this._news.title}
                        </h4>
                    </a>

                    <p class="card-text">
                        ${this._news.content}
                    </p>
                    <small class="text-muted">
                        ${this.published}
                    </small>
                </div>
            </div>
            <br>`
    }
}

customElements.define("news-item", NewsItem);