import {usuarios} from '../fixtures/usuarios.json'

describe('Página de Abrir Conta', () => {
  beforeEach(() => {
    cy.visit('https://projeto-veiculos-carros-motos.vercel.app/index.html');
    cy.get('.botao_secundario').click();
    cy.get(':nth-child(4) > .cabecalho-lista__item-botao').click();
  });
  
  usuarios.forEach(usuario => {
    it('Deve preencher os campos do formulário corretamente para cadastrar o usuário', () => {
      cy.get('#nome').clear().type(usuario.nome);
      cy.get('#email').clear().type(usuario.email);
      cy.get('#rg').clear().type(usuario.rg);
      cy.get('#cpf').clear().type(usuario.cpf);
      cy.get('#aniversario').clear().type(usuario.aniversario);
      cy.get('.termos__input').check();
      cy.get('#enviar').click();
    });
  });
});
