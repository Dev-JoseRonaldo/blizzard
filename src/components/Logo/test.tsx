import { render, screen } from '@testing-library/react'

import { Logo } from '.'

const { getByLabelText, getByRole, queryByRole } = screen

describe('<Logo />', () => {
  it('should render by default', () => {
    const { container } = render(<Logo />)

    const logo = getByLabelText('blizzard')
    const path = container.querySelector('svg > path:nth-child(1)')

    const link = getByRole('link', { name: 'blizzard' })

    expect(logo).toHaveStyle({
      width: 87,
      height: 40,
    })

    expect(link).toHaveAttribute('href', '#')
    expect(path).not.toHaveAttribute('stroke-dashoffset', '0px')
  })

  it('should render custom size', () => {
    render(<Logo width={174} height={80} />)

    const logo = getByLabelText('blizzard')

    expect(logo).toHaveStyle({
      width: 174,
      height: 80,
    })
  })

  it('should render with animation', () => {
    const { container } = render(<Logo animated />)

    const path = container.querySelector('svg > path:nth-child(1)')

    expect(path).toHaveAttribute('stroke-dashoffset', '0px')
  })

  it('should render with disable link', () => {
    render(<Logo disableLink />)

    const link = queryByRole('link', { name: 'blizzard' })

    expect(link).not.toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(<Logo width={87} height={40} />)

    expect(container).toMatchSnapshot()
  })
})
