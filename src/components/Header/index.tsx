'use client'
import clsx from "clsx";

export function Header() {
  return (
    <h1 className={clsx(
      'text-3xl font-bold text-blue-30 hover:bg-red-300 hover:text-blog transition-colors duration-500'
      )}
      onClick={() => alert(123)}
    >
      alou to aqui
    </h1>
 )
}