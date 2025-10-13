import { Router } from "express";

import { CreateProfileController } from "./controllers/profiles/CreateProfileController";
import { ListProfileController } from "./controllers/profiles/ListProfileController";
import { UpdateProfileController } from "./controllers/profiles/UpdateProfileController";
import { DeleteProfileController } from "./controllers/profiles/DeleteProfileController";

const routes = Router();

// Profile
const createProfileController = new CreateProfileController();
const listProfileController = new ListProfileController();
const updateProfileController = new UpdateProfileController();
const deleteProfileController = new DeleteProfileController();

routes.post("/profiles", createProfileController.handle);
routes.get("/profiles", listProfileController.handle);
routes.get("/profiles/:id", listProfileController.findById);
routes.put("/profiles/:id", updateProfileController.handle);
routes.delete("/profiles/:id", deleteProfileController.handle);

export { routes };