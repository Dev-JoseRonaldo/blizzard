import { render, screen, fireEvent } from '@testing-library/react'

import { Dropdown, DropdownProps } from '.'
import { IconSportsMock } from '../IconGame/mock'
import { FooterDropdownSportsMock } from './mock'

const { getByRole, queryByRole, getByText, queryByText } = screen

const data: DropdownProps = {
  items: IconSportsMock,
  type: 'sports',
  name: 'sports',
  FooterItems: FooterDropdownSportsMock,
}

describe('<Dropdown />', () => {
  it('should render by default', () => {
    render(<Dropdown {...data} />)

    const dropdownButton = getByRole('button', { name: 'sports' })
    const imgItem = queryByRole('img', { name: data.items[0].alt })
    const footerTextItem = queryByText(data.FooterItems[0].text)

    expect(dropdownButton).toBeInTheDocument()
    expect(footerTextItem).not.toBeInTheDocument()
    expect(imgItem).not.toBeInTheDocument()
  })

  it('should render Dropdown content', async () => {
    render(<Dropdown {...data} />)

    const dropdownButton = getByRole('button', { name: 'sports' })

    fireEvent.click(dropdownButton)

    for (let i = 0; i < data.items.length; i++) {
      const imgItem = queryByRole('img', { name: data.items[i].alt })

      expect(imgItem).toBeInTheDocument()
      expect(imgItem).toHaveAttribute('alt', data.items[i].alt)
    }

    for (let i = 0; i < data.FooterItems.length; i++) {
      const footerTextItem = getByText(data.FooterItems[i].text)

      expect(footerTextItem).toBeInTheDocument()
    }
  })

  it('should match snapshot', () => {
    const { container } = render(<Dropdown {...data} />)

    expect(container).toMatchSnapshot()
  })
})
