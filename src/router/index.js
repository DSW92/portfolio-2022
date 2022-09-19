import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
// import MyOffer from '../components/MyOffer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/kontakt',
    name: 'pl-contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ 
            el: to.hash,
            top: 15,
            behavior: 'smooth',
          })
        }, 0)
      })
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ 
            top: 0
          })
        }, 550)
      })
    }

    
  }
})

export default router
