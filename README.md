# Book Manager API

A beginner-friendly Node.js REST API built with Express.js to manage books using an in-memory data store. This project is designed to be clean, easy to understand, and portfolio-ready.

## Project Overview

This API provides endpoints to list, add, update, and delete books stored in memory. It does not use a database; instead, book records are kept in an array inside the application.

## Screenshot

![Book Manager API Screenshot](screenshot.jpg)
## Installation

1. Clone or download the repository.
2. Open a terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

## Running the Server

Start the server with:

```bash
npm start
```

The API listens on port `3000` by default.

## API Endpoints

### GET /books

Return all books.

- URL: `/books`
- Method: `GET`
- Success Status: `200`
- Response:

```json
{
  "success": true,
  "message": "Books retrieved successfully.",
  "data": [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell"
    },
    {
      "id": 3,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    }
  ]
}
```

### POST /books

Add a new book.

- URL: `/books`
- Method: `POST`
- Request Body:

```json
{
  "title": "Book Name",
  "author": "Author Name"
}
```

- Success Status: `201`
- Response:

```json
{
  "success": true,
  "message": "Book added successfully.",
  "data": {
    "id": 4,
    "title": "Book Name",
    "author": "Author Name"
  }
}
```

### PUT /books/:id

Update an existing book by ID.

- URL: `/books/1`
- Method: `PUT`
- Request Body:

```json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```

- Success Status: `200`
- Response:

```json
{
  "success": true,
  "message": "Book updated successfully.",
  "data": {
    "id": 1,
    "title": "Updated Title",
    "author": "Updated Author"
  }
}
```

If the book is not found, the response will be:

```json
{
  "success": false,
  "message": "Book with id 999 not found.",
  "data": null
}
```

### DELETE /books/:id

Delete a book by ID.

- URL: `/books/2`
- Method: `DELETE`
- Success Status: `200`
- Response:

```json
{
  "success": true,
  "message": "Book deleted successfully.",
  "data": null
}
```

If the book is not found, the response will be:

```json
{
  "success": false,
  "message": "Book with id 999 not found.",
  "data": null
}
```

## Example Postman Requests

### 1. Get all books

- Method: `GET`
- URL: `http://localhost:3000/books`

### 2. Add a new book

- Method: `POST`
- URL: `http://localhost:3000/books`
- Headers:
  - `Content-Type: application/json`
- Body (raw JSON):

```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt"
}
```

### 3. Update an existing book

- Method: `PUT`
- URL: `http://localhost:3000/books/1`
- Headers:
  - `Content-Type: application/json`
- Body (raw JSON):

```json
{
  "author": "Harper Lee (Updated)"
}
```

### 4. Delete a book

- Method: `DELETE`
- URL: `http://localhost:3000/books/3`

## Testing in Postman

1. Open Postman.
2. Create a new request for each endpoint.
3. Set the request URL to `http://localhost:3000` plus the endpoint path.
4. For `POST` and `PUT`, set the header `Content-Type` to `application/json`.
5. Add the JSON body to the request and send it.
6. Verify the response JSON contains `success`, `message`, and `data`.

## Notes

- This API stores data in memory only, so changes are lost when the server restarts.
- The code is intentionally simple and beginner-friendly while following best practices for Express.js routing, middleware, and error handling.
