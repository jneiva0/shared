import { Center, CenterProps, Spinner, SpinnerProps } from '@chakra-ui/react'
import React, { FC } from 'react'

export type LoadingProps = CenterProps & {
  spinnerProps?: SpinnerProps
}

export const Loading: FC<LoadingProps> = ({ spinnerProps, ...props }) => (
  <Center {...props}>
    <Spinner {...spinnerProps} />
  </Center>
)
