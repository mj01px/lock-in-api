/**
 * Type augmentation for Express Request object.
 *
 * This file extends the default Express Request interface
 * to include a `user` property, which is typically injected
 * by the authentication middleware after verifying the JWT.
 *
 * Why:
 * - Fixes TS errors like "Property 'user' does not exist on type 'Request'"
 * - Enables autocomplete and strong typing for `req.user`
 *
 * Example usage:
 * ```ts
 * // Inside AuthMiddleware
 * req.user = { id, email, role };
 *
 * // Later in a controller
 * console.log(req.user?.id);
 * ```
 */

declare namespace Express {
    export interface Request {
        user?: {
            id: string;
            email: string;
            role: "admin" | "user";
        };
    }
}
