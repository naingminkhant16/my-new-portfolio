<template>
    <div class="container about mt-3 mt-lg-0 d-flex justify-content-center align-items-center">
        <!-- <h2 class="text-primary">This is About Me</h2> -->
        <div class="row align-items-center">
            <div class="col-lg-8">
                <div class="animate__animated animate__fadeInUp mt-3">
                    <h2 class="">This page is all <span class="text-primary">About Me</span></h2>
                    <hr>
                    <div class="">
                        <p style="text-align: justify;" class="lh-base">
                            I'm 20 years old typical Burmese Boy who
                            is passionate about coding. I'm interested in Backend Development and currently learning
                            Laravel and VueJs. My dream is to become a Software Engineer in future. I started my
                            Programming Career with C++.
                            I learned all the basic syntax of C++ in my University first year. From that time, I fall in
                            love with Programming. I used to be a team leader in Group Projects at University. As a
                            left-brained person, I am strong at logical and critical thinking. I love to solve problems.
                        </p>
                        <a href="/cv.docx" class="btn btn-primary fw-bold" download>
                            Download CV</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="animate__animated animate__fadeInUp mt-3 mb-3 border border-primary p-5">
                    <p><span class="fw-bold">Name : </span>Naing Min Khant</p>
                    <hr>
                    <p><span class="fw-bold">Age : </span>
                        {{ age }}
                    </p>
                    <hr>
                    <p><span class="fw-bold">Email : </span><a href="mailto: tharkhant777@gmail.com"
                            class="email">tharkhant777@gmail.com</a></p>
                    <hr>
                    <p><span class="fw-bold">Phone : </span>
                        09-952128314
                    </p>
                    <hr>
                    <p><span class="fw-bold">From : </span>South Okkalapa Township, Yangon,
                        Myanmar</p>

                </div>
            </div>

            <div class="col-12">
                <div class="animate__animated animate__fadeInUp ">
                    <div class="row row-cols-2 row-cols-sm-4 mt-3">
                        <div class="col">
                            <div class="">
                                <div class="numbers">{{ exp }}</div>
                                <p class="text-center">Years Experiance</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <div class="numbers">{{ client }}</div>
                                <p class="text-center">Clients</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <div class="numbers">{{ pjs }}</div>
                                <p class="text-center">Projects Done</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <div class="numbers">{{ certi }}</div>
                                <p class="text-center">Certificates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import { NumCounter } from "../composables/NumCounter.js";
export default {
    setup() {
        let age = ref(0);
        let exp = ref(0);
        let client = ref(0);
        let pjs = ref(0);
        let certi = ref(0);

        onMounted(() => {
            setTimeout(() => {
                NumCounter(exp, 1);
                NumCounter(client, 2);
                NumCounter(pjs, 20);
                NumCounter(certi, 4);
                NumCounter(age, 20);
            }, 1000)
        });

        return { age, exp, client, pjs, certi }
    },
    components: {

    }
}
</script>

<style lang="scss" scoped>
.about {
    height: 90vh;

    .numbers {
        font-size: 1.6rem;
        text-align: center;
        color: var(--bs-primary);
    }
}



@media only screen and (max-width: 420px) {
    .about {
        height: 100% !important;
    }
}
</style>