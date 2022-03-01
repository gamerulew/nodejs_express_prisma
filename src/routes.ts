import { Role } from '@prisma/client';
import { Router } from 'express';
import AuthController from './controllers/AuthController';
import AuthorityController from './controllers/AuthorityController';
import UserController from './controllers/UserController';
import ensureAuth from './services/auth/ensureAuth';
import verifyPermission from './services/auth/verifyPermission';

const router = Router();


// AUTH
const authService = new AuthController();
router.post('/auth/login', authService.authenticate);

// USER
const userController = new UserController();
router.get('/users', ensureAuth, verifyPermission([Role.ADMIN]), userController.findAll);
router.post('/users', userController.create);
router.get('/users/:id', userController.findOne);
router.put('/users/:id', userController.update);

// AUTHORITY
const authorityController = new AuthorityController();
router.get('/authorities', authorityController.findAll);
router.post('/authorities', authorityController.create);


export default router;