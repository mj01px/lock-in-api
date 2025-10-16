import { Router } from "express";

import { CreateProfilesController } from "./controllers/profiles/CreateProfilesController";
import { ListProfilesController } from "./controllers/profiles/ListProfilesController";
import { UpdateProfilesController } from "./controllers/profiles/UpdateProfilesController";
import { DeleteProfilesController } from "./controllers/profiles/DeleteProfilesController";
import { CreateUsersController } from "./controllers/users/CreateUsersController";
import { ListUsersController } from "./controllers/users/ListUsersController";
import { UpdateUsersController } from "./controllers/users/UpdateUsersController";
import { DeleteUsersController } from "./controllers/users/DeleteUsersController";

const routes = Router()
// Profile
const createProfileController = new CreateProfilesController();
const listProfileController = new ListProfilesController();
const updateProfileController = new UpdateProfilesController();
const deleteProfileController = new DeleteProfilesController();

routes.post("/profiles", createProfileController.handle);
routes.get("/profiles", listProfileController.handle); routes.get("/profiles/:id", listProfileController.findByID);
routes.put("/profiles/:id", updateProfileController.handle);
routes.delete("/profiles/:id", deleteProfileController.handle);

// User

const createUserController = new CreateUsersController();
const listUserController = new ListUsersController();
const updateUserController = new UpdateUsersController();
const deleteUserController = new DeleteUsersController();

routes.post("/users", createUserController.handle);
routes.get("/users", listUserController.handle);
routes.get("/users/:id", listUserController.findByID);
routes.put("/users/:id", updateUserController.handle);
routes.delete("/users/:id", deleteUserController.handle); export { routes };