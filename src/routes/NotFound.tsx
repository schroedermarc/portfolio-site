import { Link, isRouteErrorResponse, useRouteError } from 'react-router'

export default function NotFound() {
  const error = useRouteError()
  const notFound = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-site text-white">
      <h1 className="text-3xl font-semibold">{notFound ? 'Page not found' : 'Something went wrong'}</h1>
      <Link to="/" className="underline">
        Back to projects
      </Link>
    </div>
  )
}
