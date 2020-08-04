const projects = [
  {
    title: 'PlateThis Reservation Calendar',
    image: {
      webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.webp',
      jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.png',
      alt: 'reservation calendar',
    },
    carouselImages: [
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.png',
        alt: 'reservation calendar',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/reservation2.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/reservation2.png',
        alt: 'reservation calendar',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/res-cal-formatted.gif',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/res-cal-formatted.gif',
        alt: 'reservation calendar gif',
      },
    ],
    shortDescription: 'A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability.',
    longDescription: 'A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability. Uses a custom-built date management library similar to Moment.js for greater control over date parsing and formatting. Easily deployable to AWS or similar cloud hosting services through Docker containerization. Uses GZIP text compression and Server-Side Rendering for optimal content delivery and SEO best practices.',
    tech: ['React', 'Node.js', 'Docker', 'Express', 'MongoDB', 'jQuery', 'Styled Components', 'Webpack'],
    hyperlink: '',
    shortlink: 'www.github.com',
  },
  {
    title: 'Imgur Client Sales Stickers',
    image: {
      webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/imgur-giraffe.webp',
      jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/imgur-giraffe.png',
      alt: 'imgur giraffe sticker',
    },
    carouselImages: [
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/giraffe.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/giraffe.png',
        alt: 'mcdonalds imgur giraffe sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/disney.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/disney.png',
        alt: 'disney imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/ihop.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/ihop.png',
        alt: 'ihop imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/jack.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/jack.png',
        alt: 'jack in the box imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/kfc.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/kfc.png',
        alt: 'kentucky fried chicken imgur sticker',
      },
      {
        webp: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/link.webp',
        jpeg: 'https://folio-pics-kmr.s3-us-west-1.amazonaws.com/link.png',
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
