export const facebook = {
  clientID: 'PASTE_CLIENT_ID_HERE',
  clientSecret: 'PASTE_CLIENT_SECRET_HERE',
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export const google = {
  clientID:
    '721194900166-jb0thegtdqaue3vuj5fo4auu80p5cbu4.apps.googleusercontent.com',
  clientSecret: 'H2tRN7xREzEFzAh3SpUA5gl5',
  callbackURL: 'http://localhost:3000/auth/google/callback',
};
