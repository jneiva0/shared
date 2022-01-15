import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  BoxProps,
} from '@chakra-ui/react'
import React, { FC } from 'react'

export type AlertaErroProps = {
  titulo?: string
  descricao?: string
} & BoxProps

export const AlertaErro: FC<AlertaErroProps> = ({
  titulo,
  descricao,
  ...props
}) => {
  return (
    <Alert
      status='error'
      variant='subtle'
      flexDirection='column'
      justifyContent='center'
      textAlign='center'
      rounded={8}
      padding={8}
      {...props}
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        {titulo}
      </AlertTitle>
      <AlertDescription maxWidth='sm'>{descricao}</AlertDescription>
    </Alert>
  )
}
