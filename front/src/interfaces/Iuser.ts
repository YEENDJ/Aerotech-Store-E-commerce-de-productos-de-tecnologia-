export interface userSessionInterface {
  login: string
  token: string
  user: {
    name: string
    email: string
    address: string
    phone: string
    orders: []
    role: string
    id: number
  }
}
