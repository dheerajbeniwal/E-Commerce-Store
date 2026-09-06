# E-Commerce Store

A full-stack e-commerce project with a Next.js frontend and an Express/MongoDB backend.

## Project Structure

```text
backend/   Express API, MongoDB connection, and category routes
frontend/  Next.js application for the storefront and admin pages
```

## Requirements

- Node.js 18 or later
- npm
- MongoDB database

## Backend Setup

```bash
cd backend
npm install
```

Create `backend/.env` with your local configuration:

```env
PORT=5000
DATABASE_URL=your-mongodb-connection-string
```

Start the backend in development mode:

```bash
npm run dev
```

The API runs on `http://localhost:5000` by default.

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

Other frontend commands:

```bash
npm run build
npm start
npm run lint
```

## API

The category API is available under `/api/category`:

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/category` | Get all categories |
| `GET` | `/api/category/:id` | Get a category by ID |
| `POST` | `/api/category/create` | Create a category |
| `PUT` | `/api/category/update/:id` | Update a category |
| `PATCH` | `/api/category/status/:id` | Toggle category status |
| `DELETE` | `/api/category/delete/:id` | Delete a category |

## Security

Environment files, dependencies, build output, logs, certificates, and private keys are excluded through the root `.gitignore`. Never commit real database credentials or other secrets.
