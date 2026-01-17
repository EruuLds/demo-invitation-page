import './App.css'
import MainHeader from './components/section-contents/MainHeader'
import Navbar from './components/prefabs/ui/Navbar'
import Section from './components/prefabs/ui/Section'
import Invitation from './components/section-contents/Invitation'
import Itinerary from './components/section-contents/Itinerary'
import VenueInfo from './components/section-contents/VenueInfo'
import AttendanceForm from './components/section-contents/AttendanceForm'

function App() {

  return (
    <>
      <MainHeader></MainHeader>

      <Navbar></Navbar>

      <main>
        <Section headingText={'Invitación'} id={'invitation'}>
          <Invitation />
        </Section>

        <Section headingText={'¿Dónde y Cuándo?'} id={'venueInfo'} >
          <VenueInfo />
        </Section>

        <Section headingText={'Itinerario'} id={'itinerary'}>
          <Itinerary></Itinerary>
        </Section>

        <Section headingText={'Confirmar Asistencia'} id={'attendance'} >
          <p className='text-center mb-6'>Tu presencia es muy significativa para nosotros. Si puedes acompañarnos, por favor, <span className='font-semibold'>confirma tu asistencia antes del 30 de septiembre</span>.</p>
          <AttendanceForm />
        </Section>
      </main>
      
    </>
  )
}

export default App
