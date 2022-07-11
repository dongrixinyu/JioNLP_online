<template>
    <div>
        <a-layout>
            <LectureNavigation />
            <router-view> </router-view>
            <tui-juhe />
        </a-layout>
    </div>
</template>

<script>
import LectureNavigation from "@/views/lecture/LectureNavigation.vue";
import TuiJuhe from "@/components/advertisement/TuiJuhe.vue";
// import { useMeta } from "vue-meta";

export default {
    name: "LectureBase",
    components: {
        LectureNavigation,
        TuiJuhe,
    },
};
</script>

<style>

</style>
