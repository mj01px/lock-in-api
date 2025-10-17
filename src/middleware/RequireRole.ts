/**
 * RequireRole
 *
 * Middleware for role-based access control.
 *
 * Behavior:
 * - Accepts one or more allowed roles (e.g., "admin", "user")
 * - Checks req.user.role (set by AuthMiddleware)
 * - Allows access if the user’s role is in the allowed list
 * - Returns 403 if the user is missing a role or lacks permission
 *
 * Example:
 * routes.get("/admin", AuthMiddleware, RequireRole("admin"), adminController.handle);
 */

import { Request, Response, NextFunction } from "express";

type Role = "admin" | "user";

interface AuthedRequest extends Request {
    user?: {
        id: string;
        email: string;
        role: Role;
    };
}

export function RequireRole(...allowed: Role[]) {
    return (req: AuthedRequest, res: Response, next: NextFunction) => {
        // Get user role from the authenticated request
        const role = req.user?.role;

        // If no role is found, block access
        if (!role) {
            return res.status(403).json({ message: "Forbidden: no role" });
        }

        // If the user’s role isn’t allowed, block access
        if (!allowed.includes(role)) {
            return res.status(403).json({ message: "Forbidden: insufficient role" });
        }

        // Role is valid → allow access
        return next();
    };
}
