import crypto from 'crypto'
import bcrypt from 'bcryptjs'

export function generateApiKey() {
	return crypto.randomBytes(32).toString('hex')
}

export async function hashApiKey(apiKey: string) {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(apiKey, salt);
}
