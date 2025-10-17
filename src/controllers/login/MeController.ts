/**
 * Me Controller (users/me endpoint)
 *
 * Returns the currently authenticated user.
 *
 * Behavior:
 * - Requires AuthMiddleware to run before this controller
 * - Responds with 401 if no valid JWT or req.user not set
 * - Responds with user info if authenticated
 *
 * Example:
 * GET /me
 * Headers: Authorization: Bearer <token>
 *
 * Response 200:
 * { "user": { "id": "...", "email": "...", "role": "admin" } }
 */

import { Request, Response } from "express";

// MeController class
export class MeController {
    async handle(req: Request, res: Response) {
        // Check if req.user is set by AuthMiddleware
        if (!req.user) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        // Return the authenticated user's information
        return res.status(200).json({ user: req.user });
    }
}
