/**
 * Translation file for English.
 */
export default {
  /**
   * Keys of `titles` must match their route name.
   */
  titles: {
    anime: {
      index: 'Explore Anime'
    },
    dashboard: 'Dashboard',
    'not-found': '404',
    'server-error': '500',
    users: {
      index: '{{user}}\'s Profile',
      library: '{{user}}\'s Library',
      lists: '{{user}}\'s List',
      reviews: '{{user}}\'s Reviews'
    },
    settings: 'Settings'
  },
  'auth-modal': {
    'sign-up': {
      submit: {
        base: 'Let\'s get some basic info first',
        first: 'Very witty - email is next!',
        second: 'Looks legit, how about a password?',
        last: 'Cool - Let\'s create that account'
      }
    }
  },
  media: {
    anime: {
      name: 'Anime',
      'show-type': {
        TV: 'TV',
        special: 'Special',
        ONA: 'OVA',
        OVA: 'ONA',
        movie: 'Movie',
        music: 'Music'
      }
    },
    manga: {
      name: 'Manga',
      'manga-type': {
        manga: 'Manga',
        novel: 'Novel',
        manhua: 'Manhua',
        oneshot: 'One-shot',
        doujin: 'Doujin'
      }
    },
    routes: {
      index: {
        filter: {
          year: 'Year',
          score: 'Score',
          streamers: 'Streamers (U.S.)',
          episodes: 'Episodes',
          rating: 'Rating',
          genres: 'Categories',
          search: 'Search by title, director, studio, or voice actor'
        }
      }
    }
  },
  library: {
    remove: 'Remove from Library',
    statuses: {
      anime: {
        all: 'All',
        current: 'Currently Watching',
        planned: 'Plan To Watch',
        completed: 'Completed',
        on_hold: 'On Hold',
        dropped: 'Dropped'
      },
      manga: {
        all: 'All',
        current: 'Currently Reading',
        planned: 'Plan To Read',
        completed: 'Completed',
        on_hold: 'On Hold',
        dropped: 'Dropped'
      }
    }
  },
  // Global header
  header: {
    library: 'Library',
    anime: 'Anime',
    manga: 'Manga',
    forums: 'Forums',
    apps: 'Apps',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    user: {
      profile: 'View Profile',
      settings: 'Settings',
      logout: 'Logout'
    }
  },
  // Users route text
  users: {
    following: 'Following',
    followers: 'Followers',
    follow: 'Follow',
    nav: {
      activity: 'Activity',
      library: 'Library',
      reviews: 'Reviews',
      lists: 'Lists'
    },
    edit: {
      editCover: 'Change your cover photo',
      aboutMe: 'About Me',
      linkedProfiles: 'Linked Profiles',
      about: {
        location: 'Location',
        locationPlaceholder: 'Where do you live?',
        birthday: 'Birthday',
        gender: 'Gender',
        genderOptions: {
          secret: 'It\'s a secret',
          male: 'Male',
          female: 'Female',
          custom: 'Custom'
        },
        genderCustom: 'Attack Helicopter',
        waifu: 'Waifu',
        waifuPlaceholder: 'Who is your waifu / husbando?',
        bio: 'Bio',
        bioPlaceholder: 'Tell the world your story.'
      },
      linkProfile: {
        connect: 'Connect to {{profile}}',
        disconnect: 'Disconnect from {{profile}}',
        toCrosspost: 'Connect to cross-post, find your friends and link to your profile.',
        toShowStreamAndLink: 'Connect to show when you\'re streaming and add a link to your profile.',
        toShowContentAndLink: 'Connect to automatically share your content and link to your account.',
        toAddLink: 'Enter your {{profile}} to add a link on your profile.',
        toShowLink: 'Link to your {{profile}} from your profile.',
        toShowStreaming: 'Show my followers when I\'m streaming.',
        toShowNewUploads: 'Share new content with your followers automatically.',
        placeholderProfile: '{{profile}} Profile URL',
        placeholderChannel: '{{profile}} Channel URL',
        placeholderDiscord: 'Discord Invite URL or DiscordTag#000',
      },
      availableProfiles: {
        web: 'Website',
        facebook: 'Facebook',
        twitter: 'Twitter',
        twitch: 'Twitch',
        youtube: 'Youtube',
        gplus: 'Google',
        steam: 'Steam',
        patreon: 'Patreon',
        tumblr: 'Tumblr',
        github: 'Github',
        instagram: 'Instagram',
        mobcrush: 'Mobcrush',
        raptr: 'Raptr',
        soundcloud: 'Soundcloud',
        discord: 'Discord',
        vimeo: 'Vimeo',
        dailymotion: 'Dailymotion',
        osu: 'Osu'
      },
      favorites: 'Favorites',
      favorite: {
        anime: 'Anime',
        manga: 'Manga',
        characters: 'Characters',
        remove: 'Remove Favorite?',
        add: 'Add Favorite',
        search: 'Search to add by title...'
      }
    },
    library: {
      library: '{{type}} Library',
      search: 'Search this library...',
      notes: 'Personal notes about {{title}}',
      public: 'Public',
      private: 'Private',
      rewatch: 'Rewatch',
      rewatched: 'Rewatched',
      times: 'times'
    }
  },
  // ember-power-select locale
  selects: {
    loading: 'Loading...',
    none: 'No results found',
    search: 'Type to search'
  },
  errors: {
    // ember-cp-validations default errors
    description: 'This field',
    inclusion: '{{description}} is not included in the list',
    exclusion: '{{description}} is reserved',
    invalid: '{{description}} is invalid',
    confirmation: '{{description}} doesn\'t match {{on}}',
    accepted: '{{description}} must be accepted',
    empty: '{{description}} can\'t be empty',
    blank: '{{description}} can\'t be blank',
    present: '{{description}} must be blank',
    collection: '{{description}} must be a collection',
    singular: '{{description}} can\'t be a collection',
    tooLong: '{{description}} is too long (maximum is {{max}} characters)',
    tooShort: '{{description}} is too short (minimum is {{min}} characters)',
    before: '{{description}} must be before {{before}}',
    after: '{{description}} must be after {{after}}',
    wrongDateFormat: '{{description}} must be in the format of {{format}}',
    wrongLength: '{{description}} is the wrong length (should be {{is}} characters)',
    notANumber: '{{description}} must be a number',
    notAnInteger: '{{description}} must be an integer',
    greaterThan: '{{description}} must be greater than {{gt}}',
    greaterThanOrEqualTo: '{{description}} must be greater than or equal to {{gte}}',
    equalTo: '{{description}} must be equal to {{is}}',
    lessThan: '{{description}} must be less than {{lt}}',
    lessThanOrEqualTo: '{{description}} must be less than or equal to {{lte}}',
    otherThan: '{{description}} must be other than {{value}}',
    odd: '{{description}} must be odd',
    even: '{{description}} must be even',
    positive: '{{description}} must be positive',
    date: '{{description}} must be a valid date',
    email: '{{description}} must be a valid email address',
    phone: '{{description}} must be a valid phone number',
    url: '{{description}} must be a valid url',
    // Custom errors
    user: {
      name: {
        invalid: 'This field must only contain letters, numbers, and underscores',
        numbers: 'This field must not be made up of numbers entirely',
        starts: 'This field must start with a letter or number'
      }
    }
  }
};
