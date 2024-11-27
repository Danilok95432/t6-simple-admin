import { type User } from 'src/types/users'

export type AuthResponse = {
	accessToken: string
	refreshToken: string
	user: User
}
