import db from "../db/connection.js";
import Comic from "../models/comic.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "admin",
    email: "admin@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  });
  await user1.save();

  const comics = [
    {
      title: "Superior Spiderman #14",
      imgURL:
        "http://d1466nnw0ex81e.cloudfront.net/n_iv/600/1441370.jpg",
      price: "4.99",
      brand: "Marvel",
      description: "The story starts with Jamie Maldonado, one of the many Hell's Kitchen's residents who worries about how nobody does anything to stop the Kingpin and shut down his headquarters known as Shadowland, when suddenly a quake shakes down the place.",
      backgroundImage: "https://wallpaperaccess.com/full/2060073.jpg",
    },
    {
      title: "Batman Detective Comics #1000",
      imgURL:
        "https://i.pinimg.com/736x/f0/33/38/f03338d562c9df31d14fcdd67024bf50.jpg",
      price: "3.99",
      brand: "DC",
      description: "The people of Gotham City deserve better than a dark knight. They will experience the hand of a fair and true servant at work. And they will bear witness to the Arkham Knight finally delivering justice to The Batman.",
      backgroundImage: "https://www.wallpapertip.com/wmimgs/5-50428_1920x1080-comics-batman-comic-wallpaper-4k.jpg",
    },
    {
      title: "Zatanna #1",
      imgURL:
        "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/994391.jpg",
      price: "3.99",
      brand: "DC",
      description: "At last – the Mistress of Magic in her own ongoing series! Zatanna Zatara has long made her home in San Francisco, but right under her nose a sinister threat has developed!",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/1013/868/30/zatanna-dc-comics-adam-hughes-red-background-wallpaper-preview.jpg",
    },
    {
      title: "Superman #1 (2018)",
      imgURL:
        "https://www.comicburst.com/pub/media/wysiwyg/blog/superman-2018-1/superman-1-2018-ivan-reis--joe-prado-cover.jpg",
      price: "3.99",
      brand: "DC",
      description: "The fallout from the Man of Steel miniseries has Clark Kent looking at the world through new eyes... with new ideas about what Superman could and should do for the city of Metropolis and the planet Earth.",
      backgroundImage: "https://images7.alphacoders.com/812/812512.jpg",
    },
    {
      title: "Jessica Jones AKA Playland",
      imgURL:
        "https://www.thewrap.com/wp-content/uploads/2018/03/NetflixJJ_Episode13.jpg",
      price: "3.99",
      brand: "Marvel",
      description: "Waking up in unfamiliar surroundings, Jessica once again finds herself torn between two worlds and facing an impossible choice.",
      backgroundImage: "https://wallpapercave.com/wp/wp1882371.jpg",
    },
    {
      title: "Black Panther #1",
      imgURL:
        "http://diskingdom.com/wp-content/uploads/2016/03/image-91.jpeg",
      price: "3.99",
      brand: "Marvel",
      description: "The indomitable will of Wakanda — the famed African nation known for its vast wealth, advanced technology and warrior traditions — has long been reflected in the will of its monarchs, the Black Panthers.",
      backgroundImage: "https://wallpaperaccess.com/full/1238953.jpg",
    }
  ];
  await Comic.insertMany(comics);
  console.log("Created comics!");

  db.close();
};

insertData();
