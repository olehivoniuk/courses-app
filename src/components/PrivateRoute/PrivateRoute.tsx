import React, { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthenticated } from 'src/helpers/isAuth'
import { useAppSelector } from 'src/hooks/useAppDispatch'

interface PrivateRouteProps {
  children?: ReactNode
  roleRequired?: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  roleRequired,
}) => {
  const location = useLocation()
  const { role } = useAppSelector((state) => state.user)

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  if (roleRequired && role !== roleRequired) {
    return <Navigate to='/' />
  }

  return <>{children}</>
}

export default PrivateRoute
