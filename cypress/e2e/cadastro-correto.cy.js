describe('Página de Abrir conta', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://projeto-veiculos-carros-motos.vercel.app/index.html')
    cy.get('.botao_secundario').click();
    cy.get(':nth-child(4) > .cabecalho-lista__item-botao').click();
    cy.get('#nome').type('Eduardo Augusto Paiva Pinto');
    cy.get('#email').type('eduardo.augustopp@hotmail.com');
    cy.get('#rg').type('12.345.678-9');
    cy.get('#cpf').type('123.456.789-09');
    cy.get('#aniversario').type('2000-01-01');
    cy.get('.termos__input').check();
    cy.get('#enviar').click();
  })
})