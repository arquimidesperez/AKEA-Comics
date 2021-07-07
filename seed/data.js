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
    wishlist: [],
  });
  await user1.save();

  const user2 = new User({
    username: 'wish',
    email: 'wish@super.gmail.com',
    password_digest: await bcrypt.hash('wishlist', 11),
    wishlist: [],
  })

  await user2.save()

  const user3 = new User({
    username: 'kevin',
    email: 'kevin@gmail.com',
    password_digest: await bcrypt.hash('kwand1', 11),
    wishlist: [],
  })

  await user3.save()

  const comics = [
    {
      title: "Superior Spiderman #14",
      imgURL: "http://d1466nnw0ex81e.cloudfront.net/n_iv/600/1441370.jpg",
      price: "4.99",
      brand: "Marvel",
      description:
        "The story starts with Jamie Maldonado, one of the many Hell's Kitchen's residents who worries about how nobody does anything to stop the Kingpin and shut down his headquarters known as Shadowland, when suddenly a quake shakes down the place.",
      backgroundImage: "https://www.desktopbackground.org/download/o/2015/08/02/988833_the-pictures-for-spiderman-comic-wallpapers-widescreen_1920x1080_h.jpg",
    },
    {
      title: "Batman Detective Comics #1000",
      imgURL:
        "https://i.pinimg.com/736x/f0/33/38/f03338d562c9df31d14fcdd67024bf50.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "The people of Gotham City deserve better than a dark knight. They will experience the hand of a fair and true servant at work. And they will bear witness to the Arkham Knight finally delivering justice to The Batman.",
      backgroundImage:
        "https://www.wallpapertip.com/wmimgs/5-50428_1920x1080-comics-batman-comic-wallpaper-4k.jpg",
    },
    {
      title: "Zatanna #1",
      imgURL: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/994391.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "At last – the Mistress of Magic in her own ongoing series! Zatanna Zatara has long made her home in San Francisco, but right under her nose a sinister threat has developed!",
      backgroundImage:
        "https://c4.wallpaperflare.com/wallpaper/1013/868/30/zatanna-dc-comics-adam-hughes-red-background-wallpaper-preview.jpg",
    },
    {
      title: "Superman #1 (2018)",
      imgURL:
        "https://www.comicburst.com/pub/media/wysiwyg/blog/superman-2018-1/superman-1-2018-ivan-reis--joe-prado-cover.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "The fallout from the Man of Steel miniseries has Clark Kent looking at the world through new eyes... with new ideas about what Superman could and should do for the city of Metropolis and the planet Earth.",
      backgroundImage: "https://images7.alphacoders.com/812/812512.jpg",
    },
    {
      title: "Jessica Jones AKA Playland",
      imgURL:
        "https://www.thewrap.com/wp-content/uploads/2018/03/NetflixJJ_Episode13.jpg",
      price: "3.99",
      brand: "Marvel",
      description:
        "Waking up in unfamiliar surroundings, Jessica once again finds herself torn between two worlds and facing an impossible choice.",
      backgroundImage: "https://comic-watch.com/wp-content/uploads/2018/03/Featured.jpg",
    },
    {
      title: "Black Panther #1",
      imgURL: "http://diskingdom.com/wp-content/uploads/2016/03/image-91.jpeg",
      price: "3.99",
      brand: "Marvel",
      description:
        "The indomitable will of Wakanda — the famed African nation known for its vast wealth, advanced technology and warrior traditions — has long been reflected in the will of its monarchs, the Black Panthers.",
      backgroundImage: "https://wallpaperaccess.com/full/1238953.jpg",
    },
    {
      title: "Constantine: The Hellblazer #2",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/815CJFarARL.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "Ever since English occultist John Constantine moved to Manhattan, the city has grown more magical by the day—in a BAD way.",
      backgroundImage:
        "https://i.pinimg.com/originals/93/3d/ce/933dce69af72f8ac12dcd0cd8453e27f.jpg",
    },
    {
      title: "All-New X-Men #1: Yesterday's X-Men",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/51etC40z4TL._SX321_BO1,204,203,200_.jpg",
      price: "3.99",
      brand: "Marvel",
      description:
        "Professor X's five original students have been flung from the past to present day. While they cope with an unimaginable future, how will today's X-Men justify their actions to their past selves?",
      backgroundImage:
        "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555924197/shape/mentalfloss/x-men-header.png?itok=LBQtracr",
    },
    {
      title: "Flashpoint",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/A1wyJcPDaKL.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "Not a dream, not an imaginary story, not an elseworld. This is Flash Fact: When Barry Allen wakes at his desk, he discovers the world has changed.",
      backgroundImage:
        "https://www.dccomics.com/sites/default/files/Char_Gallery_Flash_758_6055049612af35.61135649.jpg",
    },
    {
      title: "Vision #1",
      imgURL: "https://m.media-amazon.com/images/I/51JmCre-0GL.jpg",
      price: "3.99",
      brand: "Marvel",
      description:
        "The Vision wants to be human, and what's more human than family?",
      backgroundImage:
        "https://wallpapercrafter.com/desktop/155678-Marvel-Comics-Vision-comic-art-artwork-colorful-face-glowing-eyes-comics-The-Avengers.jpg",
    },
    {
      title: "Suicide Squad: The Rebirth #2",
      imgURL: "https://www.previewsworld.com/SiteImage/MainImage/STL014083",
      price: "2.99",
      brand: "DC",
      description:
        "There's something rotten in Belle Reve Penitentiary, someone in the Suicide Squad has turned traitor.",
      backgroundImage:
        "https://a.scpr.org/i/c00e2173104583f15e387dcc0fd80b80/135279-eight.jpg",
    },
    {
      title: "Captain Marvel: Earth's Mightiest Hero #2",
      imgURL:
        "https://static.comicvine.com/uploads/original/11/117763/3016174-tumblr_ml4m6zffqm1s5xt2fo2_1280.jpg",
      price: "2.99",
      brand: "Marvel",
      description:
        "Captain Marvel and the Avengers face the enemy within! Carol Danvers refuses to be grounded by her recent and mysterious loss of power.",
      backgroundImage:
        "https://wallpapercave.com/wp/nPEiJh5.jpg",
    },
    {
      title: "She-Hulk #8: Secret Invasion",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/51kZG+P8nqL._SX323_BO1,204,203,200_.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "It's double the trouble as our gamma-ray glamazon finds herself on a collision course with the mystery-solving X-Factor and hip-deep in the Skrull infestation!",
      backgroundImage:
        "https://imgix.kotaku.com.au/content/uploads/sites/3/2020/09/18/she-hulk-explainer.jpg?ar=16%3A9&auto=format&fit=crop&q=80&w=1280&nr=20",
    },
    {
      title: "Ultimate Wolverine Vs. Hulk #1",
      imgURL:
        "https://i.annihil.us/u/prod/marvel/i/mg/b/e0/5aa6afc43823b/clean.jpg",
      price: "2.99",
      brand: "Marvel",
      description:
        "Dr. Bruce Banner has been presumed dead since his execution, following his murderous rampage through Manhattan as the Hulk.",
      backgroundImage:
        "https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/05/ultimate-wolverine-hulk-featured.jpg",
    },
    {
      title: "Swamp Thing #5: The Killing Field",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/A1AENs577oL.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "Alec Holland knew little of the politics involved in becoming the The Green's Avatar, but since his role has been challenged, he must take a crash course in the politics and power of The Green.",
      backgroundImage:
        "https://wallpaperaccess.com/full/2119447.jpg",
    },
  ];
  await Comic.insertMany(comics);
  console.log("Created comics!");

  user1.wishlist = await Comic.find()
  await user1.save()


  db.close();
};

insertData();
