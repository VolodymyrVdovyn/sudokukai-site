class SudokukaiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <div
            class="footer-signature"
            aria-label="From Volodymyr Vdovyn. With love. To this game."
          >
            <span>From: Volodymyr Vdovyn</span>
            <span class="footer-signature__line">
              <span>With&nbsp;</span>
              <svg
                class="footer-signature__heart"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.08 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5 22 12.27 18.6 15.36 13.45 20.04L12 21.35M16.5 5C15.5 5 14.54 5.47 13.88 6.2L12 8.29 10.11 6.2C9.46 5.47 8.5 5 7.5 5 5.5 5 4 6.5 4 8.5 4 10.91 6.73 13.5 12 18.28 17.27 13.5 20 10.91 20 8.5 20 6.5 18.5 5 16.5 5Z" />
              </svg>
              <span>&nbsp;to: This Game</span>
            </span>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("sudokukai-footer", SudokukaiFooter);
