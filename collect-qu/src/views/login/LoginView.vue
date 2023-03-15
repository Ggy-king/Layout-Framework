<template>
    <div class="login_container">
        <div class="login_data">
            <LoginData />
        </div>
    </div>
</template>
<script>
import LoginData from "./LoginData";
export default {
    name: "LoginView",
    components: { LoginData }
}
</script>
<style lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    // min-height: 750px;
    background-image: url(../../assets/images/loginfive.jpg);
    background-size: 100% 100%;
    color: #fff;
}
.login_data {
    position:absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 500px;
    height: 300px;
    padding: 40px;
    border-radius: 20px;
    opacity: .9;
    background: linear-gradient(to bottom right, #92B0E6, #FEFFEB);
}
</style>