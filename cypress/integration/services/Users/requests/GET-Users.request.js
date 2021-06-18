/// <reference types="cypress" />

const authorization = `Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba`

function getAllUsers() {
    return cy.request({
        method: 'GET',
        url: 'users',
        headers: {
            authorization
        },
        failOnStatusCode: false
    })
}

function getUserByName(queryString) {
    return cy.request({
        method: 'GET',
        url: `users?name=${queryString}`,
        headers: {
            authorization
        },
        failOnStatusCode: false
    })
}


export { getAllUsers, getUserByName };