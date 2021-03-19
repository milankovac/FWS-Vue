import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login'
import AllProduct from '@/components/AllProduct'
import Home from '@/components/Home'
import ResetPassword from '@/components/ResetPassword'
import ForgotPassword from '@/components/ForgotPassword'
import ForgotPasswordInput from '@/components/ForgotPasswordInput'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name:'Login',
    component: Login,
    props:true
  },
  {
    path: '/products',
    name:'Products',
    component: AllProduct,
    props:true,
    
  },
  {
    path: '/',
    name:'Home',
    component: Home,
    props:true,
  },
  {
    path: '/reset',
    name:'ResetPassword',
    component: ResetPassword,
    props:true,
  },
  {
    path: '/forgot',
    name:'ResetPassword',
    component: ForgotPassword,
    props:true,
  },
  {
    path: '/forgotPassword'+localStorage.getItem('forgottoken'),
    name:'Forgot Password',
    component: ForgotPasswordInput,
    props:true,
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const publicPages = ['/login', '/','/forgot','/forgotPassword'+localStorage.getItem('forgottoken')];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }

})
export default router
