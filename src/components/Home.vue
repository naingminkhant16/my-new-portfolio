<template>
    <div class="home d-flex align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2">

                </div>
                <div class="col-lg-4">
                    <div class="d-flex mb-3 justify-content-center align-items-center">
                        <img src="../assets/pp.jpg" class="pp w-75" alt="">
                    </div>
                </div>
                <div class="col-lg-4 d-flex justify-content-center align-items-center">
                    <div class="mb-5">
                        <h2>Hello, I'm
                            <span class="text-primary fs-1">
                                <VueWriter :array="typing" :start="1000" :typeSpeed="70" :caret="cursor"
                                    :iterations='0' />
                            </span>
                        </h2>
                        <hr>
                        <p class="">You can call me Thar Khant (my nickname). I'm 20 years old typical Burmese Boy who
                            is passionate about coding. I'm interested in Backend Development and currently learning
                            Laravel and VueJs. My dream is to become a Software Engineer in future.</p>
                        <router-link :to="{ name: 'about' }" class="btn btn-lg btn-primary">Know Me More
                        </router-link>
                    </div>
                </div>
                <div
                    class="col-lg-2 d-flex flex-lg-column justify-content-lg-center justify-content-around align-items-start">
                    <!-- <div class=""> -->
                    <a href="#" class="mb-lg-3 me-3 me-lg-0 text-decoration-none text-white">
                        <i class="bi bi-facebook fs-3"></i></a>
                    <a href="#" class="mb-lg-3 me-3 me-lg-0 text-decoration-none text-white">
                        <i class="bi bi-github fs-3"></i></a>
                    <a href="#" class="mb-lg-3 me-3 me-lg-0 text-decoration-none text-white">
                        <i class="bi bi-linkedin fs-3"></i></a>
                    <a href="#" class="text-decoration-none text-white">
                        <i class="bi mb-lg-3 bi-twitter fs-3"></i></a>
                    <!-- </div> -->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import VueWriter from 'vue-writer'
export default {
    setup() {
        let typing = ['Naing Min Khant.',
            "Junior Web Developer.",
            "PHP Developer.",
            'Laravel Developer.',
            'interested in Backend.'];

        return { typing }
    },
    components: {
        VueWriter
    }
}
</script>

<style scoped>
.home {
    height: 94vh;
}

.pp {
    border-radius: 50%;
}
</style>