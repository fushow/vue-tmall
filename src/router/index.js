import app from '@/views/App'
import HelloWorld from '@/components/HelloWorld'
import page404 from '@/views/404'
import sign from '@/views/sign/index'
const list = [
  {
    path: '',
    component: app,
    children: [
      {
        path: '/',
        name:'HelloWorld',
        component: HelloWorld
      },
    ]
  },
  {
    path: '*',
    name: 'page404',
    component: page404
  },
  {
    path: '/sign',
    name: 'sign',
    component: sign
  }
];
export default list

