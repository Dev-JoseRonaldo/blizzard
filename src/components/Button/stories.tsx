import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=608%3A226',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Flexible Size',
  size: 'flexible',
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  size: 'small',
  variant: 'secondary',
}

export const tertiary = Template.bind({})
tertiary.args = {
  children: 'Button',
  size: 'small',
  variant: 'tertiary',
}

export const FixedSmallSize = Template.bind({})
FixedSmallSize.args = {
  children: 'Small Size',
  size: 'small',
  variant: 'primary',
}

export const FullSize = Template.bind({})
FullSize.args = {
  children: 'Full Size',
  size: 'full',
  variant: 'primary',
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  children: 'Button',
  className: 'uppercase',
  size: 'small',
  variant: 'primary',
}
