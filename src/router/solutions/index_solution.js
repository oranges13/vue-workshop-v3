import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/3.sections/dashboard/Default.vue'),
    },
    {
      path: '/article/:article_id',
      name: 'Article',
      component: () => import('@/components/3.sections/dashboard/Article.vue'),
    },

    //TODO: Let the audience write these routes
    {
      path: '/exercise/1',
      component: () => import('@/components/2.views/ExerciseOne.vue'),
    },
    {
      path: '/exercise/2',
      component: () => import('@/components/2.views/ExerciseTwo.vue'),
    },
    {
      path: '/exercise/3',
      component: () => import('@/components/2.views/ExerciseThree.vue'),
    },
  ],
});

export default router;
