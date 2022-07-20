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
    background: green;
    /* color: #E5E5E5; */
    color: white;
    height: max-content;
    background-attachment: fixed;
}
#about p{
    text-align: center;
    padding: 0 20px;
}
</style>