# Node.js Blog Website

This repository contains the source code for a simple blog website built using Node.js, Express, EJS, MongoDB, and the Mongoose library. This web application allows users to create, view, edit, and delete blog posts.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **EJS (Embedded JavaScript)**: A simple templating language that lets you generate HTML markup with plain JavaScript.
- **MongoDB**: A NoSQL database that stores data in flexible, JSON-like documents.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Install MongoDB](https://docs.mongodb.com/manual/installation/)


## Configuration

1. Create a `.env` file in the root directory.

2. Add the following environment variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/blog
   ```

   Adjust the values based on your preferences.

## Running the Application

1. Start the MongoDB server:

   ```bash
   mongod
   ```

2. Run the application:

   ```bash
   npm start
   ```

3. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the blog website.

## Features

- **Create**: Add new blog posts with a title, content, and other details.
- **Read**: View all blog posts or click on individual posts to read the full content.
- **Update**: Edit and update existing blog posts.
- **Delete**: Remove unwanted blog posts.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
