import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconGame } from '.'

export default {
  title: 'Components/IconGame',
  component: IconGame,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
  args: {
    iconUrl:
      'https://res.cloudinary.com/devjoseronaldo/image/upload/v1672246117/blizzard/games/sport1-lg_zjwsp4.png',
    alt: 'Texto alternativo',
    width: 174,
    height: 149,
  },
} as ComponentMeta<typeof IconGame>

const Template: ComponentStory<typeof IconGame> = (args) => (
  <IconGame {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const WithText = Template.bind({})
WithText.args = {
  name: 'Hearthstone® masters',
}
