import Image from 'next/image'
import { ButtonFooterDropdownProps } from '..'
import { Button } from '../../Button'

export const DropdownFooterTemplate = (
  DropdownFooterItem: ButtonFooterDropdownProps,
) => {
  const { id, text, iconUrl, alt, width, height } = DropdownFooterItem
  return (
    <Button variant="tertiary" key={id}>
      <Image src={iconUrl} alt={alt} width={width} height={height} />
      {text}
    </Button>
  )
}
