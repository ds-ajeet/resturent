import ResultsCount from '../components/ResultsCount';
import AlternativeVerticals from '../components/AlternativeVerticals';
import AppliedFilters from '../components/AppliedFilters';
import DirectAnswer from '../components/DirectAnswer';
import VerticalResults from '../components/VerticalResults';
import SpellCheck from '../components/SpellCheck';
import LocationBias from '../components/LocationBias';
import usePageSetupEffect from '../hooks/usePageSetupEffect';
import { MenuCard } from '../components/cards/MenuCard';
import Footer from '../components/Footer';

export default function MenuPages({ verticalKey }: {
  verticalKey: string
}) {
  usePageSetupEffect(verticalKey);

  return (
    <>
    {/* <div> */}
      <DirectAnswer />
      <SpellCheck />
      <ResultsCount />
      <AppliedFilters
        hiddenFields={['builtin.entityType']} />
      <AlternativeVerticals
        currentVerticalLabel='Menu Items'
        verticalsConfig={[
          { label: 'Locations', verticalKey: 'locations' },
          { label: 'Menu Items', verticalKey: 'menu_items' },
        ]} />
        <div className='grid grid-cols-2'>
      <VerticalResults   
        CardComponent={MenuCard} />
        </div>
      <LocationBias />
      <Footer/>
    {/* </div> */}
    </>
  )
}