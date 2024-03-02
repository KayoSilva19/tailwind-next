import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'>

export function Root({ ...rest }: RootProps) {
  return <div {...rest} />
}
