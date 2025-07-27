class crud_page {
    input_item(){
        return cy.get('input[placeholder="Add new item"]')
    }
    add_btn(){
        return cy.get('.add-btn')
    }
    edit_btn(){
        return cy.get('.edit-btn')
    }
    delete_btn(){
        return cy.get('.delete-btn')
    }
    edit_input(){
        return cy.get('.text')
    }
    save_btn(){
        return cy.get('.save-btn')
    }
    

    //actions
    type_item(){
        this.input_item().type("Doing Assessment")
    }
    click_add(){
        this.add_btn().click()
    }
    success_add(){
        return cy.contains('div','Item added successfully!')
    }
    clear_text(){
        this.edit_input().clear()
    }
    edit_text(){
        this.edit_input().type("Editing My Assessment")
    }
    click_save(){
        this.save_btn().click()
    }
    success_edit(){
        return cy.contains('div','Item updated!')
    }
    click_edit(){
        this.edit_btn().click()
    }
    click_delete(){
        this.delete_btn().click()
    }
    success_delete(){
        return cy.contains('Item removed successfully!')
    }
}

export default crud_page;