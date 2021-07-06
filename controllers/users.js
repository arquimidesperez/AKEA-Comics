import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";
import Comic from "../models/comic.js";

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "areallylonggoodkey";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
    });

    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select(
      "username email roles password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not Authorized");
  }
};

export const changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const user = await User.findOne({ email: email }).select(
      "username email password_digest"
    );
    if (bcrypt.compare(oldPassword, user.password_digest)) {
      user.password_digest = await bcrypt.hash(newPassword, SALT_ROUNDS);
      await user.save();
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUserWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('wishlist')
    res.json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const addComicToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const comic = await Comic.findById(req.params.comicId)
    user.wishlist.push(comic)
    await user.save()
    res.json({ msg: `Comic successfully added to Wishlist` })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const removeComicFromWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const comicId = req.params.comicId
    const updatedWishlist = user.wishlist.filter((wishlistItemId) => {
      return comicId !== wishlistItemId.toString()
    })
    user.wishlist = updatedWishlist
    await user.save()
    res.json({ msg: `Wishlist successfully updated` })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

/*
export const getUserComic = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const userComic = await Comic.findById(req.params.comicId).populate('userId')
    if (userComic.userId.equals(user._id)) {
      return res.json(userComic)
    }
    throw new Error(
      `Comic ${userComic._id} is not in ${user._id}'s Wish List`
    )
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createUserComic = async (req, res) => {
  try {
    if (await User.findById(req.body.userId)) {
      const userComic = new Comic(req.body)
      await userComic.save()
      res.status(201).json(comic)
    }
    throw new Error(`User ${req.body.userId} does not exist!`)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteUserComic = async (req, res) => {
  try {
    if (await User.findById(req.params.id)) {
      const deleted = await Comic.findByIdAndDelete(req.params.comicId)
      if (deleted) {
        return res.status(200).send('Comic deleted')
      }
      throw new Error(`Comic ${req.params.comicId} not found`)
    }
    throw new Error(`User ${req.params.id} does not exist!`)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
*/