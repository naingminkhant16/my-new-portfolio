<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class=" mt-5 animate__animated animate__fadeInUp ">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2>My <span class="text-primary">Projects</span></h2>
                        </div>
                        <div class="col-lg-6">
                            <div class="text-lg-end">
                                <a href="#" class="btn me-2 btn-outline-primary">All</a>
                                <a href="#" class="btn me-2 btn-outline-primary">PHP</a>
                                <a href="#" class="btn me-2 btn-outline-primary">Laravel</a>
                                <a href="#" class="btn me-2 btn-outline-primary">JavaScript</a>
                                <a href="#" class="btn btn-outline-primary">VueJs</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
            <div class="col-12 ">
                <div class="my-3">
                    <All />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import All from '@/components/projects/All.vue'
export default {
    setup() {
        return {};
    },
    components: { All }
}
</script>

<style lang="scss" scoped>
</style>