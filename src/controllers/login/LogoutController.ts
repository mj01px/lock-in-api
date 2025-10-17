/**
 * LogoutController
 *
 * Handles user logout by clearing the authentication cookie.
 *
 * Behavior:
 * - Reads cookie configuration from environment variables
 * - Calls res.clearCookie() to remove the JWT cookie from the browser
 * - Responds with 200 OK and a confirmation message
 *
 * Notes:
 * - The cookie options must match those used when setting it (AuthController)
 * - Does not invalidate the JWT on the server (JWT is stateless)
 * - Recommended to use POST /logout for security (avoid CSRF on GET)
 *
 * Example:
 * POST /logout
 * Response 200:
 * { "message": "Logged out" }
 */

import { Request, Response } from "express";

export class LogoutController {
    async handle(req: Request, res: Response) {
        // Get cookie name from .env or use default
        const name = process.env.COOKIE_NAME || "auth";

        // Check if HTTPS is required
        const secure = String(process.env.COOKIE_SECURE || "false") === "true";

        // Cookie SameSite policy
        const sameSite = (process.env.COOKIE_SAMESITE || "lax") as
            | "lax"
            | "strict"
            | "none";

        // Cookie domain (undefined for localhost)
        const domain = process.env.COOKIE_DOMAIN || undefined;

        // Clear the auth cookie
        // Options must match the ones used when setting the cookie
        res.clearCookie(name, {
            httpOnly: true,
            secure,
            sameSite,
            domain,
            path: "/",
        });

        // Return a success response
        return res.status(200).json({ message: "Logged out" });
    }
}
