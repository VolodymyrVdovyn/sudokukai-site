const componentScript = document.currentScript;
const siteRoot = new URL("../", componentScript.src);

const pages = [
  { id: "home", label: "Home", path: "" },
  { id: "support", label: "Support", path: "support/" },
  { id: "privacy", label: "Privacy", path: "privacy/" },
];

class SudokukaiHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = this.getAttribute("current");
    const links = pages
      .map(({ id, label, path }) => {
        const current = currentPage === id ? ' aria-current="page"' : "";
        return `<a href="${new URL(path, siteRoot)}"${current}>${label}</a>`;
      })
      .join("");

    this.innerHTML = `
      <header class="site-header brand-header">
        <nav class="brand-header__inner" aria-label="Main navigation">
          <a class="brand brand-header__brand" href="${siteRoot}">
            <picture>
              <img
                class="theme-image--light"
                src="${new URL("assets/icon-light.png", siteRoot)}"
                alt=""
                width="42"
                height="42"
              />
              <img
                class="theme-image--dark"
                src="${new URL("assets/icon-dark.png", siteRoot)}"
                alt=""
                width="42"
                height="42"
              />
            </picture>
            <span>Sudokukai</span>
          </a>
          <p class="brand-header__tagline">Enter the Sudoku dojo.</p>
          <div class="brand-header__controls">
            <div class="nav-links">${links}</div>
            <sudokukai-theme-toggle></sudokukai-theme-toggle>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("sudokukai-header", SudokukaiHeader);
