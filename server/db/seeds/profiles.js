exports.seed = async function (knex) {
  await knex('profiles').insert([
    {
      id: 1,
      book_id: 1,
      name: 'Gerard',
      image:
        'https://www.pianz.org.nz/wp-content/uploads/2016/03/pekin-duck.jpg',
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
      image:
        'https://www.pianz.org.nz/wp-content/uploads/2016/03/pekin-duck.jpg',
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
      image:
        'https://www.pianz.org.nz/wp-content/uploads/2016/03/pekin-duck.jpg',
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
      image:
        'https://www.pianz.org.nz/wp-content/uploads/2016/03/pekin-duck.jpg',
      auth0_id: 'authtestid4',
      quote: `Some great dad-joke`,
      blurb: 'Jatin is great and likes dad-jokes.',
      linkedin_url: '',
      twitter_url: '',
      instagram_url: '',
      facebook_url: '',
      github_url: 'https://github.com/jatin-puri-coder',
    },
  ])
}