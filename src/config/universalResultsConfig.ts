import { StandardCard } from '../components/cards/StandardCard';
import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import { PlansCard } from '../components/cards/PlansCard';
import LocationSection from '../sections/LocationSection';
import { FaqCard } from '../components/cards/FaqCard';
import { MenuCard } from '../components/cards/MenuCard';
import { VideoCard } from '../components/cards/VideoCard';
import { SwitchCard } from '../components/cards/SwitchCard';


export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {

 
  locations: {
    label: 'Locations',
    SectionComponent: LocationSection,
    viewMapButton: true,
    viewAllButton: true,
    cardConfig: {
      CardComponent: LocationCard,
      showOrdinal: false,
    },
  },
  menu_items: {
    label: 'Menu Items',
    viewAllButton: true,
    cardConfig: {
      CardComponent: MenuCard,
      showOrdinal: false
    }
  },

    faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false
    }
  }

}