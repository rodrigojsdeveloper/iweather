export default function NotFound() {
  return (
    <div className="bg-background-weather bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center p-12 max-sm:px-8">
      <div className="w-full h-49 flex justify-center items-center gap-4">
        <p className="font-medium text-heading-md">404</p>
        <hr className="w-px h-49 bg-gray-500" />
        <p className="text-t-sm">This page could not be found.</p>
      </div>
    </div>
  );
}
