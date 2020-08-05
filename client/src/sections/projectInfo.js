const projects = [
  {
    title: 'PlateThis Reservation Calendar',
    image: {
      webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.webp',
      jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.jpg',
      alt: 'reservation calendar',
    },
    carouselImages: [
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.jpg',
        alt: 'reservation calendar',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/reservation2.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/reservation2.jpg',
        alt: 'reservation calendar',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/res-cal-formatted.gif',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/res-cal-formatted.gif',
        alt: 'reservation calendar gif',
      },
    ],
    shortDescription: 'A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability.',
    longDescription: 'A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability. Uses a custom-built date management library similar to Moment.js for greater control over date parsing and formatting. Easily deployable to AWS or similar cloud hosting services through Docker containerization. Uses GZIP text compression for optimal content delivery and SEO best practices.',
    tech: ['Node.js', 'React', 'Docker', 'ExpressJS', 'MongoDB', 'jQuery', 'Styled Components', 'Webpack'],
    hyperlink: 'https://github.com/patriot898/plateThis-reservations',
    shortlink: 'www.github.com',
  },
  {
    title: 'BlockBuyer Image Gallery',
    image: {
      webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/gallery.webp',
      jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/gallery.jpg',
      alt: 'blockbuyer image gallery',
    },
    carouselImages: [
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/gallery.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/gallery.jpg',
        alt: 'blockbuyer image gallery',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/loader.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/loader.jpg',
        alt: 'loader.io stress testing',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/newrelic.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/newrelic.jpg',
        alt: 'new relic stress testing',
      },
    ],
    shortDescription: 'An image gallery microservice for a toy e-commerce website with a backend scaled to handle over 1000 user requests per second while maintaining data integrity and optimal speed.',
    longDescription: 'An image gallery microservice for a toy purchasing website with a backend scaled to handle over 1000 user requests per second on a backend containing over 10 million product records in a MongoDB database. Employs New Relic, Loader.io, and K6 to analyze performance and assess optimizations for database queries and resource utilization. Horizontally scaled to multiple AWS EC2 instances and incorporates Redis caching for high-demand requests.',
    tech: ['Node.js', 'MongoDB', 'React', 'Loader.io', 'New Relic', 'K6', 'AWS', 'ExpressJS', 'Redis', 'Webpack'],
    hyperlink: 'https://github.com/patriot898/Gallery',
    shortlink: 'www.github.com',
  },
  {
    title: 'Folio Personal Portfolio (This Site!)',
    image: {
      webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-main.webp',
      jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-main.jpg',
      alt: 'Folio personal portfolio website main',
    },
    carouselImages: [
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-main.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-main.jpg',
        alt: 'Folio desktop header display',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio2.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio2.jpg',
        alt: 'Folio desktop portfolio card modal display',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-mobile.gif',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-mobile.gif',
        alt: 'Folio mobile demo',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-lighthouse.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/folio-lighthouse.jpg',
        alt: 'Folio mobile demo',
      },
    ],
    shortDescription: 'A personal portfolio website serving as a living document to represent skills, projects, and other achievements of an ever-learning software engineer. Built from scratch!',
    longDescription: 'A personal portfolio website serving as a living document to represent skills, projects, and other achievements of an ever-learning software engineer. Highly responsive, built from scratch using modern frontend technologies, and optimized for performance using methods including Server-Side Rendering and Text Compression. Containerized via Docker for rapid deployment and flexibility. Hosted via Amazon Web Service\'s EC2.',
    tech: ['Node.js', 'React', 'Bootstrap', 'Docker', 'AWS', 'ExpressJS', 'Modernizr', 'Webpack', 'jQuery', 'Adobe Illustrator'],
    hyperlink: 'https://github.com/patriot898/Folio',
    shortlink: 'www.github.com',
  },
  {
    title: 'Imgur Client Sales Stickers',
    image: {
      webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/imgur-giraffe.webp',
      jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/imgur-giraffe.jpg',
      alt: 'imgur giraffe sticker',
    },
    carouselImages: [
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/giraffe.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/giraffe.jpg',
        alt: 'mcdonalds imgur giraffe sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/disney.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/disney.jpg',
        alt: 'disney imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/ihop.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/ihop.jpg',
        alt: 'ihop imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/jack.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/jack.jpg',
        alt: 'jack in the box imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/kfc.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/kfc.jpg',
        alt: 'kentucky fried chicken imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/link.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/link.jpg',
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
