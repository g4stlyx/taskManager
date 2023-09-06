const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.js");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

/* They are both for updating but; patch is for editing and put is for replacing

PATCH is used to apply partial updates to a resource, 
meaning that only the fields that need to be changed are sent in the request body. 

PUT is used to replace the entire resource with a new representation, 
meaning that all the fields of the resource are sent in the request body, even if they are not modified.
*/

module.exports = router;
