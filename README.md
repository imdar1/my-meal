# My Meal

My meal is a simple application to find recipes of your favorite meals. This app is built using [React Slingshot starter kit](https://github.com/coryhouse/react-slingshot). To find out more about React Slingshot, please check the official repo or this [FAQ](https://github.com/coryhouse/react-slingshot/blob/master/docs/FAQ.md).

---

## Get Started

1. **Initial Machine Setup**

    First time running? Then complete the [Initial Machine Setup](#initial-machine-setup).

2. **Run the setup script**

    `npm run setup`

3. **Run the example app**

    `npm start -s`

    Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

## Initial Machine Setup

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**

    Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

2. **Install [Git](https://git-scm.com/downloads)**.

3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

4. Complete the steps below for your operating system:

    ### macOS

    * Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman` or fswatch via `brew install fswatch` to avoid [this issue](https://github.com/facebook/create-react-app/issues/871) which occurs if your macOS has no appropriate file watching service installed.

    ### Linux

    * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).

        `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

    ### Windows
    
    * **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
    * **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.
    
      [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.
      
      If you already have Visual Studio installed:
      Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.
      The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

---

## Technologies

- Required technologies:
    1. Redux
    
        Used to store meals that are set as favorite using `array`. 

    2. styled-component

        Used in [`CustomNavbar.js`](src/components/custom/CustomNavbar.js).

    3. Material UI

        Used within most of components in this project.

    4. Tailwind CSS

        Used in [`App.js`](src/components/App.js), [`HomePage.js`](src/components/HomePage.js), [`MealDetailPage.js`](src/components/MealDetailPage.js), [`NotFoundPage.js`](src/components/NotFoundPage.js), and [`FavoriteMealsPage.js`](src/components/containers/FavoriteMealsPage.js) to help building the page layout.

    5. Function component

        Used to build pages and some custom components.

- Other technologies used can be seen [here](https://github.com/coryhouse/react-slingshot#technologies).

---

## Screenshots

- Home page

- Detail page

- Filter page

- Favorites page
