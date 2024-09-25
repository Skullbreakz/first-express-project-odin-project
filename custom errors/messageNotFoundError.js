class MessageNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "message was not found";
  }
}

module.exports = MessageNotFoundError;
