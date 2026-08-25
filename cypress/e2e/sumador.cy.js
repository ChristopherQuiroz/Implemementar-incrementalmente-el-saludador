describe("Saludador", () => {
  const completarFormulario = (idioma) => {
    cy.visit("/");
    cy.get("#idioma").select(idioma);
    cy.get("#name").type("Chris");
    cy.get("#edad").type("25");
    cy.get("#genero").select("Masculino");
    cy.get("button[type=submit]").click();
  };

  it("shows the greeting in Spanish by default", () => {
    completarFormulario("es");
    cy.get("#resultado-div").should("contain", "Chris");
    cy.get("#resultado-div").invoke("text")
      .should("match", /Buenos días|Buenas tardes|Buenas noches/);
  });

  it("shows the greeting in English when selected", () => {
    completarFormulario("en");
    cy.get("#resultado-div").should("contain", "Chris");
    cy.get("#resultado-div").invoke("text")
      .should("match", /Good morning|Good afternoon|Good evening/);
  });
});
