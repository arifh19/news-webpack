class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light red">
            <a class="navbar-brand" href="#">Berita Indonesia</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a id="home" class="nav-item nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                <a id="entertainment" class="nav-item nav-link" href="#">Entertainment</a>
                <a id="health" class="nav-item nav-link" href="#">Health</a>
                <a id="science" class="nav-item nav-link" href="#">Science</a>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);