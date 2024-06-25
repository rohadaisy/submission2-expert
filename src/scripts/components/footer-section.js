class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
                <p>Copyright © 2024 - Rohadaisy</p>
            </footer>
        `;
  }
}

customElements.define('footer-section', FooterSection);
