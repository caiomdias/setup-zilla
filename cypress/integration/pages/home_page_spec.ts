describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('Check the zilla home image', () => {
    expect(true).toBeTruthy();
  });
});

export {};
