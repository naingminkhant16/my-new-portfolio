<template>
    <div class="home my-3 my-sm-0 d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="d-flex mb-3 justify-content-center align-items-center">
                        <img src="../assets/pp.jpg" class="pp w-50 animate__animated animate__fadeIn"
                            :class="{ 'd-none': pp1 }" alt="">

                        <img src="../assets/pp2.jpg" class="pp w-50 animate__animated animate__fadeIn"
                            :class="{ 'd-none': pp2 }" alt="">

                        <img src="../assets/pp3.jpg" class="pp w-50 animate__animated animate__fadeIn"
                            :class="{ 'd-none': pp3 }" alt="">
                    </div>
                    <div class="d-flex mb-3 justify-content-center">
                        <i @click="swapPhotos(1)" class="bi bi-circle me-2" :class="{ 'text-primary': !pp1 }"></i>
                        <i @click="swapPhotos(2)" class="bi bi-circle me-2 " :class="{ 'text-primary': !pp2 }"></i>
                        <i @click="swapPhotos(3)" class="bi bi-circle " :class="{ 'text-primary': !pp3 }"></i>
                    </div>
                </div>
                <div class="col-lg-5 d-flex justify-content-center align-items-center">
                    <div class="mb-5 animate__animated animate__fadeInUp">
                        <h2>Hello, I'm
                            <span class="text-primary fs-1">
                                <VueWriter :array="typing" :start="1000" :typeSpeed="70" :iterations='0' />
                            </span>
                        </h2>
                        <hr>
                        <p class="" style="text-align: justify;">You can call me Thar Khant (my nickname). I'm 20 years
                            old typical Burmese Boy who
                            is passionate about coding. I'm interested in Backend Development and currently learning
                            Laravel and VueJs. My dream is to become a Software Engineer in future.</p>

                        <router-link :to="{ name: 'about' }" class="me-2 btn btn-outline-primary">My Skills
                        </router-link>
                        <router-link :to="{ name: 'about' }" class="btn btn-primary">Know Me More
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2 d-flex flex-lg-column justify-content-lg-center
                     justify-content-around align-items-center">
                    <!-- <div class=""> -->
                    <a href="https://www.facebook.com/TharKhant.734/"
                        class="mb-lg-3 me-3 me-lg-0 text-decoration-none text-white">
                        <i class="bi bi-facebook fs-3"></i></a>
                    <a href="https://github.com/naingminkhant16"
                        class="mb-lg-3 me-3 me-lg-0 text-decoration-none text-white">
                        <i class="bi bi-github fs-3"></i></a>
                    <a href="https://www.linkedin.com/in/naing-min-khant/"
                        class="mb-lg-3 me-3 me-lg-0 text-decoration-none text-white">
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
import { ref } from '@vue/runtime-core'
import VueWriter from 'vue-writer'
export default {
    setup() {
        let typing = ['Naing Min Khant.',
            "Junior Web Developer.",
            "PHP Developer.",
            'Laravel Developer.',
            'interested in Coding.'];

        //note! false is active image
        let pp1 = ref(false);
        let pp2 = ref(true);
        let pp3 = ref(true);
        let swapPhotos = (photo) => {
            switch (photo) {
                case 1:
                    pp2.value = true
                    pp3.value = true
                    pp1.value = false;
                    break;
                case 2:
                    pp1.value = true;
                    pp3.value = true;
                    pp2.value = false;
                    break;
                case 3:
                    pp1.value = true;
                    pp2.value = true;
                    pp3.value = false;
                    break;
            }
        }

        return { typing, swapPhotos, pp1, pp2, pp3 }
    },
    components: {
        VueWriter
    }
}
</script>

<style scoped>
.home {
    height: 90vh;
}

.pp {
    margin-top: 5px;
    border-radius: 1%;
}
</style>