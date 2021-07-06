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

  const comics = [
    {
      title: "Superior Spiderman #14",
      imgURL: "http://d1466nnw0ex81e.cloudfront.net/n_iv/600/1441370.jpg",
      price: "4.99",
      brand: "Marvel",
      description:
        "The story starts with Jamie Maldonado, one of the many Hell's Kitchen's residents who worries about how nobody does anything to stop the Kingpin and shut down his headquarters known as Shadowland, when suddenly a quake shakes down the place.",
      backgroundImage: "https://wallpaperaccess.com/full/2060073.jpg",
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
      backgroundImage: "https://wallpapercave.com/wp/wp1882371.jpg",
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
      title: "Constantine: The Hellblazer Vol. 2",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/815CJFarARL.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "Ever since English occultist John Constantine moved to Manhattan, the city has grown more magical by the day—in a BAD way. The Swamp Thing is out of his element when Central Park itself begins eating the city's young lovers alive. A demonic infestation has taken over the city's magical hotspots, forcing the powerful sorcerer Papa Midnite out of his supernatural nightclub and onto the street. And one of hell's most lethal lords, Neron himself, joins forces with Constantine's infernal ex to make New York a deadly offer it cannot refuse.",
      backgroundImage:
        "https://i.pinimg.com/originals/93/3d/ce/933dce69af72f8ac12dcd0cd8453e27f.jpg",
    },
    {
      title: "All-New X-Men Volume 1: Yesterday's X-Men",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/51etC40z4TL._SX321_BO1,204,203,200_.jpg",
      price: "3.99",
      brand: "Marvel",
      description:
        "Professor X's five original students have been flung from the past to present day. While they cope with an unimaginable future (especially considering the fallout of AVX), how will today's X-Men justify their actions to their past selves?",
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
        "Not a dream, not an imaginary story, not an elseworld. This is Flash Fact: When Barry Allen wakes at his desk, he discovers the world has changed. Family is alive, loved ones are strangers, and close friends are different, gone or worse. It's a world on the brink of a cataclysmic war—but where are Earth's Greatest Heroes to stop it? It's a place where America's last hope is Cyborg, who hopes to gather the forces of The Outsider, The Secret 7, Shazam!, Citizen Cold and other new and familiar-yetaltered faces! It's a world that could be running out of time, if The Flash can't find the villain who altered the time line!",
      backgroundImage:
        "https://www.dccomics.com/sites/default/files/Char_Gallery_Flash_758_6055049612af35.61135649.jpg",
    },
    {
      title: "Vision #1",
      imgURL: "https://m.media-amazon.com/images/I/51JmCre-0GL.jpg",
      price: "3.99",
      brand: "Marvel",
      description:
        "The Vision wants to be human, and what's more human than family? He goes to the laboratory where he was created, where Ultron molded him into a weapon, where he first rebelled against his given destiny, where he first imagined that he could be more, that he could be good, that he could be a man, a normal, ordinary man. And he builds them. A wife, Virginia. Two teenage twins, Viv and Vin. They look like him. They have his powers. They share his grandest ambition or perhaps obsession: the unrelenting need to be ordinary. Behold The Visions! They're the family next door, and they have the power to kill us all. What could possibly go wrong?",
      backgroundImage:
        "https://wallpapercrafter.com/desktop/155678-Marvel-Comics-Vision-comic-art-artwork-colorful-face-glowing-eyes-comics-The-Avengers.jpg",
    },
    {
      title: "Suicide Squad: The Rebirth #2",
      imgURL: "https://www.previewsworld.com/SiteImage/MainImage/STL014083",
      price: "2.99",
      brand: "DC",
      description:
        "There's something rotten in Belle Reve Penitentiary, and it's not just the swamp water leaking into the basement. Someone in the Suicide Squad has turned traitor, leaving America's deadliest super-team open to attack from a vast international conspiracy bent on destroying everything that Task Force X director Amanda Waller has built.",
      backgroundImage:
        "https://a.scpr.org/i/c00e2173104583f15e387dcc0fd80b80/135279-eight.jpg",
    },
    {
      title: "Captain Marvel: Earth's Mightiest Hero Vol. 2",
      imgURL:
        "https://static.comicvine.com/uploads/original/11/117763/3016174-tumblr_ml4m6zffqm1s5xt2fo2_1280.jpg",
      price: "2.99",
      brand: "Marvel",
      description:
        "Captain Marvel and the Avengers face the enemy within! When vicious echoes from the past of Earth's Mightiest Heroes crop up all over Manhattan, Carol Danvers refuses to be grounded by her recent and mysterious loss of power. But who is the sinister figure behind the madness, and what does it have to do with Carol's calamitous condition? And the most disturbing question of all...is this villain even real? Things get worse as the events of Infi nity unfold. Carol goes cosmic - Binary cosmic - in an epic that rocks worlds, not least hers! But when she comes back to Earth with a bump, will her biggest fan be the key to rebuilding her life? You just can't keep a good Captain down!",
      backgroundImage:
        "https://images-na.ssl-images-amazon.com/images/I/61gqbOoEOaL._AC_SY679_.jpg",
    },
    {
      title: "She-Hulk - Volume 8: Secret Invasion",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/51kZG+P8nqL._SX323_BO1,204,203,200_.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "It's double the trouble as our gamma-ray glamazon finds herself on a collision course with the mystery-solving X-Factor and hip-deep in the Skrull infestation! What does She-Hulk's partner Jazinda - who just happens to be a Skrull - know about the invasion... and is she part of it? And why has writer Peter David pitted the heroes of his two books against one another?",
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
        "Dr. Bruce Banner has been presumed dead since his execution, following his murderous rampage through Manhattan as the Hulk. But when reports start cropping up of an unidentified creature appearing around the globe, Nick Fury begins to get worried. Not because Banner can turn from man to unstoppable monster in seconds...but because Banner's existence is the one secret that can bring down Fury. Fury turns to the only man he can trust: Wolverine. And he's only too glad to take care of Banner-by any means necessary.",
      backgroundImage:
        "https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/05/ultimate-wolverine-hulk-featured.jpg",
    },
    {
      title: "Swamp Thing Vol. 5: The Killing Field",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/A1AENs577oL.jpg",
      price: "3.99",
      brand: "DC",
      description:
        "Alec Holland knew little of the politics involved in becoming the The Green's Avatar, but since his role has been challenged, he must take a crash course in the politics and power of The Green.  The mantle of Avatar evolves over time, and when the Parliment decides an Avatar's time is at an end, a new one must be raised.  If Alec fails the Seeder's challenge, the fate of mankind will be sealed and reclaimed by The Green under the control of The Seeder.",
      backgroundImage:
        "https://d.newsweek.com/en/full/1646403/swamp-thing-cw-canceled.jpg?w=1600&h=1600&l=50&t=21&q=88&f=15c142480e000cb55680f20b56ec51c7",
    },
  ];
  await Comic.insertMany(comics);
  console.log("Created comics!");

  user1.wishlist = await Comic.find()
  await user1.save()


  db.close();
};

insertData();
