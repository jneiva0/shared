import {
  Button,
  ButtonProps,
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputProps,
} from '@chakra-ui/react'
import { useField, useFormikContext } from 'formik'
import React, { FC } from 'react'
import { BaseFormControlProps, FormControl } from './FormControl'

// export const ChakraForm = chakra(Form)

export const NumeroField = ({
  name,
  label,
  ...props
}: BaseFormControlProps & NumberInputProps) => {
  const [field, meta] = useField<number>(name)

  return (
    <FormControl name={name} label={label} {...props}>
      {label && <FormLabel>{label} </FormLabel>}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
      <NumberInput {...props} id={field.name}>
        <NumberInputField
          {...field}
          placeholder={props.placeholder}
          type='number'
        />
      </NumberInput>
    </FormControl>
  )
}

export const SubmitButton: FC<ButtonProps> = props => {
  const { isSubmitting, dirty, isValid } = useFormikContext()

  return (
    <Button
      colorScheme='blue'
      type='submit'
      isDisabled={!dirty || !isValid}
      isLoading={isSubmitting}
      {...props}
    >
      {props.children}
    </Button>
  )
}
