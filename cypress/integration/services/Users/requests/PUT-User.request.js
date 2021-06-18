/// <reference types="cypress" />

const payloadChangeUser = require('../payloads/change-user.json')
const authorization = `Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba`

function changeUser(idUser) {
    return cy.request({
        method: 'PUT',
        url: `users/${idUser}`,
        headers: {
            authorization
        },
        failOnStatusCode: false,
        body: payloadChangeUser
    });
}

export { changeUser };