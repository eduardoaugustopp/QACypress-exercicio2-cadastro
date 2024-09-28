describe('Página de Abrir conta', () => {
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.visit('https://projeto-veiculos-carros-motos.vercel.app/index.html');
        cy.get('.botao_secundario').click();
        cy.get(':nth-child(4) > .cabecalho-lista__item-botao').click();
        cy.get('#nome').clear().focus().blur();
        cy.contains('O campo de nome não pode estar vazio.').should('be.visible');
        cy.get('#email').clear().focus().blur();
        cy.contains('O campo de e-mail não pode estar vazio.').should('be.visible');
        cy.get('#rg').clear().focus().blur();
        cy.contains('O campo de RG não pode estar vazio.').should('be.visible');
        cy.get('#cpf').clear().focus().blur();
        cy.contains('O campo de CPF não pode estar vazio.').should('be.visible');
        cy.get('#aniversario').clear().focus().blur();
        cy.contains('O campo de data de nascimento não pode estar vazio.').should('be.visible');
    });
});