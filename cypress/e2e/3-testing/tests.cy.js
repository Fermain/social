describe("Live-Social App: Login user", () => {

  it("CANNOT login the user with wrong credentials", () => {
    cy.visit("http://127.0.0.1:5500/#/login");
    cy.get("input[type=email]").type("anestu@stud.noroff.no")
    cy.get("input[type=password]").type("kenrhk")
    cy.get("form .btn-group button[type=submit]").click()
    cy.wait(1000);
    cy.get("form .btn-warning").contains("Close").should("be.visible").click()
  })

  it("CAN login the user", () => {
    cy.visit("http://127.0.0.1:5500/#/login");
    cy.get("input[type=email]").type("kadstest@stud.noroff.no")
    cy.get("input[type=password]").type("erhjkarhkjerh")
    cy.get("form .btn-group button[type=submit]").click()
    cy.wait(1000);
  })

  it("CAN logout the user after login", () => {
    cy.visit("http://127.0.0.1:5500/#/login");
    cy.get("input[type=email]").type("kadstest@stud.noroff.no")
    cy.get("input[type=password]").type("erhjkarhkjerh")
    cy.get("form .btn-group button[type=submit]").click()
    cy.wait(1000);

    cy.get("button").contains("Profile").should("be.visible").wait(500).click()
    cy.get("button").contains("Logout").should("be.visible").wait(500).click()
  })
})