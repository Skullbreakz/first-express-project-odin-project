const { body } = require("express-validator");
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
exports.messageValidator = [
  body("user")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("user name is required")
    .isLength({ min: 2 })
    .withMessage("user name must be at least 2 characters long"),
  body("text")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 2 })
    .withMessage("Message must be at least 2 characters long"),
];

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
];
