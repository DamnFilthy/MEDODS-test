<template>
  <section class="client">
    <div class="container">
      <div class="client__title">Персональная информация</div>

      <form
        class="form"
        ref="clientForm"
        action=""
        v-on:submit.prevent="
          onSubmit();
          openModal();
        "
      >
        <div class="wrapper">
          <div class="left-side">
            <!-- personal -->
            <div class="field">
              <label class="important" for="surname">*Фамилия:</label>
              <input required id="surname" type="text" name="surname" v-model="surname" />
            </div>
            <div class="field">
              <label class="important" for="name">*Имя:</label>
              <input required id="name" type="text" name="name" v-model="name" />
            </div>
            <div class="field">
              <label for="patronymic">Отчество:</label>
              <input id="patronymic" type="text" name="patronymic" v-model="patronymic" />
            </div>
            <div class="field">
              <label class="important" for="attending">*Лечащий врач:</label>
              <select name="attending" id="select" v-model="attending">
                <option disabled value="">Выберите</option>
                <option>Семеныч</option>
                <option>Анна Владимировна</option>
                <option>Шапокляк</option>
                <option>Крокодил Гена</option>
              </select>
            </div>
            <div class="field">
              <label class="important" for="clientGroup">*Группа клиентов:</label>
              <select name="clientGroup" id="clientGroup" v-model="clientGroup">
                <option disabled value="">Выберите</option>
                <option>Проблемные</option>
                <option>Конфликтные</option>
                <option>не используют ОМС</option>
              </select>
            </div>
            <!-- personal -->

            <!-- address -->
            <div class="field">
              <label for="index">Индекс:</label>
              <input id="index" type="text" name="index" v-model="index" />
            </div>
            <div class="field">
              <label for="country">Страна:</label>
              <input id="country" type="text" name="country" v-model="country" />
            </div>
            <div class="field">
              <label for="region">Область:</label>
              <input id="region" type="text" name="region" v-model="region" />
            </div>
            <!-- address -->
            <div class="field">
              <label class="important" for="city">*Город:</label>
              <input required id="city" type="text" name="city" v-model="city" />
            </div>
            <div class="field">
              <label for="street">Улица:</label>
              <input id="street" type="text" name="street" v-model="street" />
            </div>
            <div class="field">
              <label for="house">Дом:</label>
              <input id="house" type="text" name="house" v-model="house" />
            </div>
            <!-- address -->
            <!-- address -->
          </div>

          <div class="right-side">
            <!-- personal -->
            <div class="field">
              <label class="important" for="bornDate">*Дата рождения</label>
              <input required type="date" id="date" name="bornDate" v-model="bornDate" />
            </div>
            <div class="field gender">
              <label for="gender">Пол:</label>
              <input
                class="label-gender"
                name="gender"
                type="radio"
                value="Мужчина"
                v-model="gender"
              />
              M
              <input
                class="label-gender"
                name="gender"
                type="radio"
                value="Женщина"
                v-model="gender"
              />
              Ж
            </div>
            <div class="field">
              <label class="important" for="phone">*Телефон</label>
              <input
                required
                placeholder="88003220505"
                type="number"
                name="phone"
                id="tel"
                v-model="phone"
              />
            </div>
            <div class="field sms">
              <label for="no-sms">СМС не отправлять</label>
              <input type="checkbox" id="no-sms" name="noSms" v-model="noSms" />
            </div>
            <!-- personal -->

            <!-- passport -->
            <div class="field">
              <span class="important">*Тип документа:</span>
              <select class="important" name="typeDoc" id="typeDoc" v-model="typeDoc">
                <option disabled value="">Выберите</option>
                <option>Паспорт</option>
                <option>Права</option>
                <option>Справка</option>
              </select>
            </div>
            <div class="field">
              <label class="important" for="issueDate">*Дата выдачи:</label>
              <input
                required
                id="issueDate"
                type="date"
                name="issueDate"
                v-model="issueDate"
              />
            </div>
            <!-- passport -->
            <div class="field">
              <label for="series">Серия:</label>
              <input id="series" type="text" name="series" v-model="series" />
            </div>
            <div class="field">
              <label for="passNum">Номер:</label>
              <input id="passNum" type="text" name="passNum" v-model="passNum" />
            </div>
            <!-- passport -->
            <div class="field">
              <label for="issuedBy">Кем выдан: </label>
              <input id="issuedBy" type="text" name="issuedBy" v-model="issuedBy" />
            </div>
            <!-- passport -->
          </div>
        </div>
        <input class="submit" type="submit" value="Сохранить клиента" />
      </form>
    </div>
  </section>

  <!-- OVERLAY -->
  <div :class="{ hide: true, thanks: modal === true }">
    <div class="modal_window modal_window_mini" id="thanks">
      <div class="modal_window__close" @click="openModal">&times;</div>
      <div class="modal_window__subtitle">Информация сохранена</div>
      <div class="modal_window__descr">Клиент успешно добавлен в базу данных</div>
    </div>
  </div>
  <!-- OVERLAY -->
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
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
    };
  },
  methods: {
    onSubmit() {
      let user = {
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        attending: this.attending,
        clientGroup: this.clientGroup,
        index: this.index,
        country: this.country,
        region: this.region,
        city: this.city,
        street: this.street,
        house: this.house,
        bornDate: this.bornDate,
        gender: this.gender,
        phone: this.phone,
        noSms: this.noSms,
        typeDoc: this.typeDoc,
        issueDate: this.issueDate,
        series: this.series,
        passNum: this.passNum,
        issuedBy: this.issueby,
      };
      this.surname = "";
      this.name = "";
      this.patronymic = "";
      this.attending = "";
      this.clientGroup = "";
      this.index = "";
      this.country = "";
      this.region = "";
      this.city = "";
      this.street = "";
      this.house = "";
      this.bornDate = "";
      this.gender = "";
      this.phone = "";
      this.noSms = "";
      this.typeDoc = "";
      this.issueDate = "";
      this.series = "";
      this.passNum = "";
      this.issuedBy = "";
      // this.$refs.clientForm.reset();
      this.$store.commit("updateUser", user);
    },
    openModal() {
      this.$store.commit("openModal");
    },
  },
  computed: {
    modal() {
      return this.$store.state.openModal;
    },
    user() {
      console.log(this.$store.state.obj);
      return this.$store.state.obj;
    },
  },
};
</script>

