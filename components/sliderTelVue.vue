<template>
    <div class="slider">

        <div class="card" v-for="item in items" :key="item.id">
            <div class="img-box">
                <img :src="item.url" width="150">
            </div>
            <div class="info-box">
                <p><strong>{{ item.name }}</strong></p>

                <p>A parti de <span>{{ item.prix }}</span> £</p>
                <span class="last-price">{{ item.last_prix }} £</span>
            </div>

            <br><br>

            <div class="bottom">
                <span>Ajouter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </div>




        </div>

    </div>
</template>

<script>

export default ({
    data(){
        return{
            items:[

            {
                name: 'Pixel 8 pro',
                prix: '799',
                last_prix: '1023',
                url: 'https://lh3.googleusercontent.com/E2J7hG3ZRWpFOO0NBrkg1s6K1ZKYLwEuCK_lAO7LrPVH3C0eTbFCycYgqs4gr8caAr27S-PKLy2yLhIVGCy4byZ5wZ8kzQpnyQk=rw-e365-w1200'
            },
            {
                name: 'Pixel Buds pro',
                prix: '149',
                last_prix: '229',
                url: 'https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w601'
            },
            {
                name: 'Pixel 8 a',
                prix: '499',
                last_prix: '549',
                url: 'https://lh3.googleusercontent.com/4mBe7W_xXYt4JNMQHR0wIX7n4Vv6VPxw3MRJWLCiUJAPCoHz5r7oHEKu4wr_KszIouzwCnk7XabMRJ135ae1niTXr6AT0_gRpzE=s1400-w1400-e365-rw-v1'
            },
            {
                name: 'Fitbit Charge 6',
                prix: '119,95',
                last_prix: '159,95',
                url: 'https://lh3.googleusercontent.com/1irhYbVhHpMUXbVuRtM2erpOC4BMFhZuplK63D_K6wrUR5Zep6EcbHW-VN81QJV3RwvmHiQRS3FuHOXuTDfiCo0oISYPle-CDjXo=rw-e365-w1200'
            },
            {
                name: 'Google Pixel Watch',
                prix: '799',
                last_prix: '1023',
                url: '/article/montre.webp'
            },



            ]
        }
    },
})
</script>


<style scoped>

.slider{
    display: flex;
    padding: 20px;
    overflow: auto;
}

.slider .card{
    min-width: 160px;
    padding: 10px;
    margin: 0px 10px 0px ;
}

.card .img-box{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #F8F9FA;
    padding: 25px;
    margin-bottom: 15px;
    height: 150px;
}

.card .info-box p{
    font-size: 0.9rem;
}

.info-box .last-price{
    text-decoration: line-through;
}

.card .bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85px;
}

.bottom svg{
    width: 18px;
    color: rgb(6, 122, 200);

}
.bottom span{
    font-weight: 600;
    color: rgb(6, 122, 200);
}



</style>