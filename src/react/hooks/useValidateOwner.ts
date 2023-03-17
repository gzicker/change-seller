import { useEffect, useState } from 'react'

export const UseGetCurrentUser = async () => {
  const user = await fetch('/api/vtexid/pub/authenticated/user')
  const dataUser = await user.json()

  if (dataUser) {
    return dataUser
  }

  throw new Error('Invalid response from server')
}

export const UseGetRole = async (userID: string) => {
  let isOwner = false
  const response = await fetch(`/api/license-manager/users/${userID}/roles`)

  const dataUser = await response.json()

  if (dataUser.length === 0) {
    isOwner = true
  } else {
    for (let index = 0; index < dataUser.length; index++) {
      const element = dataUser[index]

      if (element.id === 1 || element?.name === 'Fulfillment admin') {
        isOwner = true
        break
      }
    }
  }

  return isOwner
}

const useValidateOwner = () => {
  const [owner, setOwner] = useState(false)
  const [message, setMessage] = useState('')

  const getRole = async (userID: string) => {
    await UseGetRole(userID).then((data: any) => {
      if (!data) setMessage('No tienes permisos para acceder a esta sección')
      setOwner(data)
    })
  }

  const getCurrentUser = async () => {
    UseGetCurrentUser().then((data: any) => {
      getRole(data.userId)
    })
  }

  const getInitalData = () => {
    getCurrentUser()
  }

  useEffect(() => {
    getInitalData()
  }, [])

  return {
    owner,
    message,
  }
}

export default useValidateOwner
