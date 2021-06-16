/// <reference path="D:\产品组项目\JJCP\JJCP\WBE/Data/data.html" />
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


var app = new Vue({
    el: '#app',
    data: {
        name: '九机主站规划'
    }
})

var leftNav = new Vue({
    el: '#letnav',
    data: {
        nav1: '页面内容管理',
        nav2: '',
        navs: [
          {
              navName: '页面内容管理', navUrl: 'Home.html', type: 'tree',
              'children': [
                  { navName: '页面管理', navUrl: 'Data/data.html', type: 'list' },
                  { navName: '移动端首页管理', navUrl: 'Home.html', type: 'list' },
                  { navName: '短链接管理', navUrl: 'Home.html', type: 'list' }
              ]
          },
          { navName: '活动管理', navUrl: '', type: 'tree' },
          { navName: '商品管理', navUrl: '', type: 'tree' },
          { navName: '文章管理', navUrl: '', type: 'tree' },
          { navName: 'APP内容管理', navUrl: '', type: 'tree' },
          { navName: '地区/门店管理', navUrl: '', type: 'tree' },
          { navName: '数据统计', navUrl: '', type: 'tree' },
          { navName: '会员内容管理', navUrl: '', type: 'tree' },
          { navName: '售后服务', navUrl: '', type: 'tree' },
          { navName: '留言管理', navUrl: '', type: 'tree' },
          { navName: '品牌专卖', navUrl: '', type: 'tree' },
          { navName: '主题管理', navUrl: '', type: 'tree' },
          { navName: '微信管理', navUrl: '', type: 'tree' },
          {
              navName: '系统管理', navUrl: '', type: 'tree',
              'children': [
                { navName: '用户管理', navUrl: 'system/UserList.html', type: 'list' },
                { navName: '角色管理', navUrl: 'Home.html', type: 'list' },
                { navName: '部门管理', navUrl: 'Home.html', type: 'list' }
              ]
          },
          
        ],
        groceryList: [
    { id: 0, text: '蔬菜' },
    { id: 1, text: '奶酪' },
    { id: 2, text: '随便其它什么人吃的东西' }
        ],
        type:'C'

    },
    methods: {
        add_tab: function (name,url) {
            xadmin.add_tab(name,url);
        }
    }
})
