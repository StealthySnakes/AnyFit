import Login from './components/Login';
import AccountHome from './components/AccountHome';
import Signup from './components/SignupPage/Signup';
import WorkoutGenerator from './components/WorkoutGenerator';
import WorkoutPage from './components/WorkoutPage';
import StopWatch from './components/StopWatch';


export const ROUTES = [
  { path: '/login', component: Login},
  { path: '/signup', component: Signup},
  { path: '/home', component: AccountHome},
  { path: '/workoutgen', component: WorkoutGenerator},
  { path: '/workoutpage/:workoutId', component: WorkoutPage},
  { path: '/', component: Login},
];

export default ROUTES;
