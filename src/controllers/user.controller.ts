import type { Request, Response } from 'express';
import User from '../models/user.model';
import { returnSuccess, returnNonSuccess } from '../utils/response.util';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    returnSuccess(res, 200, 'Users fetched successfully', users);
  } catch (error: unknown) {
    returnNonSuccess(res, 500, (error as Error).message);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) returnNonSuccess(res, 404, 'User not found');
    returnSuccess(res, 200, 'User fetched successfully', user);
  } catch (error: unknown) {
    returnNonSuccess(res, 500, (error as Error).message);
  }
};
