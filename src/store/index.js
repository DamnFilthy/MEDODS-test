import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    openModal: false,
    obj: {
      surname: null,
      name: null,
      patronymic: null,
      attending: null,
      clientGroup: null,
      index: null,
      country: null,
      region: null,
      city: null,
      street: null,
      house: null,
      bornDate: null,
      gender: null,
      phone: null,
      noSms: false,
      typeDoc: null,
      issueDate: null,
      series: null,
      passNum: null,
      issuedBy: null,
    }
  },
  mutations: {
    updateUser(state, user) {
      state.obj.surname = user.surname;
      state.obj.surname = user.surname;
      state.obj.name = user.name;
      state.obj.patronymic = user.patronymic;
      state.obj.attending = user.attending;
      state.obj.clientGroup = user.clientGroup;
      state.obj.index = user.index;
      state.obj.country = user.country;
      state.obj.region = user.region;
      state.obj.city = user.city;
      state.obj.street = user.street;
      state.obj.house = user.house;
      state.obj.bornDate = user.bornDate;
      state.obj.gender = user.gender;
      state.obj.phone = user.phone;
      state.obj.noSms = user.noSms;
      state.obj.typeDoc = user.typeDoc;
      state.obj.issueDate = user.issueDate;
      state.obj.series = user.series;
      state.obj.passNum = user.passNum;
      state.obj.issuedBy = user.issueby;
      console.log(state.obj, state.openModal);
    },
    openModal(state) {
      if (!state.openModal) {
        state.openModal = true;
      } else {
        state.openModal = false;
      }
    }
  },
  actions: {},
  modules: {}
})