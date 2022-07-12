<template>
    <div class="skill">
        <div class="outer">
            <div class="inner d-flex align-items-center justify-content-center">
                <div class="text-center text-white" id="number">
                    {{ lang }}<br>
                    {{ per }}%</div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <circle cx="80" cy="80" r="70" stroke-linecap="round" fill='none' />
        </svg>
    </div>
</template>

<script>
import { NumCounter } from '@/composables/NumCounter'
import { onMounted, ref } from '@vue/runtime-core'
export default {
    props: ['lang', 'perc'],
    setup(props) {
        let lang = ref('');
        lang.value = props.lang;

        let per = ref(0);


        onMounted(() => {
            NumCounter(per, props.perc, 3);
        })
        //limit lang
        return { per, lang }
    }
}
</script>

<style lang="scss" scoped>
.skill {
    width: 160px;
    height: 160px;
    // background: var(--bs-primary);
    position: relative;

    .outer {
        height: 160px;
        width: 160px;
        border-radius: 50%;
        padding: 20px;
        // box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
        box-shadow: 6px 6px 10px -1px rgb(0 0 0 / 15%), -6px -6px 10px -1px rgb(22 22 22 / 70%);

        .inner {
            height: 120px;
            width: 120px;
            border-radius: 50%;
            box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
                inset -4px -4px 6px -1px rgba(33, 33, 33, 0.7),
                -0.5px -0.5px 0px rgb(50, 50, 50),
                0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
                0px 12px 10px -10px rgba(0, 0, 0, 0.05), ;

            #number {
                font-weight: 600px;
                color: var(--bs-primary);
            }

        }
    }

    circle {
        stroke: #FF0000;
        stroke-width: 20px;
        stroke-dasharray: 472;
        stroke-dashoffset: 472;
        animation: anim 3s linear forwards;
    }

    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
}

@keyframes anim {
    100% {
        stroke-dashoffset: 100;
    }
}
</style>