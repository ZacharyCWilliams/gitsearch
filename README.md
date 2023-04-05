# GitSearch

Introducing GitSearch: an elegant user interface that lets you search for GitHub profiles using the GitHub REST API. It displays cards with linked GitHub repos you can click on and view. It paginates the list of repositories, lets you filter and sort through them. It also pulls autocomplete suggestions from the API.

[Click Here to see a live version of GitSearch](https://gitsearch-32238.web.app/)

![GitSearch](./src/assets/readme.png "GitSearch")

## Features

* Search for GitHub profiles
* Profile autocomplete suggestions
* Displays a list of the profiles GitHub repositories
* Paginate the list of repositories
* Filter and sort repositories
* Enterprise level folder structure (Clean & Organized)
* Custom useClickOutside and useDebounce hooks
* TypeScript, React, and Tailwind used for building components
* React Testing Library and Jest used for testing

## Getting Started

1. Clone the repository:

```
git clone https://github.com/zacharycwilliams/gitsearch.git
```

2. Install the dependencies:

```
cd gitsearch && npm install
```

3. Start the development server:

```
npm start
```

4. View project at: 
```
http://localhost:3000
```

5. Run tests:

```
npm run test
```

## Ideas for New Features

I had a lot of fun building this out. If I was to extend this project I might add the following features:

**Search Filtering:** Once a profile has been pulled up I'd like to implement an input filter that lets you search through a profile's repositories for a specific repo you might be looking for

**User Authentication Combined With Themes:** Allow users to sign in with their GitHub account to see their own repositories and interface with the Github api using a variety of themes (dark mode ftw)

**Data Visualizations:** Create visualizations of respository and profile data. I'm thinking charts or graphs that show repository activity, contributors, and other insights.

**Rankings:** Once data visualizations are built out we can combine them with rankings. Pull multiple profiles or repositories and compare them on a graph. Eg. Profile 1 had 345 contributions in the last year. Profile 2 had 415. We see both profiles charted out on a graph side by side or we add a rankings list.

**Bookmarking:** Now that users are signed in they can begin saving things to their profile, like bookmarks. Halfway through browsing a repo and your phone rings? No worries! Bookmark it and you can return when you have more free time.

**Profile Tracking:** Track a profile and get push notifications sent directly to you whne that profile updates a repo. Alternatively, we could just build out a Following activity dashboard that shows what all your friends are up to