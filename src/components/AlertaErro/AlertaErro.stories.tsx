import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { AlertaErro } from './AlertaErro'

export default {
  title: 'Components/AlertaErro',
  component: AlertaErro,
} as ComponentMeta<typeof AlertaErro>

const Template: ComponentStory<typeof AlertaErro> = args => (
  <AlertaErro {...args} />
)

export const AlertaErroPadrao = Template.bind({})
AlertaErroPadrao.args = {
  titulo: 'Erro!',
  descricao: 'Descricao do erro',
}
