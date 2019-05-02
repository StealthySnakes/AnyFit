import Login from './components/Login';
import Signup from './components/SignupPage/Signup';
import WorkoutGenerator from './components/WorkoutGenerator';
import WorkoutPage from './components/WorkoutPage';
import WorkoutPageEdit from './components/WorkoutPageEdit';
import StopWatch from './components/StopWatch';
import AccountHome from './components/accountPage/AccountHome';


export const ROUTES = [
  { path: '/login', component: Login},
  { path: '/signup', component: Signup},
  { path: '/home', component: AccountHome},
  { path: '/workoutgen', component: WorkoutGenerator},
  { path: '/workoutpage/:workoutId', component: WorkoutPage},
  { path: '/workoutedit/:workoutId', component: WorkoutPageEdit},
  { path: '/', component: Login},
];

export default ROUTES;
