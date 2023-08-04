export function SkeletonItem() {
  return (
    <article className="max-w-40 relative isolate flex max-h-44 flex-col justify-end overflow-hidden rounded-2xl border border-transparent bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </article>
  )
}
