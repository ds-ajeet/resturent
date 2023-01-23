import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
import LocationsPage from '../pages/LocationsPage'; 
import PlansPage from '../pages/PlansPage';
import VideoPage from '../pages/VideoPage';
import SwitchPage from '../pages/SwitchPage';
import MenuPages from '../pages/Menupages';

export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  {
    path: '/locations',
    page: <LocationsPage verticalKey="locations" />
  },
  {
    path: '/menu_items',
    page: <MenuPages verticalKey='menu_items' />
  },
  // {
  //   path: '/switch',
  //   page: <SwitchPage verticalKey='switch' />
  // },
  // {
  //   path: '/videos',
  //   page: <VideoPage verticalKey='videos' />
  // },
  {
    path: '/faqs',
    page: <FAQsPage verticalKey='faqs'/>
  },
  
];