const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'
export const createOrder = async (products: number[], token: string) => {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    })

    const orders = await res.json()
    return orders
  } catch (error) {
    throw new Error(error as string)
  }
}

export const getAllOrders = async (token: string) => {
  try {
    const res = await fetch(`${API_URL}/users/orders`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    })

    const orders = await res.json()
    return orders
  } catch (error) {
    throw new Error(error as string)
  }
}
