import { IMAGE_BASE_LOCATIONS, REPO_LINKS } from './constants';

const {
  RESERVATION_CALENDAR_1,
  RESERVATION_CALENDAR_2,
  RESERVATION_CALENDAR_GIF,
  BLOCKBUYER_GALLERY,
  LOADER_IO,
  NEW_RELIC,
  FOLIO_MAIN,
  FOLIO_2,
  FOLIO_MOBILE,
  FOLIO_LIGHTHOUSE,
  IMGUR_GIRAFFE,
  IMGUR_GIRAFFE_MCD,
  IMGUR_DISNEY,
  IMGUR_IHOP,
  IMGUR_JACK,
  IMGUR_KFC,
  IMGUR_LINK,
} = IMAGE_BASE_LOCATIONS;

const {
  GALLERY,
  FOLIO,
  RESERVATIONS,
} = REPO_LINKS;

const projects = [
  {
    title: 'PlateThis Reservation Calendar',
    image: {
      primary_path: `${RESERVATION_CALENDAR_1}.webp`,
      secondary_path: `${RESERVATION_CALENDAR_1}.jpg`,
      alt: 'reservation calendar',
    },
    carouselImages: [
      {
        primary_path: `${RESERVATION_CALENDAR_1}.webp`,
        secondary_path: `${RESERVATION_CALENDAR_1}.jpg`,
        alt: 'reservation calendar',
      },
      {
        primary_path: `${RESERVATION_CALENDAR_2}.webp`,
        secondary_path: `${RESERVATION_CALENDAR_2}.jpg`,
        alt: 'reservation calendar',
      },
      {
        primary_path: `${RESERVATION_CALENDAR_GIF}.gif`,
        secondary_path: `${RESERVATION_CALENDAR_GIF}.gif`,
        alt: 'reservation calendar gif',
      },
    ],
    shortDescription: 'A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability.',
    longDescription: 'A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability. Uses a custom-built date management library similar to Moment.js for greater control over date parsing and formatting. Easily deployable to AWS or similar cloud hosting services through Docker containerization. Uses GZIP text compression for optimal content delivery and SEO best practices.',
    tech: ['Node.js', 'React', 'Docker', 'ExpressJS', 'MongoDB', 'jQuery', 'Styled Components', 'Webpack'],
    hyperlink: RESERVATIONS,
    shortlink: 'www.github.com',
  },
  {
    title: 'BlockBuyer Image Gallery',
    image: {
      primary_path: `${BLOCKBUYER_GALLERY}.webp`,
      secondary_path: `${BLOCKBUYER_GALLERY}.jpg`,
      alt: 'blockbuyer image gallery',
    },
    carouselImages: [
      {
        primary_path: `${BLOCKBUYER_GALLERY}.webp`,
        secondary_path: `${BLOCKBUYER_GALLERY}.jpg`,
        alt: 'blockbuyer image gallery',
      },
      {
        primary_path: `${LOADER_IO}.webp`,
        secondary_path: `${LOADER_IO}.jpg`,
        alt: 'loader.io stress testing',
      },
      {
        primary_path: `${NEW_RELIC}.webp`,
        secondary_path: `${NEW_RELIC}.jpg`,

        alt: 'new relic stress testing',
      },
    ],
    shortDescription: 'An image gallery microservice for a toy e-commerce website with a backend scaled to handle over 1000 user requests per second while maintaining data integrity and optimal speed.',
    longDescription: 'An image gallery microservice for a toy purchasing website with a backend scaled to handle over 1000 user requests per second on a backend containing over 10 million product records in a MongoDB database. Employs New Relic, Loader.io, and K6 to analyze performance and assess optimizations for database queries and resource utilization. Horizontally scaled to multiple AWS EC2 instances and incorporates Redis caching for high-demand requests.',
    tech: ['Node.js', 'MongoDB', 'React', 'Loader.io', 'New Relic', 'K6', 'AWS', 'ExpressJS', 'Redis', 'Webpack'],
    hyperlink: GALLERY,
    shortlink: 'www.github.com',
  },
  {
    title: 'Folio Personal Portfolio (This Site!)',
    image: {
      primary_path: `${FOLIO_MAIN}.webp`,
      secondary_path: `${FOLIO_MAIN}.jpg`,

      alt: 'Folio personal portfolio website main',
    },
    carouselImages: [
      {
        primary_path: `${FOLIO_MAIN}.webp`,
        secondary_path: `${FOLIO_MAIN}.jpg`,

        alt: 'Folio desktop header display',
      },
      {
        primary_path: `${FOLIO_2}.webp`,
        secondary_path: `${FOLIO_2}.jpg`,
        alt: 'Folio desktop portfolio card modal display',
      },
      {
        primary_path: `${FOLIO_MOBILE}.webp`,
        secondary_path: `${FOLIO_MOBILE}.jpg`,
        alt: 'Folio mobile demo',
      },
      {
        primary_path: `${FOLIO_LIGHTHOUSE}.webp`,
        secondary_path: `${FOLIO_LIGHTHOUSE}.jpg`,
        alt: 'Folio mobile demo',
      },
    ],
    shortDescription: 'A personal portfolio website serving as a living document to represent skills, projects, and other achievements of an ever-learning software engineer. Built from scratch!',
    longDescription: 'A personal portfolio website serving as a living document to represent skills, projects, and other achievements of an ever-learning software engineer. Highly responsive, built from scratch using modern frontend technologies, and optimized for performance using methods including Server-Side Rendering and Text Compression. Containerized via Docker for rapid deployment and flexibility. Hosted via Amazon Web Service\'s EC2.',
    tech: ['Node.js', 'React', 'Bootstrap', 'Docker', 'AWS', 'ExpressJS', 'Modernizr', 'Webpack', 'jQuery', 'Adobe Illustrator'],
    hyperlink: FOLIO,
    shortlink: 'www.github.com',
  },
  {
    title: 'Imgur Client Sales Stickers',
    image: {
      primary_path: `${IMGUR_GIRAFFE}.webp`,
      secondary_path: `${IMGUR_GIRAFFE}.jpg`,
      alt: 'imgur giraffe sticker',
    },
    carouselImages: [
      {
        primary_path: `${IMGUR_GIRAFFE_MCD}.webp`,
        secondary_path: `${IMGUR_GIRAFFE_MCD}.jpg`,
        alt: 'mcdonalds imgur giraffe sticker',
      },
      {
        primary_path: `${IMGUR_DISNEY}.webp`,
        secondary_path: `${IMGUR_DISNEY}.jpg`,
        alt: 'disney imgur sticker',
      },
      {
        primary_path: `${IMGUR_IHOP}.webp`,
        secondary_path: `${IMGUR_IHOP}.jpg`,
        alt: 'ihop imgur sticker',
      },
      {
        primary_path: `${IMGUR_JACK}.webp`,
        secondary_path: `${IMGUR_JACK}.jpg`,
        alt: 'jack in the box imgur sticker',
      },
      {
        primary_path: `${IMGUR_KFC}.webp`,
        secondary_path: `${IMGUR_KFC}.jpg`,
        alt: 'kentucky fried chicken imgur sticker',
      },
      {
        primary_path: `${IMGUR_LINK}.webp`,
        secondary_path: `${IMGUR_LINK}.jpg`,
        alt: 'legend of zelda link imgur sticker',
      },
    ],
    shortDescription: 'A collection of fun and goofy stickers created for sales representatives used to build rapport with current and prospective clients as a sales and marketing fellow with Imgur.',
    longDescription: 'A collection of goofy stickers created for sales representatives to give to current and prospective clients during the fellowship with Imgur. Each sticker represents an "Imgurized" version of a brand\'s mascot. Brand images were converted to vectors using the image trace functionality through Adobe Illustrator before the incorporation of Imgur brand assets, then exported to Sticker Mule for printing as die cut stickers. These stickers assisted Imgur sales reps in building rapport with clients and closing sales! \n \n **Stickers are not for resale or personal financial gain.',
    tech: ['Adobe Illustrator'],
    hyperlink: '',
    shortlink: '',
  },
];

export default projects;
