/**
 * AuthInterface
 *
 * Defines the shape of the authentication payload.
 *
 * Used by:
 * - AuthService
 * - AuthController
 *
 * Example:
 * {
 *   "email": "user@example.com",
 *   "password": "123456"
 * }
 */
export interface AuthInterface {
    // User email
    email: string;

    // Plain text password (to be hashed and validated)
    password: string;
}
