import Comic from "../models/comic.js";

export const getAllComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.json(comics);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getComic = async (req, res) => {
  try {
    const { id } = req.params;
    const comic = await Comic.findById(id);
    if (comic) {
      return res.json(comic);
    }
    res.status(404).json({ message: "Comic not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createComic = async (req, res) => {
  try {
    const comic = new Comic(req.body);
    await comic.save();
    res.status(201).json(comic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateComic = async (req, res) => {
  const { id } = req.params;
  const comic = await Comic.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(comic);
};

export const deleteComic = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comic.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Comic deleted");
    }
    throw new Error("Comic not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
