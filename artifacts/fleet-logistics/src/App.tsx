import {type ReactNode} from 'react';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {ErrorBoundary} from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import {Route,Switch,useLocation,Router as WouterRouter} from 'wouter';
import {Shell} from './components/Shell';
import {StoreProvider} from './store';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import Drivers from './pages/Drivers';
import {ShipmentDetail,Shipments} from './pages/Shipments';
import RoutesPage from './pages/Routes';
import Reports from './pages/Reports';
import ActivityPage from './pages/Activity';
import SettingsPage from './pages/Settings';

const queryClient=new QueryClient();
function RoutedErrorBoundary({children}:{children:ReactNode}){const [location]=useLocation();return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>}
function Router(){return <StoreProvider><Shell><RoutedErrorBoundary><Switch>
 <Route path="/" component={Dashboard}/>
 <Route path="/dashboard" component={Dashboard}/>
 <Route path="/vehicles" component={Vehicles}/>
 <Route path="/drivers" component={Drivers}/>
 <Route path="/shipments/:id" component={ShipmentDetail}/>
 <Route path="/shipments" component={Shipments}/>
 <Route path="/routes" component={RoutesPage}/>
 <Route path="/reports" component={Reports}/>
 <Route path="/activity" component={ActivityPage}/>
 <Route path="/settings" component={SettingsPage}/>
 <Route component={NotFound}/>
 </Switch></RoutedErrorBoundary></Shell></StoreProvider>}
function App(){return <QueryClientProvider client={queryClient}><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/,'')}><Router/></WouterRouter></QueryClientProvider>}
export default App;
