import Button from './ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDataContext } from '../../hooks/useDataContext';
import { useHandleModals } from '../../hooks/useHandleModals';
import Dropdown from './ui/Dropdown';

export default function AttendanceForm() {
  const { guestData, updateGuest, invitationId } = useDataContext();
  const handleModals = useHandleModals()
  
  const defaultData = { status: guestData.status, confirmedPasses: guestData.passes };
  const { register, handleSubmit, watch, setValue, reset } = useForm({defaultValues: {...defaultData}});
  const confirmedPassesValue = watch('confirmedPasses');
  const statusValue = watch('status');

  const decrementPasses = () => {
    setValue("confirmedPasses", Math.max(1, confirmedPassesValue - 1));
  };
  
  const incrementPasses = () => {
    setValue("confirmedPasses", Math.min(guestData.passes, confirmedPassesValue + 1));
  };
  
  const submitData = (data) => {
    if (!invitationId) return;

    updateGuest(
      invitationId, 
      data,
      () => alert('Se produjo un error al enviar tu respuesta. Inténtalo nuevamente.'),
      () => handleModals('clear')
    )
  };

  useEffect(() => {
    if (!guestData) return;

    reset({
      status: guestData.status != 'pending' ? guestData.status : 'confirmed',
      confirmedPasses: guestData.confirmedPasses > 0 ? guestData.confirmedPasses : guestData.passes
    });
  }, [guestData]);

  return (
    <>
      <form
        id="attendanceForm"
        method="post"
        onSubmit={handleSubmit(submitData)}
      >
        <div className="">
          <div>
            <p className="mb-1 text-center font-semibold" htmlFor="confirmation">
              ¿Asistirás?
            </p>
            <div className="flex gap-4 justify-center">
              <div className="flex items-center gap-2">
                <p>Sí</p>
                <input
                  type="radio"
                  value="confirmed"
                  {...register("status")}
                />
              </div>
              <div className="flex items-center gap-2">
                <p>No</p>
                <input
                  type="radio"
                  value="declined"
                  {...register("status")}
                />
              </div>
            </div>
          </div>

          <Dropdown isOpen={statusValue === 'confirmed'}>
            <div className='pt-2'>
              <p className="mb-1 text-center font-semibold" htmlFor="confirmedPasses">
                ¿Cuántos asisten?
              </p>
              <div className="flex gap-2 items-center justify-center">
                <Button color={"primary"} onClick={decrementPasses} small >
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <input
                  className="shrink"
                  type="number"
                  readOnly
                  disabled={statusValue === 'declined'}
                  {...register("confirmedPasses", { valueAsNumber: true })}
                />
                <Button color={"primary"} onClick={incrementPasses} small >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </div>
            </div>
            
          </Dropdown>
        </div>
      </form>
    </>
  );
}
