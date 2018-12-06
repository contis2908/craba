import { html, render } from 'lit-html';

class AppLit extends HTMLElement {
    constructor() {

        super();

        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });


        const printElementName = (elem) => html `<div style="color:red;font-size:35px;">Native JS Webcomponent - ${elem}!</div>`;
        render(printElementName('Lit-HTML'), shadow);

    }
}

customElements.define('app-lit', AppLit);