import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react'
import { useField, useFormikContext } from 'formik'
import React, { FC } from 'react'
import { BaseFormControlProps, FormControl } from './FormControl'

export type NumberInputControlProps = BaseFormControlProps & {
  numberInputProps?: NumberInputProps
  showStepper?: boolean
  children?: React.ReactNode
}

export const NumberInputControl: FC<NumberInputControlProps> = React.forwardRef(
  (
    props: NumberInputControlProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const {
      name,
      label,
      showStepper = true,
      children,
      numberInputProps,
      ...rest
    } = props
    const [field, { error, touched }] = useField(name)
    const { setFieldValue } = useFormikContext()

    const $setFieldValue = (name: string) => (value: any) =>
      setFieldValue(name, value)

    return (
      <FormControl name={name} label={label} {...rest}>
        <NumberInput
          {...field}
          id={name}
          onChange={$setFieldValue(name)}
          isInvalid={!!error && touched}
          {...numberInputProps}
        >
          <NumberInputField name={name} ref={ref} />
          {showStepper && (
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
          {children}
        </NumberInput>
      </FormControl>
    )
  }
)

NumberInputControl.displayName = 'NumberInputControl'
