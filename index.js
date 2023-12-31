const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Server running on ${config.PORT}`)
})
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const Note = require("./models/note");
// require("dotenv").config();

// app.use(express.static("dist"));
// app.use(express.json());
// app.use(cors());

// const errorHandler = (error, request, response, next) => {
//   console.error(error);

//   if (error.name === "CastError") {
//     response.status(400).send({ error: "malformatted id" });
//   } else if (error.name === "ValidationError") {
//     response.status(400).json({ error: error.message });
//   }

//   next(error)
// };

// // let notes = [
// //   {
// //     id: 1,
// //     content: "HTML is easy",
// //     important: true,
// //   },
// //   {
// //     id: 2,
// //     content: "Browser can execute only JavaScript",
// //     important: false,
// //   },
// //   {
// //     id: 3,
// //     content: "GET and POST are the most important methods of HTTP protocol",
// //     important: true,
// //   },
// //   {
// //     id: 4,
// //     content: "MAT and POST are the most important methods of HTTP protocol",
// //     important: true,
// //   },
// // ];

// app.get("/", (request, response) => {
//   response.send("<h1>hello world</h1>");
// });

// app.get("/api/notes", (request, response) => {
//   Note.find({}).then((notes) => {
//     response.json(notes);
//   });
// });

// app.get("/api/notes/:id", (request, response, next) => {
//   Note.findById(request.params.id)
//     .then((note) => {
//       if (note) {
//         response.json(note);
//       } 
//       else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => next(error));
// });

// // const generateId = () => {
// //   const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
// //   return maxId + 1;
// // };

// app.post("/api/notes", (request, response, next) => {
//   const body = request.body;

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   });

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote);
//     })
//     .catch((error) => next(error));
// });

// app.delete("/api/notes/:id", (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then((result) => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });

// app.put("/api/notes/:id", (request, response, next) => {
//   const { content, important } = request.body;

//   Note.findByIdAndUpdate(
//     request.params.id,
//     { content, important },
//     { new: true, runValidators: true, context: "query" }
//   )
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

// app.use(errorHandler);

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
