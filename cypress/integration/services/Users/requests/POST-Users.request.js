/// <reference types="cypress" />

const payloadAddUser = require('../payloads/add-user.json')
const authorization = `Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba`

function addUser() {
    return cy.request({
        method: 'POST',
        url: 'users',
        headers: {
            authorization
        },
        failOnStatusCode: false,
        body: payloadAddUser
    });
}

export {addUser};