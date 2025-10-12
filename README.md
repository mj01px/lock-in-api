# Lock-In API

Lock-In API is a RESTful backend built with **TypeScript**, **Express**, and **TypeORM**.  
It currently handles **CRUD operations for user profiles (roles)** and connects to a **PostgreSQL** database.  
The project is structured and ready to evolve into a full authentication system (users, login, and permissions).

---

## Features

- Create, list, update, and delete user profiles  
- TypeORM integration with PostgreSQL  
- Organized architecture (Controller → Service → Repository)  
- Error handling middleware  
- CORS enabled  

---

## Tech Stack

- Node.js  
- Express  
- TypeScript  
- TypeORM  
- PostgreSQL  

---

## Setup

Clone the repository:
```bash
git clone https://github.com/<your-user>/lock-in-api.git
cd lock-in-api
```

Install dependencies:
```bash
yarn
# or
npm install
```

Create a `.env` file in the project root:
```bash
DATABASE_URL=postgres://user:password@localhost:5432/lockin
PORT=3000
```

Run database migrations:
```bash
yarn typeorm migration:run
```

Start the server:
```bash
yarn dev
```

The server will be running at:
```
http://localhost:3000
```

---

## Endpoints

### Profiles

| Method | Route | Description |
|--------|--------|-------------|
| `POST` | `/profiles` | Create a new profile |
| `GET` | `/profiles` | List all profiles |
| `PUT` | `/profiles/:id` | Update a profile |
| `DELETE` | `/profiles/:id` | Delete a profile |

---

## Example

**POST /profiles**

Request:
```json
{
  "profile": "admin"
}
```

Response:
```json
{
  "message": "Profile admin created successfully",
  "profile": {
    "id": "uuid-generated",
    "profile": "admin"
  }
}
```

---

## Project Structure

```
src/
 ├── controllers/       # Route handlers
 ├── services/          # Business logic
 ├── repositories/      # TypeORM data access
 ├── entities/          # Database models
 ├── interfaces/        # Type definitions
 ├── routes/            # Route definitions
 └── database/          # Connection & migrations
```

---

## Next Steps

- Add `User` entity (email, password)  
- Implement JWT authentication  
- Add password recovery  
- Link users to roles (admin / user)

---

## License

This project is open-source under the **MIT License**.

---

## Author

**Mauro Junior**  
Software Engineer — TypeScript & Node.js  
[GitHub](https://github.com/mj01px)
