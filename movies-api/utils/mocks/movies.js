const moviesMock = [
  {
    title: 'CQ',
    year: 2001,
    cover: 'http://dummyimage.com/130x249.png/ff4444/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1922,
    contentRating: 'PG-13',
    source: 'https://cbsnews.com/eleifend/pede.png',
    tags: ['Drama|Romance'],
  },
  {
    title: 'Spanish Earth, The',
    year: 2012,
    cover: 'http://dummyimage.com/143x154.jpg/dddddd/000000',
    description: `Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    Praesent _id massa _id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.`,
    duration: 1987,
    contentRating: 'PG-13',
    source: 'http://census.gov/volutpat.jsp',
    tags: ['Horror', 'Documentary', 'Drama|Romance'],
  },
  {
    _id: '5f240efcf373ccfcf8ec4750',
    title: 'Mean Streets',
    year: 1996,
    cover: 'http://dummyimage.com/176x226.bmp/dddddd/000000',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1947,
    contentRating: 'PG',
    source: 'http://auda.org.au/sapien/sapien/non/mi.png',
    tags: ['Comedy|Drama'],
  },
  {
    title: 'Drop Dead Gorgeous',
    year: 1968,
    cover: `http://dummyimage.com/170x206.jpg/cc0000/ffffff",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.`,
    duration: 1955,
    contentRating: 'R',
    source: 'http://prnewswire.com/aliquam/erat.html',
    tags: ['Thriller'],
  },
  {
    title: 'War and Peace (Voyna i mir)',
    year: 2003,
    cover: 'http://dummyimage.com/240x228.png/ff4444/ffffff',
    description: `Proin interdum mauris non ligula pellentesque ultrices. Phasellus _id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.`,
    duration: 1953,
    contentRating: 'G',
    source: 'https://fda.gov/non/velit/nec/nisi/vulputate/nonummy/maecenas.xml',
    tags: [
      'Crime|Drama|Fantasy|Film-Noir|Mystery|Romance',
      'Action|Comedy|Crime|Drama',
    ],
  },
  {
    title: 'Thérèse',
    year: 2009,
    cover: 'http://dummyimage.com/173x237.jpg/cc0000/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 1912,
    contentRating: 'NC-17',
    source: 'https://1688.com/varius/ut.html',
    tags: [
      'Drama|Film-Noir',
      'Comedy|Romance',
      'Action|Sci-Fi',
      'Comedy|Drama',
      'Comedy|Drama|Romance',
    ],
  },
  {
    title: 'Hunky Dory',
    year: 2012,
    cover: 'http://dummyimage.com/205x226.bmp/5fa2dd/ffffff',
    description: `Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.`,
    duration: 1968,
    contentRating: 'NC-17',
    source:
      'http://amazonaws.com/augue/aliquam/erat/volutpat/in/congue/etiam.png',
    tags: ['Action|Thriller', 'Action|Adventure', 'Drama|Romance|Sci-Fi'],
  },
  {
    title: 'Five Easy Pieces',
    year: 1997,
    cover: 'http://dummyimage.com/153x246.png/cc0000/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 2039,
    contentRating: 'PG',
    source: 'http://nhs.uk/maecenas/leo/odio/condimentum.jsp',
    tags: ['Adventure|Animation|Children|Drama|Fantasy'],
  },
  {
    title: 'Other, The',
    year: 1994,
    cover: 'http://dummyimage.com/242x134.jpg/ff4444/ffffff',
    description:
      'Praesent _id massa _id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1935,
    contentRating: 'G',
    source: 'https://nba.com/sit.png',
    tags: ['Crime|Drama|Mystery|Thriller'],
  },
  {
    title: 'Todos eran culpables',
    year: 1995,
    cover: 'http://dummyimage.com/167x148.jpg/ff4444/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 1901,
    contentRating: 'PG-13',
    source: 'http://google.cn/at/turpis/donec/posuere/metus/vitae/ipsum.jsp',
    tags: ['Action|Adventure|Drama'],
  },
];

function filteredMoviesMocks(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

function findOneMovieMock(id) {
  return moviesMock.find((movie) => movie.id === id);
}

class MoviesServiceMock {
  async getMovies() {
    return await Promise.resolve(moviesMock);
  }

  async getMovie({ movieId }) {
    return await Promise.resolve(findOneMovieMock(movieId));
  }

  async createMovie() {
    return await Promise.resolve(moviesMock[2]);
  }

  async updateMovie() {
    return await Promise.resolve(moviesMock[2]);
  }

  async deleteMovie() {
    return await Promise.resolve(moviesMock[2]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMocks,
  MoviesServiceMock,
};
