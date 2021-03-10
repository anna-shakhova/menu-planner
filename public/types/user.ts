export interface User {
  login?: string,
  email: string,
  password: string,
}

interface AuthError {
  email?: string,
  password?: string,
  login?: string,
}

export interface AuthResponse {
  session: boolean,
  error?: AuthError,
  login?: string,
}
