const express = require("express");
// const { append } = require("express/lib/response");
const { users } = require("./data/users.json");

const router = express.Router();

/**
 * Route: /users
 * Method: GET
 * Description: Get all the users
 * Access: Public
 * Parmanters: none
 */
router.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

/**
 * Route: /users/:id
 * /users/2
 * Method: GET
 * Description: Get single user by their id
 * Access: Public
 * Parmanters: id
 */
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((each) => each.id === id);
  if (!user) {
    res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  } else {
    res.status(200).json({
      success: true,
      data: user,
    });
  }
});

/**
 * Route: /users
 * Method: POST
 * Description: Create a new user
 * Access: Public
 * Parmanters: none
 */
router.post("/users", (req, res) => {
  const { id, name, surname, email, subscriptionType, subscriptionDate } =
    req.body;
  const user = users.find((each) => each.id === id);

  if (user) {
    return res.status(404).json({
      success: false,
      message: "User alreadry exist",
    });
  }
  users.push({
    id,
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });
  return res.status(201).json({
    success: true,
    data: users,
  });
});

/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating a user data
 * Access: Public
 * Parmanters: id
 */
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  const user = users.find((each) => each.id === id);

  if (!user)
    return res.status(404).json({ success: false, message: "User Not Found" });

  const UpdatedUser = users.map((each) => {
    if (each.id === id) {
      return {
        ...each,
        ...data,
      };
    }
    return each;
  });
  return res.status(200).json({
    success: true,
    data: UpdatedUser,
  });
});

/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Deleting a user by their id
 * Access: Public
 * Parmanters: id
 */
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((each) => each.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User to be deleted is not found",
    });
  }
  const index = users.indexOf(user);
  users.splice(index, 1);

  return res.status(200).json({ success: true, data: users });
});

// deafult export
module.exports = router;