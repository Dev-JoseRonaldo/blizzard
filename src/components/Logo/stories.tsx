import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zlyQv2ffkdMBWxKOZrGf5b/BR-Challenges?node-id=7602%3A656&t=qi8NhOV1Gx7M7cAK-4',
    },
  },
  args: {},
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {}

export const CustomSize = Template.bind({})
CustomSize.args = {
  width: 174,
  height: 80,
}
export const Animated = Template.bind({})
Animated.args = {
  animated: true,
}

export const DisableLink = Template.bind({})
DisableLink.args = {
  disableLink: true,
}
