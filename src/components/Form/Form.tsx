import {
  Button,
  ButtonProps,
  chakra,
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputProps,
} from '@chakra-ui/react'
import { Form, useField, useFormikContext } from 'formik'
import React from 'react'
import { BaseFormControlProps, FormControl } from './FormControl'

export const ChakraForm = chakra(Form)

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

export const SubmitButton = (props: ButtonProps) => {
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
