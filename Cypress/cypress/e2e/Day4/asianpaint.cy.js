describe("Asian Paint", () => {
  it.skip("Shop", () => {
    cy.visit("https://www.asianpaints.com/");
    //cy.wait(3000);
    //cy.get(':nth-child(2) > #exitPopupmodal > .modal-dialog > .modal-content > .modal-body > .exit-popup > .exit-popup-right > .exit-popup-header > .iconLinks').should("be.visible").click();
    cy.get(":nth-child(6) > .track_section > .iconTextLinks__text")
      .trigger("mouseover")
      .click();
    //cy.wait(4000);
    // cy.get('input.track_third_level[text="Wallpapers"]').click();
    cy.get(
      ":nth-child(1) > .anchor-explore-stores > .imageWrapper > .image-explore-stores > img"
    ).click();

    cy.get(
      '[data-attr-prodsku="W107WZ65L45"] > :nth-child(5) > .global-button-white'
    ).click();
    cy.get("#cartPinCode").click().type("400012");
    cy.get(".pin-code-form > .ctaComp > .ctaText").click();
    cy.get(
      "#onetrust-close-btn-container > .onetrust-close-btn-handler"
    ).click();
    //cy.get('.cart-items-dropdowb').click();
    //cy.get('.__st_preview_frame_bpn').click();
    //cy.get('.__st_preview_frame_bpn').click();
    cy.wait(3000);
    //cy.get('.cart-items-dropdowb').click().should("contain","299")

    let exceptval = "299";
    cy.get(".cart-items-dropdowb")
      .click()
      .then((x) => {
        let actval = x.text();
        expect(actval).to.not.equal(exceptval);
        // actval.should("contain",exceptval);
        // expect(actval)
      });
  });

  it.skip("remove attribute", () => {
    cy.visit(
      "https://www.asianpaints.com/online-shop/colour-selection-tools.html"
    );
    cy.wait(1000);
    cy.get(
      '[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > .loadLazyImage'
    )
      .invoke("removeAttr", "target")
      .click();
    let url1 = cy.url();
    cy.log(url1);
    //cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > .loadLazyImage').click();
    //cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
  });

  it.skip("href attribute", () => {
    cy.visit(
      "https://www.asianpaints.com/online-shop/colour-selection-tools.html"
    );
    cy.wait(3000);
    cy.get(
      '[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p'
    ).then((newtab) => {
      const hreftab = newtab.prop("href");
      cy.visit(hreftab);
      // cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
    });
  });

  it.only("href attribute", () => {
    cy.visit(
      "https://www.asianpaints.com/online-shop/colour-selection-tools.html"
    );
    cy.wait(3000);
    cy.get(
      '[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p'
    ).then((newtab) => {
      let hreftab = newtab.prop("href");
      cy.log(hreftab);
      cy.log(typeof(hreftab));
      let str = hreftab.toString();
      cy.log(typeof(str));
      //let length1 = hreftab.length();
    //   let newtb = hreftab;
    //   cy.visit(newtb);
    //   cy.log(newtb);
    //   cy.url().should(
    //     "eq",
    //     "https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"
    //   );
    });
  });
});
