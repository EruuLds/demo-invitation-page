import './App.css'
import MainHeader from './components/MainHeader'
import Navbar from './components/Navbar'
import OrnamentalFrame from './components/OrnamentalFrame'
import Section from './components/Section'
import Button from './components/Button'
import ButtonLink from './components/ButtonLink'
import { useDataContext } from './hooks/useDataContext'
import { QRCodeSVG } from 'qrcode.react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDay, faMap, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  const { guestData } = useDataContext();

  return (
    <>
      <MainHeader></MainHeader>
      <Navbar></Navbar>
      <Section headingText={'Invitación'} >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] sm:items-start mb-6">
          <QRCodeSVG value={guestData.id} className="w-full h-full aspect-square bg-white p-4 rounded-[1.5rem]" />
          
          <div className="h-full transparent-panel flex justify-center items-center text-center">
            <OrnamentalFrame>
              <p>A nombre de:</p>
              <p className="mark-primary rounded-lg mb-4 font-medium text-lg">{`${guestData.name} ${guestData.lastName}`}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Pases:</p>
                  <p className="mark-primary rounded-lg font-medium text-lg">{guestData.passes}</p>
                </div>
                <div>
                  <p>Mesa:</p>
                  <p className="mark-primary rounded-lg font-medium text-lg">{guestData.table}</p>
                </div>
              </div>
            </OrnamentalFrame>
          </div>
        </div>
        <div className='transparent-panel'>
          <p className='text-xs text-center'>Este pase QR es tu acceso al evento, y se activará una vez que confirmes tu asistencia en la <a href="" className='link-primary'>última sección.</a></p>
        </div>
      </Section>

      <Section headingText={'¿Dónde y Cuándo?'} id={'date-venue'} >
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='h-full min-h-100 rounded-[1.5rem] bg-[url(/img/venue.jpg)] bg-cover bg-center' />
          <div className='grid gap-6'>
            <div className='transparent-panel'>
              <div className='flex items-center mb-4'>
                <h4 className='me-2'><FontAwesomeIcon icon={faLocationDot}/></h4>
                <h4><span className='italic'>Mansión del Conde</span> - Castillo Santa Rosa</h4>
              </div>
              <p className='mb-4'>Carretera San Roque Km 5, Rancho La Cruz, 36580 Irapuato, Gto.</p>
              <ButtonLink color={'primary'} href={'https://maps.app.goo.gl/QZXzxTRMZSdYyxcXA'}>
                <FontAwesomeIcon icon={faMap} className='me-1'/>
                <span>Abrir en Google Maps</span>
              </ButtonLink>
            </div>
            <div className='transparent-panel'>
              <div className='flex items-center mb-4'>
                <h4 className='me-2'><FontAwesomeIcon icon={faCalendarDay}/></h4>
                <h4>Sábado, 17 de Octubre del 2026</h4>
              </div>
              <p className='mb-2'><span className='font-semibold'>Ceremonia Civil</span> - 15:30 Hrs.</p>
              <p className='mb-4'><span className='font-semibold'>Recepción</span> - 16:00 Hrs.</p>
              <ButtonLink color={'primary'} href={'assets/downloadable/boda-ale-luis.ics'} download >
                <FontAwesomeIcon icon={faCalendarPlus} className='me-1'/>
                <span>Agregar al Calendario</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section headingText={'Itinerario'}>
        <div className='grid grid-cols-[1fr_1.5rem_1fr] gap-x-3'>
          <div className='flex flex-col text-end items-end mb-6'>
            <img className="size-[3rem]" src="img/icons/i-ceremonia.svg" alt="icon"/>
            <h4 className="mb-1">Ceremonia Civil</h4>
            <p>15:30 Hrs.</p>
          </div>
          <div className='flex flex-col'>
            <div className='size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold'>
              <p>1</p>
            </div>
            <div className='flex-1 relative'>
              <div className='vertical-line'></div>
            </div>
          </div>
          <div className='flex flex-col text-start items-start mb-6 me-6'>
            <p className='text-sm'>La ceremonia dará inicio puntual a las 15:30 Hrs. Te pedimos llegar al menos 20 minutos antes para ubicarse con calma.</p>
          </div>

          <div></div>
          <div className='flex flex-col'>
            <div className='size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold'>
              <p>2</p>
            </div>
            <div className='flex-1 relative'>
              <div className='vertical-line'></div>
            </div>
          </div>
          <div className='flex flex-col text-start items-start mb-4'>
            <img class="size-[3rem]" src="/img/icons/i-recepcion.svg" alt="icon"/>
            <h4 className="mb-1">Recepción</h4>
            <p>16:00 Hrs.</p>
          </div>

          <div className='flex flex-col text-end items-end mb-6'>
            <img class="size-[3rem]" src="/img/icons/i-cena.svg" alt="icon"/>
            <h4 className="mb-1">Cena</h4>
            <p>18:00 Hrs.</p>
          </div>
          <div className='flex flex-col'>
            <div className='size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold'>
              <p>1</p>
            </div>
            <div className='flex-1 relative'>
              <div className='vertical-line'></div>
            </div>
          </div>
          <div></div>

          <div></div>
          <div className='flex flex-col'>
            <div className='size-[1.5rem] bg-[var(--color-dark)] rounded-full text-white/75 text-center font-semibold'>
              <p>2</p>
            </div>
            <div className='flex-1 relative'>
              <div className='vertical-line'></div>
            </div>
          </div>
          <div className='flex flex-col text-start items-start mb-4'>
            <img class="size-[3rem]" src="/img/icons/i-fiesta.svg" alt="icon"/>
            <h4 className="mb-1">Vals y Fiesta</h4>
            <p>19:00 Hrs.</p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default App
