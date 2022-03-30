import vuex from "vuex"

var config = {
    state:{},
    getters:{},
    mutations:{},
    actions:{}
}

export default function(){
    return new vuex.Store(config);
}