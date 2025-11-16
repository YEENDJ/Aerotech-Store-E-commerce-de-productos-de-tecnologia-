import { useAuth } from '@/contexts/AuthContext'
import React from 'react'

const DahsboardPage = () => {
  const {dataUser} = useAuth();

  return (
    <div>esta es la dashboard</div>
  )
}

export default DahsboardPage