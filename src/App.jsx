import './App.css'
import MainHeader from './components/section-contents/MainHeader'
import Navbar from './components/prefabs/ui/Navbar'
import Section from './components/prefabs/ui/Section'
import Invitation from './components/section-contents/Invitation'
import Itinerary from './components/section-contents/Itinerary'
import VenueInfo from './components/section-contents/VenueInfo'
import AttendanceForm from './components/section-contents/AttendanceForm'
import { useDataContext } from './hooks/useDataContext'

function App() {
  const { guestData } = useDataContext();

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

        <Section headingText={
            guestData.status === 'confirmed' ? '¡Confirmaste tu asistencia!'
            : guestData.status === 'declined' ? 'Nos indicaste que no asistirás'
            : 'Confirmar Asistencia'
          } id={'attendance'} >
          
          {guestData.status === 'pending' &&
            <div>
              <p className='text-center mb-6'>Tu presencia es muy significativa para nosotros. Si puedes acompañarnos, por favor, <span className='font-semibold'>confirma tu asistencia antes del 30 de septiembre</span>.</p>
              <AttendanceForm />
            </div>
          }

          {guestData.status === 'confirmed' &&
            <>
              <div className='transparent-panel mb-6 text-center'>
                <h4>¡Qué alegría saber que nos acompañarás!</h4>
                <p className='my-8'>Confirmaste tu asistencia para <span className='mark-primary font-semibold'>{guestData.confirmedPasses} {guestData.confirmedPasses > 1 ? 'personas' : 'persona'}</span></p>
                <p>Estamos muy emocionados de compartir este momento contigo. <span className='font-semibold'>¡Nos vemos pronto!</span></p>
              </div>
            </>
          }

          {guestData.status === 'declined' &&
            <>
              <div className='transparent-panel mb-6 text-center'>
                <h4 className='mb-4'>¡Gracias por avisarnos!</h4>
                <p>Sentiremos tu ausencia, pero entendemos que no siempre es posible asistir.</p>
              </div>
            </>
          }

          {guestData.status !== 'pending' &&
            <div className='transparent-panel text-center'>
              <p className='text-sm'>Si cambias de opinion, puedes <button className='link-primary' onClick={null}>modificar tu respuesta</button> hasta el 30 de septiembre. </p>
            </div>
          }
        </Section>
      </main>
      
    </>
  )
}

export default App
