import { Router } from "express";
import { Book} from "../Schema/model.js";
import { createBook, deleteBook, readBook, readSpecificBook, updateBook } from "../Controllers/bookController.js";

let bookRouter = Router();

bookRouter
.route("/")
.post(createBook)
.get(readBook)

bookRouter
.route("/:bookId")
.patch(updateBook)
.delete(deleteBook)
.get(readSpecificBook)

export default bookRouter;