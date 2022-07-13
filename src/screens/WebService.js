import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useForm} from 'react-hook-form';

import {ScreenTemplate, Button} from '../atoms';
import {Input} from '../molecules';
import useResource from '../hooks/useResource';
import {SuccessModal} from '../organisms';
import {colors} from '../styles/base.js';

const WebService = () => {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
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
      setIsSuccessModalVisible(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScreenTemplate>
      <SuccessModal
        isVisible={isSuccessModalVisible}
        onSubmit={() => setIsSuccessModalVisible(false)}
        onClose={() => setIsSuccessModalVisible(false)}
        title="¡Felicidades!"
        text="Petición realizada exitosamente"
        btnLabel="Aceptar"
      />
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
      {isLoading ? (
        <ActivityIndicator size={40} color={colors.primary} />
      ) : (
        <Button
          label="Enviar"
          action={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
        />
      )}
    </ScreenTemplate>
  );
};

export {WebService};
