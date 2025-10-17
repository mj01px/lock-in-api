/**
 * Server entry point
 *
 * Responsibilities:
 * - Loads environment variables
 * - Initializes database connection and routes
 * - Configures CORS, cookies, and global error handling
 * - Starts the Express server
 *
 * Example:
 * Server running at http://localhost:3000
 */

import "./config/env"; // Load environment variables
import "reflect-metadata"; // Required by TypeORM
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"; // Handles async errors automatically
import { routes } from "./routes";
import "./database/index"; // Initialize DB connection
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

// CORS setup (allows cookies and cross-origin requests)
app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:3000"], // frontend origins
        credentials: true, // required to send/receive cookies
    })
);

app.use(cookieParser()); // enable cookie parsing
app.use(express.json()); // parse JSON bodies
app.use(routes); // register all app routes

// Global error handler
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        console.error(err.message);

        if (err instanceof Error) {
            return response.status(400).json({ error: err.message });
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
);

function printSignature(url: string) {
    const spidey = String.raw`
⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠤⠤⢤⠤⢤⣀⠀⠀⠀⠀⠀⠰⠻⠙
⠀⠀⠈⠒⢌⠢⠀⠀⠀⡐⢀⠄⢠⣶⣿⣡⠤⡶⠣⣄⣀⠜⠛⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠎⢰⣿⣿⡇⢀⣸⡁⠀⡴⠉⢢⣦⡱⣳⡀⠀⠀⠀⠉
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢀⡿⣿⣿⡏⢁⡇⢈⠟⢦⣠⣴⠟⣿⣸⣇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠘⢿⣿⣹⣉⠟⣲⠾⠋⠀⠀⢸⣗⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠈⢿⣿⣾⠟⠁⠀⠀⠀⠀⢸⣿⡟⠀⡆⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⢠⣿⣿⡿⡄⠀⠀⠀⠀⠀⣼⣿⠃⢰⢸⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣶⣿⣿⠷⡿⡟⣦⣀⠀⣠⣼⣿⠏⠀⠀⠁⠀⣤
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⡿⠟⡟⢻⣈⡽⢟⣛⣿⠏⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⠟⣷⠊⢻⣄⣴⣿⡏⠀⠀⠀⠀⠀⠀⠀
⣀⡤⡤⠤⣄⡀⠀⢀⣀⣀⣀⣀⣼⣿⣝⣓⣾⣮⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠄⡀
⠖⠚⠛⣫⣿⠿⠟⣟⣻⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⢿⣿⠀⠀⠀⠀⠀⠀⠻⡪
⠒⢲⠉⢀⡠⠷⠮⣁⠬⠛⣿⣽⢿⡁⠸⡿⠚⢲⣿⣏⣎⢿⡄⠀⠀⠀⠀⠀⠀⠈
⠀⣿⣖⡁⠀⣠⠞⠉⠑⢢⣷⣽⣳⣿⡾⠤⠤⢈⣟⠂⠱⡀⣿⢦⡀⠀⠀⠀⠀⠀
⢀⡇⠀⣹⠾⢥⣀⣀⣰⠋⢷⣝⠻⣯⣳⣄⣀⡀⢹⠉⠉⠻⡚⢲⡷⣦⣤⣤⣄⡀⠀⠀⠀
  `;

    console.log(spidey);
    console.log('Created by mj01px');
    console.log(`Server running at ${url}`);
}

// Start server
app.listen(port, () => {
    printSignature(`http://localhost:${port}`);
});
