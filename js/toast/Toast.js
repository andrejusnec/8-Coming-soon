class Toast {
/**
 *Konstruktorius 
 @constructor 
 */
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null; // reprezentuoja pati naujai sukurta elementa
        this.textDOM = null; // elementas kur vaizduosime teksta
        this.closeDOM = null; //Elementas skirtas uzdaryti toast
        this.closeTimer = null; // laikrodis , reguliojantis kada uzdaryti pranesima
    }
    /**
     * 
     * @param {string} type  Zinutes tipas. Vieninteliai variantas : success | error
     * @param {string} message  Tekstas turi buti atvaizduotas pranesime
     */
    show(type, message) {
        this.DOM.classList.add('visible');
        
        this.textDOM.innerText = message;

        if (type === 'success') {
            this.DOM.classList.remove('error')
        }
        if (type === 'error') {
            this.DOM.classList.add('error')
        }
        this.closeTimer = setTimeout(() => {  // Uzdaro zinutes langa po tam tikro laiko
            this.hide();
        }, 5000)
    }
    hide() {
        this.DOM.classList.remove('visible');
        clearTimeout(this.closeTimer);
    }

    render() {
        const HTML = `<div class="toast">
        <i class="fa fa-check"></i>
        <i class="fa fa-shield"></i>
        <p>Your message here...</p>
        <i class="fa fa-times"></i>
        </div> `;

        this.renderIntoParentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.renderIntoParentDOM.querySelector('.toast');
        this.textDOM = this.DOM.querySelector('p');
        this.closeDOM = this.DOM.querySelector('.fa-times');
        console.log

        this.closeDOM.addEventListener('click', () => {
            this.hide();
        })
        
    }
}
export { Toast }