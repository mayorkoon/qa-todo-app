class login_pages {
    username_field(){
       return cy.get('input[placeholder="Username"]')
    }
    password_field(){
        return cy.get('input[placeholder="Password"]')
    }
    login_btn(){
        return cy.contains('button', 'Login')
    }
    todo_header(){
        return cy.contains('h2', 'Todo App')
    }

    //actions

    type_username(username){
        this.username_field().type(username)
    }
    type_password(password){
        this.password_field().type(password)
    }
    click_login(){
        this.login_btn().click()
    }
}

export default login_pages;