import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/Home.vue';
import Home from "../pages/for-admin/Home";
import AddingPlot from "../components/for-admin/AddingPlot/AddingPlot.vue";
import AddingHero from "../components/for-admin/AddingHero/AddingHero";
import AddingArt from "../components/for-admin/AddingArt/AddingArt";
import AddingLocation from "../components/for-admin/AddingLocation/AddingLocation";
import AddingRelationship from "../components/for-admin/AddingRelationship/AddingRelationship";
import AddTag from "../components/for-admin/AddTag/AddTag";
import PlotsPage from "../pages/common/PlotsPage/PlotsPage";
import PlotPage from "../pages/common/PlotsPage/PlotPage/PlotPage";
import RegistrationPage from "../pages/RegistrationPage"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/registration',
        name: 'Registration',
        component: RegistrationPage,
    },
    {
        path: '/admin',
        component: Home,
        children: [
            {
                path: '/admin/add-plot',
                component: AddingPlot,
            },
            {
                path: '/admin/add-hero',
                component: AddingHero,
            },
            {
                path: '/admin/add-art',
                component: AddingArt,
            },
            {
                path: '/admin/add-location',
                component: AddingLocation,
            },
            {
                path: '/admin/add-relationship',
                component: AddingRelationship,
            },
            {
                path: '/admin/add-tag',
                component: AddTag,
                props: true
            },

        ],
    },
    {
        path: '/plots',
        name: 'Plots',
        component: PlotsPage,
    },
    {
        path: '/plots/plot:id',
        name: 'Plot',
        component: PlotPage,
        props: true
    },
];

const router = new VueRouter({
    routes,
});

export default router;
