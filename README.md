# Free Courses to Developers [![Build Status](https://travis-ci.org/Leocardoso94/Free-Courses.svg?branch=master)](https://travis-ci.org/Leocardoso94/Free-Courses)

https://freecourses.github.io/

Free courses to developers is a platform where you can find several courses on development totally for free.

If you know a free course that is not listed, please contribute. See how:

1. Fork this project
2. Go to the folder /src/data
3. And add a new object to the .json files

To add a new course
1. Open the couses.json
2. Add a new object, example:
```
   {
        "title": "title of course",
        "author": "Author of course",
        "language": "language of course",
        "flags": [
            "flag of the language"
        ],
        "categories": [
            "category 1",
            "category 2"
        ],
        "link": "https://linkOfCouse.com/",
        "level": "the level of course",
        "description": "a short description of course",
        "image:" "https://linkToimage.com/image.png" // this is optional
    },
    {
        "title": "JavaScript30",
        "author": "Wes Bos",
        "language": "English",
        "flags": [
            "flag-icon-us"
        ],
        "categories": [
            "javascript"
        ],
        "link": "https://javascript30.com/",
        "level": "Beginner - Intermediate",
        "image": "",
        "description": "Beginner to Intermediate developers and designers who want to become comfortable with both JavaScript fundamentals and working in the DOM without a library."
    }
```

Flag icons can be found here: https://github.com/lipis/flag-icon-css  http://flag-icon-css.lip.is/

To add a new category
1. Open the categories.json
2. Add a new object example:
```
    {
        "title": "Title of Category",
        "icon": "icon of category"
    },
     {
        "title": "JavaScript",
        "icon": "devicon-javascript-plain colored"
    },
    {
        "title": "Sass",
        "icon": "devicons devicons-sass",
        "iconColor": "#ffa"
    }
```

Icon classes can be found here: http://konpa.github.io/devicon/ or http://vorillaz.github.io/devicons/#/cheat

### Contribute
Please contribute to the project if you know how to make it better, including this README :)

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### To run

* You'll need to have [bower](https://bower.io/) and [node](https://nodejs.org/en/) installed in your system.


* install the dependencies:

```
npm install && bower install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8080/`


### To build the production package

```
npm run build
```


### Eslint
There is a `.eslint.yaml` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```

