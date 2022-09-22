import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Elementor form é null, verifique o DOM");
}
const buttonImportar = document.querySelector("#importar-dados");
if (buttonImportar) {
    buttonImportar.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error("Botão importa não foi encontrado");
}
//# sourceMappingURL=app.js.map