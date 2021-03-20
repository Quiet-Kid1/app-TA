/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from 'views/Index.js';
import Profile from 'views/examples/Profile.js';
import Maps from 'views/examples/Maps.js';
import Register from 'views/examples/Register.js';
import Login from 'views/examples/Login.js';
import Tables from 'views/examples/Tables.js';
import Icons from 'views/examples/Icons.js';
import DataSet from 'views/pages/DataSet.js';
import TF from 'views/pages/TF-IDF.js';
import DataTraining from 'views/pages/DataTraining';
import Clustering from 'views/pages/Clustering';
import Visualization from 'views/pages/Visualization';

var routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Index,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'ni ni-planet text-blue',
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'ni ni-pin-3 text-orange',
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Tables,
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'ni ni-key-25 text-info',
    component: Login,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'ni ni-circle-08 text-pink',
    component: Register,
    layout: '/auth',
  },
  {
    path: '/data-set',
    name: 'Data Set',
    icon: 'ni ni-circle-08 text-pink',
    component: DataSet,
    layout: '/admin',
  },
  {
    path: '/tf-idf',
    name: 'TF IDF',
    icon: 'ni ni-circle-08 text-pink',
    component: TF,
    layout: '/admin',
  },
  {
    path: '/data-training',
    name: 'Data Training',
    icon: 'ni ni-circle-08 text-pink',
    component: DataTraining,
    layout: '/admin',
  },
  {
    path: '/clustering',
    name: 'Clustering',
    icon: 'ni ni-circle-08 text-pink',
    component: Clustering,
    layout: '/admin',
  },
  {
    path: '/visualization',
    name: 'Visualization',
    icon: 'ni ni-circle-08 text-pink',
    component: Visualization,
    layout: '/admin',
  },
];
export default routes;
