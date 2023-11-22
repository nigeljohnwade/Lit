import {LitElement, html, css} from 'lit';

export class SimpleButton extends LitElement{
    static properties = {
        variant: "",
        submit: false,
    }

    static styles = css`
      button {
        padding: calc(var(--content-padding) / 2) var(--content-padding);
        border: none;
        color: var(--foreground-primary, white);
        background-color: var(--background-primary, darkslategrey);
      }

      button.primary {
        background-color: var(--background-primary, darkslategrey);
        color: var(--foreground-primary, white);
      }

      button.secondary {
        background-color: var(--background-secondary, lightslategrey);
        color: var(--foreground-primary, white);
      }
    `;

    constructor() {
        super();
    }

    render(){
        return html`<button type="${this.submit ? 'submit' : 'button'}" class="${this.variant}">
            <slot name="content"></slot>
        </button>`;
    }
}

customElements.define('simple-button', SimpleButton);