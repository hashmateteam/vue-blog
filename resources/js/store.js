import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
class XAPI {
    call(payload) {
        let uri = api.endpoint + payload.n_func;
        if (payload.requirexhr) {

        }
    }
}
class User {
    constructor() {}
    authin(payload) {
        var n_func = arguments.callee.toString();
        n_func = n_func.substr('function '.length);
        n_func = n_func.substr(0, n_func.indexOf('('));
        let uri = '/api/' + n_func;

        const xhr = this.$store.getters.get_headers;
        console.log(this.xid);
        var urlencoded = new URLSearchParams();
        urlencoded.append("xid", this.xid);
        var data = urlencoded;
        this.axios.post(uri, data, xhr).then((response) => {
            console.log(response);
            this.article = response.data;
            if (this.article.is_publish) {
                //this.publish_style = "background-color: #6610f2;color: #fff;";
            } else {
                //this.publish_style = "background-color: #969dab;color: #fff;";
            }
            if (this.article.image_src != null) {
                //
            }
        });
    }
    authup() {

    }
}

const state = {
    authorization: {
        token: '',
        name: 'Authorization',
        type: 'Bearer ',
        status: false
    },
    xhr_request: {
        headers: {
            'Authorization': '',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    },
    auth_user: {

    }
};

const mutations = {
    UPDATE_TOKEN(state, payload) {
        state.authorization.token = payload;
        state.authorization.status = true;
        state.xhr_request.headers.Authorization = state.authorization.type + state.authorization.token;
    },
    UPDATE_AUTH_USER(state, payload) {
        state.auth_user = payload;
    },
    RESET_TOKEN(state, payload) {
        state.authorization.status = false;
        state.authorization.token = '';
        state.xhr_request.headers.Authorization = '';
    }
};

const actions = {
    update_token(context, value) {
        context.commit("UPDATE_TOKEN", value);
    },
    update_auth_user(context, value) {
        context.commit("UPDATE_AUTH_USER", value);
    },
    reset_token(context, value) {
        context.commit("RESET_TOKEN", value);
    }
};

const getters = {
    get_token(state) {
        return state.authorization.token;
    },
    get_auth(state) {
        return state.authorization;
    },
    get_headers(state) {
        return state.xhr_request;
    },
    get_auth_user(state) {
        return state.auth_user;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});