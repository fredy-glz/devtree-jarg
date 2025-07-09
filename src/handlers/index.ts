import { Request, Response } from "express";
import slug from "slug";

import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Valida si el email ya esta registrado
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("Un usuario con ese email ya esta registrado");
    res.status(409).json({ error: error.message });
    return;
  }

  // Valida si el handle ya esta siendo ocupado por otro usuario
  const handle = slug(req.body.handle, "");
  const handleExists = await User.findOne({ handle });
  if (handleExists) {
    const error = new Error("Nombre de usuario no disponible");
    res.status(409).json({ error: error.message });
    return;
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;

  await user.save();

  res.status(201).send("Registro Creado Correctamente");
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Revisar si el usuario esta registrado
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("El Usuario no existe");
    res.status(404).json({ error: error.message });
    return;
  }

  // Comprobar el password
  const isPasswordCorrect = await checkPassword(password, user.password);
  if (!isPasswordCorrect) {
    const error = new Error("Password Incorrecto");
    res.status(401).json({ error: error.message });
    return;
  }

  res.status(200).send("Autenticado...");
};
