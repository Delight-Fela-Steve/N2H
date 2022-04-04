import vuex from "vuex"

var config = {
    state:{
        user:null,
        charities:null,
        products:null,
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
        setProducts(state, payload){
          state.products=payload
        },
        setCharities(state, payload){
          state.charities=payload
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
              commit('setUser',response.user.uid)
              commit('setStatus','success')
              commit('serError',null)
            })
            .catch((error) => {
              commit('setStatus','failure')
              commit('setError',error.message)
            })
        },
        signInAction({commit},payload){
            this.$fire.auth.signInWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
              commit('setUser',response.user.uid)
              commit('setStatus','success')
              commit('setError',null)
            })
            .catch((error) => {
              commit('serStatus','failure')
              commit('setError',error.message)
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
        getProductsAction({commit}){
          this.$fire.firestore.collection('Users').getDocs()
          .then((response)=>{
            console.log(response)
          })
        },
        getCharityAction({commit}){},

    },
    getters:{}
}

export default function(){
    return new vuex.Store(config);
}