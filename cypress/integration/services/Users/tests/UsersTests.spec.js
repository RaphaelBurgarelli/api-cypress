/// <reference types="cypress" />

import * as POSTUsers from '../requests/POST-Users.request';
import * as GETUsers from '../requests/GET-Users.request';
import * as GETUser from '../requests/GET-User.request';
import * as PUTUsers from '../requests/PUT-User.request';
import * as DELETEUsers from '../requests/DELETE-Users.request';

describe('CRUD Usuarios', () => {

    let userId
    let userName
    it('Validar usuário cadastrado na lista de usuários', () => {
        POSTUsers.addUser().should((responseAddUser) => {
            expect(responseAddUser.status).to.eq(200)
            userName = responseAddUser.body.data.name
            userId = responseAddUser.body.data.id

            GETUsers.getUserByName(userName)
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response.body.data[0]).to.have.property('name', 'Meu Teste x')
                })
        })
    })

    it('Validar alteração do nome do usuário', () => {
        PUTUsers.changeUser(userId).should((responseChangeUser) => {
            expect(responseChangeUser.status).to.eq(200)

            GETUser.getUser(userId)
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response.body.data).to.have.property('name', 'Meu Teste x2')
                })
        })
    })

    it('Validar exclusão de usuário', () => {
        DELETEUsers.deleteUsers(userId).should((responseDeleteUser) => {
            expect(responseDeleteUser.status).to.eq(200)
            expect(responseDeleteUser.body.code).to.eq(204)

            GETUsers.getUserByName(userName)
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response.body.data).to.empty
                })
        })
    });
});