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
import HeroesPage from "../pages/common/HeroesPage/HeroesPage";
import HeroPage from "../pages/common/HeroesPage/HeroPage";
import LocationsPage from "../pages/common/LocationPage/LocationsPage";
import LocationPage from "../pages/common/LocationPage/LocationPage";
import RelationshipsPage from "../pages/common/RelationshipsPage/RelationshipsPage";
import RelationshipPage from "../pages/common/RelationshipsPage/RelationshipPage";

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
     {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesPage,
    },
    {
        path: '/heroes/hero:id',
        name: 'Hero',
        component: HeroPage,
        props: true
    },
     {
        path: '/locations',
        name: 'Locations',
        component: LocationsPage,
    },
    {
        path: '/locations/location:id',
        name: 'Location',
        component: LocationPage,
        props: true
    },
     {
        path: '/relationships',
        name: 'Relationships',
        component: RelationshipsPage,
    },
    {
        path: '/relationships/relationship:id',
        name: 'Relationship',
        component: RelationshipPage,
        props: true
    },

];

const router = new VueRouter({
    routes,
});

export default router;
