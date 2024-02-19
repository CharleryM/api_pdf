export class Facture {
    form: HTMLFormElement;
    title = HTMLFormElement
    client = HTMLFormElement
    owner = HTMLFormElement
    sold = HTMLFormElement

    constructor() {
        this.form = document.getElementById('form') as HTMLFormElement
        this.title = document.getElementById('title') as HTMLFormElement;
        this.client = document.getElementById('client') as HTMLFormElement;
        this.owner = document.getElementById('owner') as HTMLFormElement;
        this.sold = document.getElementById('sold') as HTMLFormElement;

        this.submitFormListener();
    }

    private submitFormListener(): void {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    private handleFormSubmit(e: Event) {

        e.preventDefault();

        const inputs = this.inputDatas();

        if (Array.isArray(inputs)) {
            const [title, client, owner, sold] = inputs;
            console.log([title, client, owner, sold])
        }
    }

        private inputDatas(): [string, string, string, number]{

        const title = this.title.value
        const client = this.client.value
        const owner = this.owner.value
        const sold = this.sold.value
        if (sold < 0 ){
            alert("les valeurs numériques doivent etre positives");
            return;
        } else {
            console.log(title, client, owner, sold);
            return [title, client, owner, sold]
        }
    }
}