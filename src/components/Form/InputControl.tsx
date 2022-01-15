import { forwardRef, Input, InputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import React, { FC, ForwardedRef } from 'react'
import { BaseFormControlProps, FormControl } from './FormControl'

export const InputControl: FC<InputControlProps> = forwardRef(
  (props: InputControlProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, label, inputProps, ...rest } = props
    const [field] = useField(name)

    return (
      <FormControl name={name} label={label} {...rest}>
        <Input {...field} id={name} {...inputProps} ref={ref} />
      </FormControl>
    )
  }
)

export type InputControlProps = BaseFormControlProps & {
  inputProps?: InputProps
}
