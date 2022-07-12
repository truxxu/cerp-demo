import React from 'react';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {Input} from '../molecules';
import useResource from '../hooks/useResource';

const WebService = () => {
  const [send, isLoading, error, clear] = useResource();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async data => {
    clear();
    reset();
    try {
      const response = await send(
        'http://216.245.223.50:10006/ProcessRest/1?TipoTrn=001&Interface=00440044&Bin=373737',
        {
          'Content-Type': 'application/json;charset=utf-8',
        },
        'POST',
        JSON.stringify({
          Frame: `amount: ${data.amount}, description: ${data.memo}`,
        }),
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
