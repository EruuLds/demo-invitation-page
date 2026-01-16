import Button from '../prefabs/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import { DataContext } from '../../contexts/DataContext';
import { useContext, useEffect } from 'react';

export default function AttendanceForm() {
  const { guestData, updateGuest, invitationId } = useContext(DataContext);
  const defaultData = { confirmation: guestData.confirmation, confirmedPasses: guestData.passes };
  
  const { register, handleSubmit, watch, setValue, reset, formState: { errors, isDirty } } = useForm({defaultValues: {...defaultData}});
  const confirmedPassesValue = watch('confirmedPasses');
  const confirmationValue = watch('confirmation');

  const decrementPasses = () => {
    setValue("confirmedPasses", Math.max(1, confirmedPassesValue - 1), { shouldDirty: true });
  };
  
  const incrementPasses = () => {
    setValue("confirmedPasses", Math.min(guestData.passes, confirmedPassesValue + 1), { shouldDirty: true });
  };
  
  const submitData = (data) => {
    if (!invitationId) return;
    
    const payload = {
      ...data,
      confirmation: data.confirmation === "true",
    };

    updateGuest(
      invitationId, 
      payload,
      () => alert('Tu respuesta se envió correctamente.'),
      () => alert('Se produjo un error al enviar tu respuesta. Inténtalo nuevamente.')
    )
    console.log(data);
  };

  useEffect(() => {
    if (!guestData) return;

    reset({
      confirmation: guestData.confirmation ?? true,
      confirmedPasses: guestData.confirmedPasses ?? guestData.passes,
    });
  }, [guestData]);

  useEffect(() => {
    console.log(confirmationValue);
  }, [confirmationValue]);

  return (
    <div className="transparent-panel">
      <form
        id="attendanceForm"
        method="post"
        onSubmit={handleSubmit(submitData)}
      >
        <div className="grid gap-4">
          <div>
            <label
              className="block mb-1 text-center font-semibold"
              htmlFor="confirmation"
            >
              ¿Asistirás?
            </label>
            <div className="flex gap-4 justify-center">
              <div className="flex items-center gap-2">
                <p>No</p>
                <input
                  type="radio"
                  value="false"
                  {...register("confirmation", {
                    setValueAs: (v) => v === "true",
                  })}
                />
              </div>
              <div className="flex items-center gap-2">
                <p>Sí</p>
                <input
                  type="radio"
                  value="true"
                  {...register("confirmation", {
                    setValueAs: (v) => v === "true",
                  })}
                />
              </div>
            </div>
          </div>
          {guestData.passes > 1 && 
            <div>
              <label
                className="block mb-1 text-center font-semibold"
                htmlFor="confirmedPasses"
              >
                ¿Cuántos asisten?
              </label>
              <div className="flex gap-2 items-center justify-center">
                <Button color={"primary"} onClick={decrementPasses}>
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <input
                  className="shrink"
                  type="number"
                  readOnly
                  {...register("confirmedPasses", { valueAsNumber: true })}
                />
                <Button color={"primary"} onClick={incrementPasses}>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </div>
            </div>
          }
          <div className="flex justify-center">
            <Button color={"primary"} targetForm={"attendanceForm"}>
              <FontAwesomeIcon icon={faPaperPlane} className="me-1" />
              <span>Enviar</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
