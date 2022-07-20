<template>
    <section id="about">
        <h1>About</h1>
        <div v-if="about">
            <div v-for="para in about" :key="para">
                <p>{{para.p}}</p>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    computed:{
        about(){
            return this.$store.state.about
        }
    }
}
</script>

<style scoped>
#about{
    background: #1f1f1f;
    /* color: #E5E5E5; */
    color: white;
    height: 50vh;
}
</style>