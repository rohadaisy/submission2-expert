class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section id="hero" class="hero">
                <div class="hero-inner-content">
                    <h1 class="hero-title">Bon Appétit</h1>
                    <p class="hero-tagline">Your culinary haven at your fingertips</p>
                </div>
            </section>
        `;
  }
}

customElements.define('hero-section', HeroSection);
