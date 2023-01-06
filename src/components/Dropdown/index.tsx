import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { RiArrowDownSLine } from 'react-icons/ri'

import { IconGameProps } from '../IconGame'

import { DropdownItemsTemplate } from './templates/DropdownItemsTemplate'
import { DropdownFooterTemplate } from './templates/DropdownFooterTemplate'

import {
  DropdownGridVariant,
  DropdownItemsContainerStyles,
  DropdwonButtonStyles,
  DropdwonFooterStyles,
} from './styles'

export interface ButtonFooterDropdownProps {
  id?: string
  text: string
  iconUrl: string
  alt: string
  width: number
  height: number
}
export interface DropdownProps {
  items: IconGameProps[]
  type: 'games' | 'sports'
  name: string
  FooterItems: ButtonFooterDropdownProps[]
}

export const Dropdown = ({ items, type, name, FooterItems }: DropdownProps) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className={DropdwonButtonStyles}>
            {name}
            <RiArrowDownSLine
              className={`transition-all ${open ? 'rotate-180' : 'rotate-0'}`}
              fill={open ? '#00AEFF' : 'white'}
              fontSize={24}
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition-all ease duration-500"
            enterFrom=" max-h-0 h-0 opacity-95 pt-0 pb-0"
            enterTo="max-h-[900px] h-max opacity-1 pt-28 pb-36"
            leave="transition-all ease duration-150"
            leaveFrom="opacity-60"
            leaveTo="opacity-0"
          >
            <Menu.Items
              className={`${DropdownItemsContainerStyles} ${DropdownGridVariant[type]}`}
            >
              {items.map(DropdownItemsTemplate)}
              <footer className={DropdwonFooterStyles}>
                {FooterItems.map(DropdownFooterTemplate)}
              </footer>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
