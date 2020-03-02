export default {
    menus: [
        // 菜单相关路由
        { key: '/app/home', title: '首页', icon: 'mobile', component: 'Home' },
        {
            key: '/app/demo',
            title: '测试',
            icon: 'scan',
            subs: [
                { key: '/app/demo/demo1', title: '按钮', component: 'Info' },
                { key: '/app/demo/demo2', title: '按钮', component: 'Setting' },
               
            ],
        },
        {
            key: '/app/setting',
            title: '表单',
            icon: 'edit',
            subs: [{ key: '/app/setting/settingForm', title: '基础表单', component: 'Setting' }],
        },
    ],
    others: [
        // { key: '/app/404', title: '404', icon: 'mobile', component: 'Notfound' },
    ], // 非菜单相关路由
};