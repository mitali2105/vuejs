import { defineStore } from 'pinia'

interface LanguageOption {
    code: string
    name: string
}

// Type for a user
interface user {
    id: number | null
    name: string
    email: string
    date: string
    language: LanguageOption[]
    city: string
}

export const useUserStore = defineStore('user', {
    state: (): {
      users: user[],
      formUser: user,
      editingId: number | null
    } => ({
      users: [],
      formUser: {
        id: null,
        name: '',
        email: '',
        date: '',
        language: [],
        city: '',
      },
      editingId: null,
    }),

    actions: {
        addUser() {
            if(this.formUser.id !== null){
                this.editUser()
            }
            else{
                const newUser = { ...this.formUser, id: Date.now() }
                this.users.push(newUser)
                this.resetForm()
            }
            
        },

        resetForm() {
            this.formUser = {
                id: null,
                name: '',
                email: '',
                date: '',
                language: [],
                city: '',
            }
        },
        deleteUser(id: number) {
            this.users = this.users.filter(user => user.id !== id)
        },

        editUser(){
            const index = this.users.findIndex(user => user.id === this.formUser.id)

            if(index !== -1){
                this.users[index] = {...this.formUser}
                this.resetForm()
            }
        },

        startEdit(id:number){
            this.editingId = id
        },

        stopEdit(){
            this.editingId = null
        },

        updateUserInline(updateUser: user) {
            const index = this.users.findIndex(user => user.id === updateUser.id)
            if (index !== -1) {
              // Ensure reactivity
              this.users.splice(index, 1, { ...updateUser })
            }
            this.stopEdit()
          }
          

    },
})

