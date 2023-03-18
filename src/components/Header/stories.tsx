import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from '.'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Header',
}
