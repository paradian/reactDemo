export default {
    menus: [
        // 菜单相关路由
        { key: '/app/home', title: '首页', icon: 'mobile', component: 'Home',permission:0 },
        {
            key: '/app/demo',
            title: '测试',
            icon: 'scan',
            permission:2,
            subs: [
                { key: '/app/demo/demo1', title: '按钮', component: 'Info' ,permission:2},
                
                { key: '/app/demo/demo2', title: '按钮niu', component: 'Setting' ,permission:3},
               
            ],
        },
        {
            key: '/app/setting',
            title: '表单',
            icon: 'edit',
            permission:['','guest'],
            subs: [{ key: '/app/setting/settingForm', title: '基础表单', component: 'Setting',permission:2 }],
        },
    ],
    others: [
        // { key: '/app/404', title: '404', icon: 'mobile', component: 'Notfound' },
    ], // 非菜单相关路由
};