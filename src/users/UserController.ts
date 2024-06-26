import { Request, Response } from "express";
import { getJWTToken } from "../middlewares/Auth";
import { getErrorMessage } from "../utils/ErrorMessages";
import * as userServices from "./UserService";

export const login = async (req: Request, res: Response) => {
  try {
    const foundUser = await userServices.login(req.body);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const createdUser = await userServices.register(req.body);
    res.status(200).send(createdUser);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};

export const confirmEmail = async (req: Request, res: Response) => {
  try {
    const createdUser = await userServices.confirmEmail(req.body);
    res.status(200).send(createdUser);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const updatedUser = await userServices.updateUser(userId, req.body);
    res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getAllUsers(req.query);
    res.status(200).send(users);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await userServices.getUserById(userId);
    res.status(200).send(user);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const status = await userServices.deleteUser(userId);
    res.status(200).send(status);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};

export const getMyUser = async (req: Request, res: Response) => {
  try {
    let authorization = req.header("Authorization")?.replace("Bearer", "");
    if (authorization.trim().length === 0) {
      return {};
    }

    const token = await getJWTToken(req, res);
    const user = await userServices.getMyUser(token);
    res.status(200).send(user);
  } catch (error) {
    return res.status(500).json(getErrorMessage(error));
  }
};
