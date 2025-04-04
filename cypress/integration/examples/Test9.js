///<reference types = "Cypress"/>

import { func } from "assert-plus"
import { toInteger } from "lodash";

describe("Calender", function(){
    it("Date verification in calender", function(){
        const year = "2027";
        const month = "June";
        const date = "15";
        const monthNumber = "6";
        const expectedList = [monthNumber, date, year];
        cy.visit(Cypress.env('url')+"seleniumPractise/#/offers");
        cy.get(".react-date-picker__inputGroup").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.contains("button", year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
        cy.contains("button", date).click();

        cy.get(".react-date-picker__inputGroup__input").each(($el, index, $list)=>{
            cy.wrap($el).invoke('val').should('eq', expectedList[index]);
        })
    })
})