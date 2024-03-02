import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control({ ...rest }: ControlProps) {
  return <input type="file" className="sr-only" {...rest} />
}
