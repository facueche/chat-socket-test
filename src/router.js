import Chat from './components/Chat';
import UsernameEntry from './components/UsernameEntry';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'UsernameEntry',
        component: UsernameEntry,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;