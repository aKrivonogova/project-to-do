import {
    createStore
} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            noteList: [],
            popupIsOpened: false
        }
    },
    plugins: [createPersistedState()],
    mutations: {
        createNote(state, newNote) {
            state.noteList.push(newNote)
        },

        removeNote(state, index) {
            state.noteList.splice(index, 1);
        },

        openPopup(state) {
            state.popupIsOpened = true;
        },

        closePopup(state) {
            state.popupIsOpened = false;
        }

    }
})
export default store;

