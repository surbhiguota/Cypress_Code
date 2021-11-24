/// <reference types ="cypress" />
const { exists } = require("fs")
const { createYield } = require("typescript")
before('',()=>{
     cy.visit('/')
})

describe('first suit', () => {
   it('first test', () =>{
  
   cy.contains('Sign in').click()
   cy.get('[type="email"]').type('surbhigupta.tayal@gmail.com')
   cy.get('#continue').click()

   cy.get('#ap_password').type('Surbhi@123')
   cy.get('#signInSubmit').click()
 // cy.waitFor(6000)
 //   for verification
   //cy.get('#nav-link-accountList-nav-line-1').contains("Hello,Surbhi").click()
    })
})