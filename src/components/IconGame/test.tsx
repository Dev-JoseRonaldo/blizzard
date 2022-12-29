import { render, screen, waitFor } from '@testing-library/react'

import { IconGame } from '.'

const { getByRole, getByText, queryByText } = screen

const data = {
  iconUrl: 'https://res.cloudinary.com/icon.png',
  alt: 'Alternative Text',
  width: 174,
  height: 149,
}

describe('<IconGame />', () => {
  it('should render by default', async () => {
    render(<IconGame {...data} />)

    const name = queryByText('name')
    const icon = getByRole('img', { name: 'Alternative Text' })

    expect(name).not.toBeInTheDocument()
    expect(icon).toBeInTheDocument()

    await waitFor(() => {
      expect(icon).toHaveAttribute(
        'src',
        '/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ficon.png&w=384&q=75',
      )
    })

    expect(icon).toHaveAttribute('alt', 'Alternative Text')
    expect(icon).toHaveStyle({
      width: 174,
      height: 149,
    })
  })

  it('should render with text', async () => {
    render(<IconGame {...data} name="name" />)

    const name = getByText('name')

    expect(name).toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(<IconGame {...data} />)

    expect(container).toMatchSnapshot()
  })
})
