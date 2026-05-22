import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import {
  pageBackground,
  headingClass,
  bodyText,
  mutedText,
  primaryBtn,
} from '../styles/common'

function ErrorBoundary() {
  const { data, status, statusText } = useRouteError();

  return (
    <div className={`${pageBackground} flex flex-col items-center justify-center min-h-screen text-center px-6`}>

      {/* Status code */}
      <h1 className="text-[6rem] font-bold text-[#0066cc] leading-none tracking-tight">
        {status || '404'}
      </h1>

      {/* Status text */}
      <h2 className={`${headingClass} mt-3`}>
        {statusText || 'Page Not Found'}
      </h2>

      {/* Divider */}
      <div className="w-10 h-0.5 bg-[#d2d2d7] rounded-full my-4" />

      {/* Data message */}
      <p className={`${bodyText} max-w-sm text-sm`}>
        {data || "The page you're looking for doesn't exist or something went wrong."}
      </p>

      {/* Meta info */}
      <p className={`${mutedText} mt-2`}>
        Error {status} · {statusText}
      </p>

      {/* Go home */}
      <Link to="/" className={`${primaryBtn} mt-7`}>
        Go Back Home
      </Link>

    </div>
  )
}

export default ErrorBoundary