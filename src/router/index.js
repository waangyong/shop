import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Login = () => import('../views/login/Login.vue')
const Index = () => import('../views/index.vue')
const Edit = () => import('../views/profile/Edit.vue')
const Coupon = () => import('../views/profile/Coupon.vue')
const AddressList = () => import('../views/profile/AddressList.vue')
const EditAddress = () => import('../views/profile/EditAddress.vue')
//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '',
    redirect: '/login'
  },

  {
    path: '/login',
    component: Login
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/coupon',
    component: Coupon
  },
  {
    path: '/address-list',
    component: AddressList
  },
  {
    path: '/edit-address',
    component: EditAddress
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/detail/:iid',
        component: Detail
      },
      {
        path: '/home',
        component: Home
      },
    ]
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router