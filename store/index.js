import vuex from "vuex"

var config = {
    state:{
        user:null,
        status:null,
        error:null
    },
    mutations:{
        setUser(state, payload){
            state.user=payload
        },
        removeUser(state){
            state.user=null
        },
        setStatus(state, payload){
            state.status=payload
        },
        setError(state, payload){
            state.error=payload
        }
    },
    actions:{
        signUpAction({commit},payload){
            this.$fire.auth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
              alert('success')
              console.log(response)
            })
            .catch((error) => {
              alert('failure')
              console.log(error)
            })
        },
        signInAction({commit},payload){
            this.$fire.auth.signInWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
              alert('success')
              console.log(response)
            })
            .catch((error) => {
              alert('failure')
              console.log(error)
            })
        },
        signOutAction({commit}){
            this.$fire.auth.signOut()
            .then((response) => {
              commit('setUser', null)
              commit('setStatus', 'success')
              commit('setError', null)
              console.log(response)
            })
            .catch((error) => {
              commit('setStatus', 'failure')
              commit('setError', error.message)
            })
        },

    },
    getters:{}
}

export default function(){
    return new vuex.Store(config);
}