<template>
    <Pages :title="title">
        <!-- Halaman utama setelah login -->
        <div class="col-md-12">
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugit.</p>
        </div>
    </Pages>
</template>

<script>
import Pages from '@/components/template/Pages.vue';

export default {
    components: {
        Pages,
    },
    mounted() {
    },
    data() {
        return {
            title: 'HR Dashboard'
        }
    },
    methods: {
    }
}
</script>

<style scoped></style>