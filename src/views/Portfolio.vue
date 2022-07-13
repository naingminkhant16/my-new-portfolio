<template>
    <div class="container">
        <div class="portfolio">
            <div class="row">
                <div class="col-12">
                    <div class=" mt-5 animate__animated animate__fadeInUp ">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2>My <span class="text-primary">Projects</span></h2>
                            </div>
                            <div class="col-lg-6">
                                <div class="text-lg-end">
                                    <button @click="pjsHandler('all')" class="btn me-2 btn-outline-primary"
                                        :class="{ 'btn-primary text-white': x == 'all' }">All</button>
                                    <button @click="pjsHandler('php')" class="btn me-2 btn-outline-primary"
                                        :class="{ 'btn-primary text-white': x == 'php' }">PHP</button>
                                    <button @click="pjsHandler('laravel')" class="btn me-2 btn-outline-primary"
                                        :class="{ 'btn-primary text-white': x == 'laravel' }">Laravel</button>
                                    <button @click="pjsHandler('js')" class="btn me-2 btn-outline-primary"
                                        :class="{ 'btn-primary text-white': x == 'js' }">JS</button>
                                    <button @click="pjsHandler('vuejs')" class="btn btn-outline-primary"
                                        :class="{ 'btn-primary text-white': x == 'vuejs' }">VueJs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="col-12 ">
                    <div class="my-3">
                        <div class="row animate__animated animate__fadeInUp">
                            <div class="col-lg-4" v-if="x == 'all' || x == 'js'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/b5-foodie.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Foodie Project With Bootstrap 5</h5>
                                            <a href="https://foodie-b5-nmk.netlify.app/"
                                                class="btn  btn-primary">Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'php'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/edusite.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Education Website For Educare</h5>
                                            <a href="#" class="btn btn-danger disabled">Unavailable Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'js'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/portfolio1.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">My Portfolio Site 1</h5>
                                            <a href="https://portfolio-nmk.netlify.app/"
                                                class="btn  btn-primary">Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'vuejs'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/invoice-vue.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Mini Invoice App With VueJS</h5>
                                            <a href="https://invoice-vue.netlify.app/" class="btn  btn-primary">Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'php'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/mz_rose.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Magazine Site With PHP <br> (Admin & User panel)</h5>
                                            <a href="#" class="btn btn-danger disabled">Unavailable Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'js'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/portfolio.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Company Portfolio Template</h5>
                                            <a href="https://naingminkhant16.github.io/internPJ1/index.html"
                                                class="btn  btn-primary">Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'php'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/shop.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">E-Shop Site With Pure PHP <br> (Admin & User panel)</h5>
                                            <a href="#" class="btn btn-danger disabled">Unavailable Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'js'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/gold.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Gold Price Calculator <br> (In Terms of Burma)</h5>
                                            <a href="https://naingminkhant16.github.io/gold-price-calculator/"
                                                class="btn  btn-primary">Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'laravel'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/lara-blog.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Blog CRUD With Laravel</h5>
                                            <a href="#" class="btn btn-danger disabled">Unavailable Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'php'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/rjpa.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Quiz For Learing Japanese Alphabets <br>(With PHP) </h5>
                                            <a href="#" class="btn btn-danger disabled">Unavailable Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'vuejs'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/listBuilder.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">List Builder With VueJs</h5>
                                            <a href="https://list-builder-vue.netlify.app/" class="btn btn-primary">
                                                Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'php'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/queryBuilder.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Query Builder by Me <br>
                                                (Still Developing In PHP)
                                            </h5>
                                            <a href="https://github.com/naingminkhant16/My-Query-Builder-PHP"
                                                class="btn btn-dark">
                                                Github</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'vuejs'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/gender.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Decide Gender By Name (VueJs)</h5>
                                            <a href="https://gender-by-name.netlify.app/" class="btn btn-primary">
                                                Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'php'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/ecom.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">Ecommerce With Pure PHP <br> (Admin & User panel)</h5>
                                            <a href="#" class="btn btn-danger disabled">Unavailable Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-lg-4" v-if="x == 'all' || x == 'js'">
                                <div class="text-center mb-3 animate__animated animate__fadeInUp">
                                    <figure class="imghvr-reveal-up">
                                        <img src="../assets/portfolioNew.png" alt="example-image">
                                        <figcaption>
                                            <h5 class="">My Portfolio Site 2</h5>
                                            <a href="/" class="btn  btn-primary">Demo</a>
                                        </figcaption><a href="javascript:;"></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from '@vue/reactivity';

export default {
    setup() {
        let x = ref('all');

        let pjsHandler = (y) => {
            x.value = y;
        };

        return { x, pjsHandler };
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/img-effect";

.portfolio {
    min-height: 90vh;
}
</style>