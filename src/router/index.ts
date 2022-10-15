import FullLayout from '@/layouts/FullLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MyQueueView from '@/views/MyQueueView.vue';
import MyTicketsView from '@/views/MyTicketsView.vue';
import QueuesView from '@/views/QueuesView.vue';
import AuthView from '@/views/AuthView.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FullLayout,
      children: [
        { path: 'tickets', component: MyTicketsView },
        { path: '', component: MyQueueView },
        { path: 'queues', component: QueuesView },
      ],
    },
    {
      path: '/auth',
      name: 'Auth',
      component: EmptyLayout,
      children: [{ path: '', component: AuthView }],
    },
  ],
});

export default router;
