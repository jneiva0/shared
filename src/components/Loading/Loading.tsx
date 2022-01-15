import { Center, CenterProps, Spinner, SpinnerProps } from '@chakra-ui/react'
import React from 'react'

export type LoadingProps = CenterProps & {
  spinnerProps?: SpinnerProps
}

export const Loading = ({ spinnerProps, ...props }: LoadingProps) => (
  <Center {...props}>
    <Spinner {...spinnerProps} />
  </Center>
)
