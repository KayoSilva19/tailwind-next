import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function Prefix({ ...rest }: InputPrefixProps) {
  return <div {...rest}></div>
}

type InputControlProps = ComponentProps<'input'>

export function Control({ ...rest }: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
      placeholder="Search"
      {...rest}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function Root({ ...rest }: InputRootProps) {
  return (
    <div
      className=" mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...rest}
    ></div>
  )
}
