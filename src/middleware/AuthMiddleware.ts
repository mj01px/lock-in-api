/**
 * AuthMiddleware
 *
 * Middleware that protects routes by validating JWT tokens.
 *
 * Behavior:
 * - Checks for a token in cookies or Authorization header
 * - Verifies the token using JWT_SECRET
 * - Attaches user data (id, email, role) to req.user
 * - Returns 401 if token is missing or invalid
 *
 * Notes:
 * - Works with both cookie-based and header-based authentication
 * - Must be applied before protected routes (e.g., /me, /logout)
 *
 * Example:
 * routes.use(AuthMiddleware);
 */

import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayloadJWT {
    sub: string;
    email: string;
    role: "admin" | "user";
}

export function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // 1) Try to get token from cookies
    const cookieName = process.env.COOKIE_NAME || "auth";
    const cookieToken = req.cookies?.[cookieName];

    // 2) Fallback: try Authorization header (Bearer <token>)
    const header = req.headers.authorization;
    const headerToken = header?.startsWith("Bearer ")
        ? header.split(" ")[1]
        : undefined;

    // Use whichever token is found
    const token = cookieToken || headerToken;
    if (!token) return res.status(401).json({ message: "Token missing" });

    // Get JWT secret
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).json({ message: "Server misconfiguration" });
    }

    try {
        // Verify token and extract payload
        const { sub, email, role } = verify(token, secret) as PayloadJWT;

        // Attach user info to request
        req.user = { id: sub, email, role };

        // Continue to next middleware or controller
        return next();
    } catch {
        // Invalid or expired token
        return res.status(401).json({ message: "Invalid token" });
    }
}
