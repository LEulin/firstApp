<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" id="header">MyFirstApp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
        <b-nav-item @click ="redirect('/login')" >Login</b-nav-item>
          <b-nav-item @click ="redirect('/register')" >Register</b-nav-item>
    </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</div>
</template>

<style scoped lang="scss">
@import "assets/colors.scss";
#header{
    color : $warning !important;
}

</style>
<script>
import ROUTER from 'router'
export default {
    name: 'home',
    methods: {
        redirect(router){
            ROUTER.push(router)
        }
    }
}
</script>