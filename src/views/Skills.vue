<template>
    <div class="container skills my-5 my-sm-0 d-flex justify-content-center align-items-center ">
        <div class="row">
            <div class="col">
                <div class="animate__animated animate__fadeInUp">
                    <div class="text-center mb-5">
                        <h2 class="">My <span class="text-primary">Skills <i class="bi bi-code-slash"></i></span></h2>
                        <p class="fs-6">Skills and Technologies I know
                        </p>
                    </div>
                    <div class="row g-4">
                        <div class="col">
                            <div class="">
                                <htl lang="HTML" perc="84" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <css lang="CSS" perc="70" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <js lang="JavaScript" perc="60" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <php lang="PHP" perc="70" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <vjs lang="Vue Js" perc="60" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <lara lang="Laravel" perc="72" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Css from '@/components/Css.vue';
import Htl from '@/components/Htl.vue';
import Js from '@/components/Js.vue';
import Php from '@/components/Php.vue';
import Vjs from '@/components/Vjs.vue';
import Lara from '@/components/Lara.vue';


export default {

    setup() {
        // let lang
        return;
    },
    components: {
        Css,
        Htl,
        Js,
        Php,
        Vjs,
        Lara
    }
}
</script>

<style lang="scss" scoped>
.skills {
    height: 90vh;
}
</style>