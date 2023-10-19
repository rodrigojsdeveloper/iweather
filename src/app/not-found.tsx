export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-backgroundWeather bg-cover bg-center bg-no-repeat p-12 max-sm:px-8">
      <div className="flex h-49 w-full items-center justify-center gap-4">
        <p className="text-heading-md font-medium">404</p>
        <hr className="h-49 w-px bg-gray-500" />
        <p className="text-t-sm">This page could not be found.</p>
      </div>
    </div>
  )
}
