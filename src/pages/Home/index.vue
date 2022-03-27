<template>
    <div>
        <typeNav></typeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import {mapState} from 'vuex'

export default {
    name:"Home",
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
       
       
       
    },
    data(){
return{
    //floorList:[]
}
    } ,
    computed: {
            // ...mapState(['count'])
            ...mapState({
                floorList:store=>store.home.floorList
            })
        },
        methods: {
          
        },
        mounted(){
             //this.$route.query={}
         
           this.$store.dispatch('floorList')
            
        }
}

</script>
<style scoped lang="less" >
    
</style>