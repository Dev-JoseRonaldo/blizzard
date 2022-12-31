import { render, screen } from '@testing-library/react'

import { Button } from '.'

const { getByRole } = screen

describe('<Button />', () => {
  it('should render by default', () => {
    render(<Button>Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('py-3.5 px-8')
    expect(component).toHaveClass('bg-primary hover:bg-blue-600')
  })

  it('should render with custom class', () => {
    render(<Button className="uppercase">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('uppercase')
  })

  it('should render with correct sizes', () => {
    const { rerender } = render(<Button size="small">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass('w-[7.2rem] h-[2.56rem] text-sm font-medium')

    rerender(<Button size="full">Children</Button>)

    expect(component).toHaveClass('py-3.5 w-full')
  })

  it('should render with correct variants', () => {
    const { rerender } = render(<Button variant="secondary">Children</Button>)

    const component = getByRole('button', { name: 'Children' })

    expect(component).toHaveClass(
      'hover:text-black-800 hover:bg-white border-white border-2',
    )

    rerender(<Button variant="tertiary">Children</Button>)

    expect(component).toHaveClass('gap-2.5 py-0 px-0 hover:text-primaryLight')
  })

  it('should match snapshot', () => {
    const { container } = render(<Button>Children</Button>)

    expect(container).toMatchSnapshot()
  })
})
