export default [
  {
    // 路由重定向，默认home为首页
    path: '*',
    redirect: '/home/arearisk',
  },
  // 一级主页路由
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home/Home.vue'),
    children: [
      {
        name: 'arearisk',
        path: 'arearisk',
        component: () => import('@/views/AreaRisk/AreaRisk.vue'),
        meta: { name: 'arearisk' },
      },
      {
        name: 'chdata',
        path: 'chdata',
        component: () => import('@/views/CHdata/CHdata.vue'),
        meta: { name: 'chdata' },
      },
      {
        name: 'globaldata',
        path: 'globaldata',
        component: () => import('@/views/GlobalData/GlobalData.vue'),
        meta: { name: 'globaldata' },
      },
      {
        name: 'othercity',
        path: 'othercity',
        component: () => import('@/views/OtherCity/OtherCity.vue'),
        meta: { name: 'othercity' },
      },
    ],
  },
];
