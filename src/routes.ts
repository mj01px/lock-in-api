/**
 * Application Routes
 *
 * Defines all API endpoints and applies authentication / authorization rules.
 *
 * Structure:
 * - Public routes (login, register, logout, /me)
 * - Protected routes (require valid JWT)
 * - Role-based access using RequireRole middleware
 *
 * Example:
 * POST /login           → public login route (sets httpOnly cookie)
 * GET /users/me         → authenticated route (returns current user)
 * POST /profiles        → admin-only route (create profile)
 */

import { Router } from "express";

// ---------- CONTROLLERS ----------

// Profiles
import { CreateProfilesController } from "./controllers/profiles/CreateProfilesController";
import { ListProfilesController } from "./controllers/profiles/ListProfilesController";
import { UpdateProfilesController } from "./controllers/profiles/UpdateProfilesController";
import { DeleteProfilesController } from "./controllers/profiles/DeleteProfilesController";

// Users
import { CreateUsersController } from "./controllers/users/CreateUsersController";
import { ListUsersController } from "./controllers/users/ListUsersController";
import { UpdateUsersController } from "./controllers/users/UpdateUsersController";
import { DeleteUsersController } from "./controllers/users/DeleteUsersController";

// Auth
import { AuthController } from "./controllers/auth/AuthController";
import { MeController } from "./controllers/login/MeController";
import { LogoutController } from "./controllers/login/LogoutController";

// ---------- MIDDLEWARES ----------
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import { RequireRole } from "./middleware/RequireRole";

const routes = Router();

// ---------- PUBLIC ROUTES ----------

const meController = new MeController();
const authController = new AuthController();
const createUserController = new CreateUsersController();
const logoutController = new LogoutController();

// Login → sets httpOnly cookie
routes.post("/login", authController.handle);

// Register new user (open route, could later be restricted to admins)
routes.post("/users", createUserController.handle);

// Check if cookie/auth works and get logged user info
routes.get("/users/me", AuthMiddleware, meController.handle);

// Logout → clears auth cookie
routes.post("/logout", logoutController.handle);

// ---------- PROTECTED ROUTES (require authentication) ----------
routes.use(AuthMiddleware);

// ---------- PROFILE ROUTES ----------
const createProfileController = new CreateProfilesController();
const listProfileController = new ListProfilesController();
const updateProfileController = new UpdateProfilesController();
const deleteProfileController = new DeleteProfilesController();

routes.get("/profiles", RequireRole("admin", "user"), listProfileController.handle);
routes.get("/profiles/:id", RequireRole("admin", "user"), listProfileController.findByID);

routes.post("/profiles", RequireRole("admin"), createProfileController.handle);
routes.put("/profiles/:id", RequireRole("admin"), updateProfileController.handle);
routes.delete("/profiles/:id", RequireRole("admin"), deleteProfileController.handle);

// ---------- USER ROUTES ----------
const listUserController = new ListUsersController();
const updateUserController = new UpdateUsersController();
const deleteUserController = new DeleteUsersController();

routes.get("/users", RequireRole("admin", "user"), listUserController.handle);
routes.get("/users/:id", RequireRole("admin", "user"), listUserController.findByID);

routes.put("/users/:id", RequireRole("admin"), updateUserController.handle);
routes.delete("/users/:id", RequireRole("admin"), deleteUserController.handle);

export { routes };
