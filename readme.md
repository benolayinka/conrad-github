# API endpoints
## /bookmarks
Returns a list of current bookmarks

## /bookmarks/add/:id
Appends an id to the list of bookmarks and returns all bookmarks

## /bookmarks/delete/:id
Deletes an id if it exists and returns all bookmarks

## /search/:query
Returns a JSON object with repo id:url matching search query

# To install and run
From terminal, assuming git is installed:

```
git clone https://github.com/benolayinka/conrad-github.git
```

will clone in to directory conrad-github, creating the directory if it does not exist.

```
cd conrad-github
npm install
npm start
```

will serve the API at the default port 3000. Visit ```localhost:3000/search/tetris``` to see a list of tetris related repos.

# Testing
Some sample tests for bookmarking are included in tests/tests.js. These use the Mocha and Chai frameworks, and are intended only as a placeholder for better tests. Bookmarking does not require https or cors access to github, but search queries do.

```
npm run test
```

will run the example tests.

# Environment variables & config
```npm start``` preloads variables from a .env file at the root of the project. Normally, these should not be committed, but in this case they contain no secrets, so I have committed the env file. PORT specifies a port for express to listen on. NODE_ENV currently does nothing.
