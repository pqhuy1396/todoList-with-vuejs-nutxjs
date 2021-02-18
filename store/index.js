import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      isDisplayForm: false
    },
    // thay doi state
    mutations: {
      openTask(state){
        state.isDisplayForm = true
      },
      closeTask(state){
        state.isDisplayForm = false
      }
    },
    //database / get ra va dua vao mutation(duoc callback)//query doc du lieu(getItem)
    // create, update,delete(mutation) thi trong vũe
    actions: {},
    // sau state, thay doi de phu hop condition
    getters : {}
  })
}

export default createStore
//tim hieu ve middleware va plugins => demo login logout
