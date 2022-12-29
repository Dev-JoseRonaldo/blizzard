import Image from 'next/image'

import { ContainerStyle, ImageStyle, TextStyle } from './styles'

export interface IconGameProps {
  iconUrl: string
  alt: string
  width: number
  height: number
  name?: string
}

export const IconGame = ({
  iconUrl,
  alt,
  width,
  height,
  name,
}: IconGameProps) => {
  return (
    <figure className={`${ContainerStyle} ${name && 'cursor-pointer'}`}>
      <Image
        src={iconUrl}
        alt={alt}
        width={width}
        height={height}
        className={name ? ImageStyle : ''}
      />
      {name && <figcaption className={TextStyle}>{name}</figcaption>}
    </figure>
  )
}
