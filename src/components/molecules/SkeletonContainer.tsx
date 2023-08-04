import { Atom } from '../atoms'

interface ISkeletonContainer {
  count: number
}

export function SkeletonContainer({ count }: ISkeletonContainer) {
  const items = Array.from({ length: count })

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {items.map((_, index) => (
        <Atom.SkeletonItem key={index} />
      ))}
    </ul>
  )
}
