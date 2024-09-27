class MessagesStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }
  addMessage({ user, text }) {
    const id = this.id;
    this.storage[id] = { id, user, text };
    id++;
  }

  getMessages() {
    return Object.values(this.storage);
  }
  getMessageById(id) {
    return this.storage[id];
  }

  updateMessage(id, updatedMessage) {
    this.storage[id].text = updatedMessage;
  }

  updateUser({ id, user }) {
    this.storage[id].user = user;
  }

  removeMessage(id) {
    delete this.storage[id];
  }
}
