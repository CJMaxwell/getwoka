import { Router } from 'express';
import MessageController from '../../controllers/MessageController';


const messageRoutes = Router();

messageRoutes.post('/messages', MessageController.createMessage);
messageRoutes.get('/messages', MessageController.getMessages);
messageRoutes.get('/messages/:id', MessageController.getMessage);
messageRoutes.put('/messages/:id', MessageController.updateMessage);
messageRoutes.delete('/messages/:id', MessageController.deleteMessage);

export default messageRoutes;
