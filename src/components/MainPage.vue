<template>
    <div>
        这是主页面{{count}}
        <p @click="changeTip">{{tips}}</p>
        <p>eee{{countTip}}</p>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name: 'MainPage',
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState(['count','tips']),
            ...mapGetters(['countTip'])
        },
        // computed: {
        //     // count(){
        //     //     return this.$store.state.count
        //     // },
        //     // tips(){
        //     //     return this.$store.state.tips;
        //     // }
        // },
        methods: {
            changeTip(){
                this.$store.commit({
                    type:'changeTips',
                    mes:'我是修改后的提示语'
                })
            }
        },
    }
</script>

<style lang="" scoped>
    
</style>