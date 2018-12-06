import { LitElement, html } from '@polymer/lit-element';

class AppLitEl extends LitElement {

    static get properties() {
        return {
            elem: { type: String }
        };
    }

    constructor() {
        super();
        this.elem = 'LitElement';
    }

    render() {
        return html `
        <style>
            .mood {
                color: red;
                font-size: 35px;
            }
        </style>
        <section class="mood">
            Polymer Web Components - ${this.elem}
        </section>
      `;
    }

}

customElements.define('app-lit-el', AppLitEl);