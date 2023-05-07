import Vue from 'vue'
import Router from 'vue-router'
import emiCalculator  from "@/view/emiCalculator";
import piechart from "@/components/Pie";

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'emiCalculator',
            component:emiCalculator
        },
        {
            path:'/piechart',
            name:'pieChart',
            component:piechart
        }
    ]
})
