import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Loading } from './Loading'

export default {
  title: 'Components/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

export const FullPageLoading: ComponentStory<typeof Loading> = () => (
  <Loading w='100vw' h='100vh' />
)
