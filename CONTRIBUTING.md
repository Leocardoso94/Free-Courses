# Contributing

First of all, thank you for taking the time to contribute! :+1::tada:

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Guide to add new courses

### Fill this Google Form

Add your course by filling this [Google Form](https://goo.gl/forms/S3AJKJlYPj9MqQj93)

### Add JSON Object in code

To add new course please follow steps:

1. Fork this repo
2. Go to the folder `/src/data`
3. Open the `couses.json`
4. Add a new JSON Object, Example as follows:

```
   {
        "title": "title of course",
        "author": "Author of course",
        "language": "language of course",
        "flags": "flag of the language" // this is optional        ,
        "categories": "category 1,  category 2",
        "link": "https://linkOfCouse.com/",
        "level": "the level of course",
        "description": "a short description of course",
        "image:" "https://linkToimage.com/image.png" // this is optional
    },
    {
        "title": "JavaScript30",
        "author": "Wes Bos",
        "language": "English",
        "flags": "flag-icon-us",
        "categories": "javascript",
        "link": "https://javascript30.com/",
        "level": "Beginner - Intermediate",
        "image": "",
        "description": "Beginner to Intermediate developers and designers who want to become comfortable with both JavaScript fundamentals and working in the DOM without a library."
    }
```

Flag icons can be found here: [flag-icon-css](https://github.com/lipis/flag-icon-css)

To add a new category:

1. Fork this repo
2. Go to the folder `/src/data`
3. Open the `categories.json`
4. Add a new JSON Object, Example as follows:

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

Icon classes can be found here: [Devicon](http://konpa.github.io/devicon/) or [Devicon Cheatsheet](http://vorillaz.github.io/devicons/#/cheat)


## Environment setup

### To run locally

* You'll need to have [bower](https://bower.io/) and [node](https://nodejs.org/en/) installed in your system.

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

* Open the Web browser to `http://localhost:8080/`

### To build the Production package

```
npm run build
```

### ESLint
There is a `.eslintrc` config for ESLint ready with React plugin.

To run linting, run:

```
npm run lint
```

## Code of Conduct

Check [Code of Conduct](https://github.com/Leocardoso94/Free-Courses/blob/master/CODE_OF_CONDUCT.md)
