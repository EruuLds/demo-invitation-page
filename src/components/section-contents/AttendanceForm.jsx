import Button from '../prefabs/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import { DataContext } from '../../contexts/DataContext';
import { useContext, useEffect } from 'react';
import LoadingOverlay from '../prefabs/ui/LoadingOverlay';

export default function AttendanceForm() {
  const { guestData, updateGuest, invitationId, loading } = useContext(DataContext);
  const defaultData = { status: guestData.status, confirmedPasses: guestData.passes };
  
  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({defaultValues: {...defaultData}});
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
      data/*,
      () => alert('Tu respuesta se envió correctamente.'),
      () => alert('Se produjo un error al enviar tu respuesta. Inténtalo nuevamente.')*/
    )
  };

  useEffect(() => {
    if (!guestData) return;

    reset({
      status: guestData.status != 'pending' ? guestData.status : 'confirmed',
      confirmedPasses: guestData.confirmedPasses > 0 ? guestData.confirmedPasses : guestData.passes
    });
  }, [guestData]);

  useEffect(() => {
    console.log(statusValue);
  }, [statusValue]);

  return (
    <>
      <div className="transparent-panel overflow-hidden relative">
        <form
          id="attendanceForm"
          method="post"
          onSubmit={handleSubmit(submitData)}
        >
          <div className="">
            <div>
              <label
                className="block mb-1 text-center font-semibold"
                htmlFor="confirmation"
              >
                ¿Asistirás?
              </label>
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

            <div className={`transition-all duration-300 overflow-y-hidden mb-4 ${(statusValue === 'confirmed' && guestData.passes > 1) ? 'max-h-21 opacity-100' : 'max-h-0 opacity-0'}`}>
              <label
                className="block mb-1 text-center font-semibold mt-4"
                htmlFor="confirmedPasses"
              >
                ¿Cuántos asisten?
              </label>
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
            <div className="flex justify-center">
              <Button color={"primary"} targetForm={"attendanceForm"} >
                <FontAwesomeIcon icon={faPaperPlane} className="me-1" />
                <span>Enviar respuesta</span>
              </Button>
            </div>
          </div>
        </form>

        {loading && <LoadingOverlay loadingMessage={'Enviando respuesta'}/>}
      </div>
    </>
  );
}
