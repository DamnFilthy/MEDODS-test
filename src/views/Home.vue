<template>
  <div class="container">
    <div class="wrapper-home">
      <div class="welcome">
        <div class="welcome__title">Медицинская информационная система</div>
        <div class="welcome__descr">для медицинских центров и стоматологий</div>
        <div class="welcome__logo">MEDODS</div>

        <router-link @click="addNewCustomer" class="welcome__btn" to="/register"
          >Добавить нового клиента</router-link
        >
      </div>
      <div class="banner">
        <img
          src="https://medods.ru/assets/img/main_page/1-c7ccd9192289a52e3b1203b500bc69c7eeaed604a3fffe98285406a395d69783.png"
          alt="MEDODS BANNER"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    addNewCustomer() {
      console.log("castumer");
    },
  },
};
</script>

<style lang="sass">
.wrapper-home
  display: flex
  align-items: center
  margin-top: -40px
  padding-top: 70px
  height: 100vh
.banner
  margin-left: 50px
  height: 308px
  width: 350px
.welcome
  font-family: "Istok Web", sans-serif
  display: flex
  flex-direction: column
  justify-content: center
  flex-basis: 60%
  &__title
    font-size: 38px
    color: #666
    font-weight: 600
    letter-spacing: .01em
    line-height: 1.15
  &__descr
    font-size: 21px
    line-height: 30px
    color: #414141
  &__logo
    font-size: 140px
    line-height: 150px
    color: #22b2ea
    font-weight: bold
    margin-left: -10px
    margin-bottom: 40px
  &__btn
    text-decoration: none
    text-align: center
    font-size: 18px
    padding: 10px 12px
    background: #d7b5a1
    border: 5px solid #fff8f4
    width: 200px
    color: #fff
    cursor: pointer


@media(max-width:1040px)
    .wrapper-home
      flex-direction: column
    .header
      min-width: 400px

@media(max-width:600px)
    .welcome__btn
      transform: translateX(50%)
    .welcome__logo
      font-size:100px
      text-align: center
    .banner
      display: none
    .welcome__title
      text-align: center
    .welcome__descr
      text-align: center
@media(max-width:400px)
    .welcome__logo
      font-size:85px
</style>
