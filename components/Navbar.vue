<template>
    <nav class="nav">
        <div class="bar">
    <NuxtLink to="/" class="home">Home</NuxtLink>|
<NuxtLink to="/login" class="login">
    Login
</NuxtLink>|
<NuxtLink to="/PhoneNumberVerification">
    Registration
</NuxtLink>|
<NuxtLink to="/contact">
    Contact
</NuxtLink>|
<NuxtLink to="/about">
    About
</NuxtLink>
</div>
</nav>
</template>
<style>
.nav{
    background-color:aqua;
    font-size: 20px;
    width:100;
    height: 30px;
}
.bar{
    text-align: right;
    padding-right: 20px;
}
.home{
    padding-right: 10px;
}
.login{
    padding-right: 10px;
}
</style>