<style lang="sass">
.container
  display: flex
  align-items: center
  flex-direction: column
.singUp-form
    background-color: green
.btn
    display: block
    margin: 0 auto

.client
    &__title
        text-align: center
        font-size: 28px
        padding: 30px 0px
        color: #2fe629
.form
    border-radius: 10px
    padding: 30px 30px
    background-color: #d1e0d323
    width: 900px
    margin: 0 auto
    display: flex
    flex-direction: column

.wrapper
    display: flex
    justify-content: space-between

.left-side, .right-side
    display: flex
    flex-direction: column

.field
    padding-bottom: 20px
    display: flex
    justify-content: space-between
    align-items: center
label
    margin-right: 10px

input, select
    transition: 1s all
    padding: 10px 15px
    border-radius: 10px
    outline: none
    border: none
    background-color: #f8e7e7ab
input:focus
    background-color: #bfbef3
input:invalid
    background-color: #f7c9c9

.important
    font-weight: bold
    color: #8d1f1fb4

.submit
    margin: 0 auto
    margin-top: 45px
    width: 250px
    height: 50px
    color: #ffffff
    font-weight: 400
    font-size: 20px
    cursor: pointer
    background-color: #a68af1

.sms, .gender
    justify-content: flex-start
    align-items: center

.label-gender
    margin-right: 10px
    margin-left: 10px


@media(max-width:1040px)
    .container
        width: 800px
        margin: 0 auto
    .wrapper
        flex-direction: column
    .form
        width: 350px


@media(max-width:800px)
    .container
        margin: 0 auto
        width: 400px


// Modal
.hide
  display: none
.thanks
    overflow: hidden
    display: block
    position: fixed
    width: 100%
    height: 100%
    top: 0
    background-color: rgba(0, 0, 0, .7)



.modal_window
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 380px
    min-height: 400px
    background-color: #f2f2f2
    padding: 38px 40px 40px 40px


    &__close
        position: absolute
        top: 0
        right: -40px
        font-size: 41px
        color: red
        line-height: 21px
        cursor: pointer


    &__subtitle
        color: #0d0d0d
        font-size: 18px
        font-weight: 700
        text-align: center


    &__descr
        margin-top: 11px
        color: #0d0d0d
        font-size: 14px
        font-weight: 500
        text-align: center


    &_mini
        min-height: 140px
</style>
