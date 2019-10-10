import generateToken from '../helper/generateToken';
import comparePassword from '../helper/comparePassword';
// import hashPassword from '../helper/hashPassword';
import { User } from '../models';

class AuthController {
  static async signup(req, res) {
    try {
      const { password, ...newlyCreateduser } = (await User.create(req.body)).toJSON();
      const token = await generateToken(newlyCreateduser);
      res.status(201).json({
        user: newlyCreateduser,
        token,
      });
    } catch (error) {
      if (error.original.code === '23505') {
        res.status(409).json({
          message: 'A user alreday exists with this phone number',
        });
      } else {
        res.sendStatus(500);
      }
    }
  }

  static async login(req, res) {
    const { phoneNumber, password } = req.body;
    try {
      const user = await User.findOne({ where: { phoneNumber } });
      if (!user) {
        throw new Error('User does not exist');
      }
      const hashedPassword = user.password;
      const passwordMatches = comparePassword(password, hashedPassword);
      if (passwordMatches) {
        res.status(200).json({
          user,
          token: generateToken(user),
        });
      } else {
        res.status(401).json({
          message: 'Incorrect password',
        });
      }
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }

  static async getAllUsers(req, res) {
    // const { admin } = User;
    // if (!admin) {
    //   return res.status(401).json({
    //     message: 'You dont have the permission to see all users.',
    //   });
    // }
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;
    // const user = User.find((u) => u.id === parseInt(id, 10));
    try {
      const user = await User.findOne({ where: { id } });
      if (!user) {
        throw new Error('User does not exist');
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({
        error: error.message,
      });
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ where: { id } });
      const {
        firstName, lastName, phoneNumber,
        dateOfBirth, avatar, skill,
        skillDescription, city, state, country,
      } = req.body;
      const userNewRecord = {
        id,
        firstName,
        lastName,
        phoneNumber,
        dateOfBirth,
        avatar,
        skill,
        skillDescription,
        city,
        state,
        country,
      };
      if (!user) {
        throw new Error('User does not exist');
      }
      const updatedUser = await user.update(userNewRecord);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(404).json({
        error: error.message,
      });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const user = await User.destroy({ where: { id } });
      if (!user) {
        throw new Error('User does not exist');
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).json({
        error: error.message,
      });
    }
  }
}
export default AuthController;
