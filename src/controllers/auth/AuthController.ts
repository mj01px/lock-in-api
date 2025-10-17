/**
 * AuthController
 *
 * Handles user authentication (login).
 *
 * Responsibilities:
 * - Receives email and password from request body
 * - Delegates credential validation to AuthService
 * - Sets JWT token as an httpOnly cookie
 *
 * Env vars:
 *  - COOKIE_NAME, COOKIE_MAX_AGE_MS, COOKIE_SECURE, COOKIE_SAMESITE, COOKIE_DOMAIN
 *
 * Notes:
 * - Does not return the token in JSON for security reasons
 * - Cookie is configured to be httpOnly (prevents XSS)
 *
 * Example:
 * POST /login
 * { "email": "user@example.com", "password": "123456" }
 *
 * Response:
 * 200 OK + httpOnly cookie
 */

import { Request, Response } from "express";
import { AuthService } from "../../services/auth/AuthService";

// controller class
export class AuthController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        // delegate to service
        const service = new AuthService();
        const { token } = await service.execute({ email, password });

        // set cookie with token
        const name = process.env.COOKIE_NAME || "auth";
        const maxAge =
            Number(process.env.COOKIE_MAX_AGE_MS || 24 * 60 * 60 * 1000);
        const secure = String(process.env.COOKIE_SECURE || "false") === "true";
        const sameSite = (process.env.COOKIE_SAMESITE || "lax") as "lax" | "strict" | "none";
        const domain = process.env.COOKIE_DOMAIN || undefined;

        // set httpOnly cookie
        res.cookie(name, token, {
            httpOnly: true,
            secure,
            sameSite,
            maxAge,
            domain,
            path: "/",
        });

        // respond ok without token in body
        return res.status(200).json({ ok: true });

    }
}
