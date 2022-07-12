import React from 'react';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {Input} from '../molecules';

const WebService = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = () => {
    console.log('saved');
  };

  return (
    <ScreenTemplate>
      <Input
        name="amount"
        label="Monto"
        placeholder="Ingresa el monto a transferir"
        keyboard="numeric"
        control={control}
      />
      <Input
        name="memo"
        label="Mensaje"
        placeholder="Ingresa el mensaje"
        control={control}
      />
      <Button
        label="Enviar"
        action={handleSubmit(onSubmit)}
        disabled={!isDirty || !isValid}
      />
    </ScreenTemplate>
  );
};

export {WebService};
