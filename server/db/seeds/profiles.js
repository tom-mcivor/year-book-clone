exports.seed = async function (knex) {
  await knex('profiles').insert([
    {
      id: 1,
      book_id: 1,
      name: 'Gerard',
      image: '/images/gerard.jpeg',
      auth0_id: 'authtestid1',
      quote: 'Everything sucks',
      blurb: 'Gerard is great and likes pineapples.',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/gerardpaapu',
    },
    {
      id: 2,
      book_id: 2,
      name: 'Rohan',
      image: '/images/rohan.jpeg',
      auth0_id: 'authtestid2',
      quote: 'Do do dooo',
      blurb: 'Rohan is great and likes cats.',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/rohan-fowlerharper',
    },
    {
      id: 3,
      book_id: 3,
      name: 'Ysabel',
      image: '/images/ysabel.jpeg',
      auth0_id: 'authtestid3',
      quote: `Hey ya'll`,
      blurb: 'Ysabel is great and dislikes pineapples.',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/ysabel-guiang',
    },
    {
      id: 4,
      book_id: 4,
      name: 'Jatin',
      image: '/images/jatin.jpeg',
      auth0_id: 'authtestid4',
      quote: `Some great dad-joke`,
      blurb: 'Jatin is great and likes dad-jokes.',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/jatin-puri-coder',
    },
    {
      id: 5,
      book_id: 1,
      name: 'Anna',
      image: '/images/anna.jpg',
      auth0_id: 'authtestid5',
      quote: '',
      blurb: '',
      linkedin_url: 'https://www.linkedin.com/in/qiannanli',
      twitter_url: '',
      instagram_url: 'https://www.instagram.com/land_wind_sea',
      facebook_url: '',
      github_url: 'https://github.com/anna-li-22 ',
    },
    {
      id: 6,
      book_id: 1,
      name: 'Ben',
      image: '/images/frank.jpg',
      auth0_id: 'authtestid6',
      quote: 'Sam!',
      blurb: '',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/ben-bwilly-williams ',
    },
    {
      id: 7,
      book_id: 1,
      name: 'James',
      image: '/images/james.jpg',
      auth0_id: 'authtestid7',
      quote: '',
      blurb: '',
      linkedin_url: 'https://www.linkedin.com/in/jameskoay/',
      twitter_url: '',
      instagram_url: 'https://www.instagram.com/honey_what/',
      facebook_url: '',
      github_url: 'https://github.com/james-koay ',
    },
    {
      id: 8,
      book_id: 1,
      name: 'Razel',
      image: '/images/razel.png',
      auth0_id: 'authtestid8',
      quote: 'Hi everyone',
      blurb: '',
      linkedin_url:
        'https://www.linkedin.com/in/razel-blaza-galbraith-18916531/',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/razel-galbraith',
    },
    {
      id: 9,
      book_id: 1,
      name: 'Tom',
      image: '/images/tom.png',
      auth0_id: 'authtestid9',
      quote: '',
      blurb: '',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/tom-mcivor ',
    },
    {
      id: 10,
      book_id: 1,
      name: 'Yumi',
      image: '/images/yumi.jpg',
      auth0_id: 'authtestid10',
      quote: '',
      blurb: '',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: 'https://www.instagram.com/mimirin101/',
      facebook_url: '',
      github_url: 'https://github.com/yumi-wang',
    },
    {
      id: 11,
      book_id: 4,
      name: 'Ben & Sam & Frank',
      image: '/images/sam-womble.jpg',
      auth0_id: 'authtestid6',
      quote: '',
      blurb: '',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/ben-bwilly-williams ',
    },
    {
      id: 12,
      book_id: 3,
      name: 'James',
      image: '/images/james.jpg',
      auth0_id: 'authtestid7',
      quote: '',
      blurb: '',
      linkedin_url: 'https://www.linkedin.com/in/jameskoay/',
      twitter_url: '',
      instagram_url: 'https://www.instagram.com/honey_what/',
      facebook_url: '',
      github_url: 'https://github.com/james-koay ',
    },
    {
      id: 13,
      book_id: 2,
      name: 'David',
      image: '/images/david.jpeg',
      auth0_id: 'authtestid11',
      quote: '',
      blurb: '',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/',
    },
    {
      id: 14,
      book_id: 1,
      name: 'Krissy',
      image: '/images/krissy.jpeg',
      auth0_id: 'authtestid12',
      quote: '',
      blurb: '',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/',
    },
    {
      id: 15,
      book_id: 2,
      name: 'Tria',
      image: '/images/tria.jpeg',
      auth0_id: 'authtestid13',
      quote: '',
      blurb: '',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/',
    },
    {
      id: 16,
      book_id: 4,
      name: 'Anna',
      image: '/images/anna.jpg',
      auth0_id: 'authtestid5',
      quote: '',
      blurb: '',
      linkedin_url: 'https://www.linkedin.com/in/qiannanli',
      twitter_url: '',
      instagram_url: 'https://www.instagram.com/land_wind_sea',
      facebook_url: '',
      github_url: 'https://github.com/anna-li-22 ',
    },
  ])
}
