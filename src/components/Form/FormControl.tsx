import {
  FormControl as ChakraFormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/react'
import { useField, useFormikContext } from 'formik'
import React, { FC } from 'react'

export interface BaseFormControlProps extends FormControlProps {
  name: string
  label?: string
  labelProps?: FormLabelProps
  helperText?: string
  helperTextProps?: HelpTextProps
  errorMessageProps?: FormErrorMessageProps
}

export const FormControl: FC<BaseFormControlProps> = (
  props: BaseFormControlProps
) => {
  const {
    children,
    name,
    label,
    labelProps,
    helperText,
    helperTextProps,
    errorMessageProps,
    ...rest
  } = props
  const [, { error, touched }] = useField(name)
  const { isSubmitting } = useFormikContext()

  return (
    <ChakraFormControl
      isDisabled={isSubmitting}
      isInvalid={!!error && touched}
      {...rest}
    >
      {label && (
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
      )}
      {children}
      {error && (
        <FormErrorMessage {...errorMessageProps}>{error}</FormErrorMessage>
      )}
      {helperText && (
        <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
      )}
    </ChakraFormControl>
  )
}
