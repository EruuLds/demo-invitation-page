import './App.css'
import MainHeader from './components/section-contents/MainHeader'
import Navbar from './components/prefabs/ui/Navbar'
import Section from './components/prefabs/ui/Section'
import Invitation from './components/section-contents/Invitation'
import Itinerary from './components/section-contents/Itinerary'
import VenueInfo from './components/section-contents/VenueInfo'
import PhotoGallery from './components/section-contents/PhotoGallery'
import ModalManager from './components/component-managers/ModalManager'
import RSVP from './components/section-contents/RSVP'
import LoadingOverlay from './components/prefabs/ui/LoadingOverlay'
import Gifts from './components/section-contents/Gifts'
import { useDataContext } from './hooks/useDataContext'
import DressCode from './components/section-contents/DressCode'
import Footer from './components/prefabs/ui/Footer'
import Curtain from './components/prefabs/ornamental/Curtain'
import MusicButton from './components/prefabs/ui/MusicButton'

function App() {
  const { loading, invitationIsOpen, guestData } = useDataContext();

  return (
    <div className={!invitationIsOpen ? 'h-screen overflow-y-hidden' : undefined}>
      <MainHeader/>

      <Navbar/>

      <main>
        <Section headingText={'Invitación'} id={'invitation'}>
          <Invitation />
        </Section>

        <Section headingText={'¿Dónde y Cuándo?'} id={'venueInfo'} >
          <VenueInfo />
        </Section>

        <Section headingText={'Itinerario'} id={'itinerary'}>
          <Itinerary />
        </Section>

        <Section headingText={'Dress Code'} id={'dressCode'}>
          <DressCode />
        </Section>

        <Section id={'photoGallery'}>
          <PhotoGallery />
        </Section>

        <Section headingText={'Regalos'}>
          <Gifts />
        </Section>

        <Section headingText={
          guestData.status === 'confirmed' ? '¡Confirmaste tu asistencia!'
          : guestData.status === 'declined' ? 'Nos indicaste que no asistirás'
          : 'Confirmar Asistencia'
          } id={'attendance'} >
            <RSVP />
            {loading && <LoadingOverlay loadingMessage={'Enviando respuesta'}/>}
        </Section>
      </main>

      <Footer />
      
      <MusicButton/>

      <Curtain />

      <ModalManager/>
    </div>
  )
}

export default App
