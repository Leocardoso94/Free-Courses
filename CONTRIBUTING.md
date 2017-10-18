# Contributing

First of all, thank you for taking the time to contribute! :+1::tada:

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Guide to add new courses

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
            "flag of the language" // this is optional
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

## Code of Conduct

Check [Code of Conduct](https://github.com/Leocardoso94/Free-Courses/blob/master/CODE_OF_CONDUCT.md)

## Contributors:

Check all the contributors here: https://freecourses.github.io/#/contribute
