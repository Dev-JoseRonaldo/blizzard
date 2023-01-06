import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Dropdown } from '.'
import { IconSportsMock } from '../IconGame/mock'
import { FooterDropdownSportsMock } from './mock'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zlyQv2ffkdMBWxKOZrGf5b/BR-Challenges?node-id=1%3A554&t=51gou66dFOPu31Gb-4',
    },
  },
  args: {
    items: IconSportsMock,
    type: 'sports',
    name: 'Esports',
    FooterItems: FooterDropdownSportsMock,
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Default = Template.bind({})
Default.args = {}
