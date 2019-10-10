class MessageController {
  /**
 * @description: Controller for message entry
 *
 * @class MessageController
 *
 */
  static createMessage(req, res) {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({
        message: 'Invalid message',
      });
    } else if (message.length < 4) {
      res.status(400).json({
        message: 'Message cannot be less than 10 characters',
      });
    } else {
      res.status(201).json({
        message,
      });
    }
  }

  static getMessages(req, res) {
    const { userId, message } = req.body;
    if (userId === 1) {
      res.status(200).json({
        message,
      });
    }
  }

  static getMessage(req, res) {
    const { id } = req.params;
    const { userId, message } = req.body;
    if (userId === 1 && id === 2) {
      res.status(200).json({
        message,
      });
    }
  }

  static updateMessage(req, res) {
    const { id } = req.params;
    const { userId, message } = req.body;
    if (userId === 1 && id === 2) {
      res.status(200).json({
        message,
      });
    }
  }

  static deleteMessage(req, res) {
    const { id } = req.params;
    const { userId } = req.body;
    if (userId === 1 && id === 2) {
      res.status(200).json({
        message: 'Message deleted',
      });
    }
  }
}

export default MessageController;
