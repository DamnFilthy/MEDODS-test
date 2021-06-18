<template>
  <section class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <router-link to="/">
          <img
            class="header__logo"
            src="https://medods.ru/assets/img/tmp/logo_cloud-7dae96a9d7f96c6773539bc96ff364c69b044e19efdea89ad290fe9edae8edbc.png"
            alt="MEDODS LOGO"
          />
        </router-link>

        <router-link class="header__title" to="/"> MEDODS </router-link>
      </div>
    </div>
  </section>

  <router-view />
</template>

<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box
    font-family: "Roboto", sans-serif

.header
    font-family: "Istok Web", sans-serif
    height: 40px
    background-color: #22b2ea
    &__wrapper
        // width: 1200px
        width: 100%
        display: block
        margin: 0 auto
    &__container
        padding-left: 30px
        display: flex
        padding-top: 6px
    &__logo
      cursor: pointer
      height: 25px
      width: 37px
    &__title
        cursor: pointer
        text-decoration: none
        font-size: 26px
        line-height: 32px
        font-weight: bold
        color: #fff
        margin-left: 5px
</style>
