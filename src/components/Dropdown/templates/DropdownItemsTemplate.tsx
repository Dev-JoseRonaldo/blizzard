import { Menu } from '@headlessui/react'
import { IconGame, IconGameProps } from '../../IconGame'

export const DropdownItemsTemplate = (DropdownItem: IconGameProps) => {
  const { id, iconUrl, alt, width, height, name } = DropdownItem
  return (
    <Menu.Item as="a" href="/" key={id} className="">
      <IconGame
        id={id}
        alt={alt}
        iconUrl={iconUrl}
        width={width}
        height={height}
        name={name}
      />
    </Menu.Item>
  )
}
