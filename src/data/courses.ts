import snakeCase from "lodash.snakecase";

export interface Course {
  title: string;
  description: string;
  link: string;
  author: string;
  level: string;
  categories: string[];
  language: string;
  image?: string;
  flags: string[];
  id: string;
}

const courses: Course[] = [
  {
    title: "A Complete Beginner's Guide to Django",
    description:
      "From installation, preparation of the development environment, models, views, templates, URLs to more advanced topics such as migrations, testing, and deployment.",
    link: "https://simpleisbetterthancomplex.com/series/",
    author: "Vitor Freitas",
    level: "Beginner",
    categories: "django,python",
    language: "English",
    image:
      "https://simpleisbetterthancomplex.com/media/series/beginners-guide/1.11/featured.jpg",
    flags: "flag-icon-us",
  },
  {
    title: "Django Girls Tutorial",
    description:
      "From the basics of python and django to your application deployed on web!",
    link: "https://tutorial.djangogirls.org/",
    author: "Django Girls",
    level: "Beginner - Intermediate",
    categories: "django,python",
    language: "English - Français - 简体中文 - Polski - Українська - Português",
    image: "https://tutorial.djangogirls.org/pt/images/application.png",
    flags: "flag-icon-us,flag-icon-fr,flag-icon-es,flag-icon-cn,flag-icon-pl",
  },
  {
    title: "Django Tutorial for Beginners",
    description:
      "Official tutorials for thenewboston Django Tutorials for Beginners series!",
    link:
      "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBlmzzFcLgDhKTTfNLfX1IK",
    author: "thenewboston",
    level: "Beginner",
    categories: "django,python",
    language: "English",
    image:
      "https://i.ytimg.com/vi/qgGIqRFvFFk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA-pkntIGBhO0V9Ni6L6sEGcIDIdA",
    flags: "flag-icon-us",
  },
  {
    title: "Getting Started with React",
    description: "Basic Intro to React",
    link: "https://scotch.io/courses/getting-started-with-react",
    author: "Scotch.io",
    level: "Beginner",
    categories: "react",
    language: "English",
    image:
      "https://cdn.scotch.io/1/QYfj3qQSSLywYDvBVrQu_getting-started-with-react.png.jpg",
    flags: "flag-icon-us",
  },
  {
    title: "Getting Started With Redux",
    description: "Learn how to manage JavaScript state with Redux.",
    link: "https://egghead.io/courses/getting-started-with-redux",
    author: "Dan Abramov",
    level: "Beginner - Intermediate",
    categories: "javascript,redux",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "The Road to learn React",
    description: "Your journey to master plain React",
    link: "https://roadtoreact.com/",
    author: "Robin Wieruch",
    level: "Beginner",
    categories: "javascript,react",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "The Ultimate GIT 5-day Challenge",
    description:
      "A quick way to determine if working with GIT is something you want to learn more about.",
    link: "https://www.udemy.com/course/the-ultimate-git-5-day-challenge/",
    author: "Udemy",
    level: "Beginner",
    categories: "Git",
    language: "English",

    flags: "flag-icon-us",
  },
  {
    title: "Git e Github para iniciantes",
    description:
      "Tudo que você precisa para começar a versionar seus arquivos e contribuir com a comunidade opensource.",
    link: "https://www.udemy.com/git-e-github-para-iniciantes/",
    author: "Willian Justen",
    level: "Beginner",
    categories: "git",
    language: "Portuguese",
    image: "https://udemy-images.udemy.com/course/480x270/849470_788a_2.jpg",
    flags: "flag-icon-br",
  },
  {
    title: "SASS Tutorial",
    author: "The Net Ninja",
    language: "English",
    flags: "flag-icon-us",
    categories: "Sass",
    link: "https://www.thenetninja.co.uk/courses/sass-tutorial",
    level: "Beginner - Intermediate",
    image: "",
    description:
      "Do all sorts of cool stuff with it such as nesting CSS rules, creating variables, mixins and much more, to make working with CSS that little bit easier and more fun.",
  },
  {
    title: "Node.js Crash Course",
    author: "Brad Traversy",
    language: "English",
    flags: "flag-icon-us",
    categories: "Node",
    link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2815s",
    level: "Beginner - Intermediate",
    description:
      "In this Crash course we will explore Node.js fundamentals including modules such as path, url, fs, events and we will create an HTTP server from scratch without Express and deploy to Heroku.",
  },
  {
    title: "HTML & CSS",
    description:
      "Learn how to create websites by structuring and styling your pages with HTML and CSS.",
    link: "https://www.codecademy.com/tracks/web",
    author: "Codecademy",
    level: "Beginner",
    categories: "html,css",
    language: "English - Portuguese(Brazil) - Español - Français",
    flags: "flag-icon-us flag-icon-br,flag-icon-es,flag-icon-fr",
  },
  {
    title: "HTML & CSS",
    description: "Friendly web development tutorials for complete beginners.",
    link: "https://internetingishard.com",
    author: "Interneting Is Hard",
    level: "Beginner",
    categories: "html,css",
    language: "English",
    image:
      "https://internetingishard.com/img/interneting-is-hard-logo-97b225.svg",
    flags: "flag-icon-us",
  },
  {
    title: "Vue.js 2 Tutorial",
    author: "The Net Ninja",
    language: "English",
    flags: "flag-icon-us",
    categories: "Vue",
    link: "https://www.thenetninja.co.uk/courses/vuejs-2-tutorial",
    level: "Beginner - Intermediate",
    image: "",
    description:
      "In this tutorial we will go from the ground up and explore how to create fully-fledged Vue applications with the Vue CLI and other features such as the Vue router.",
  },
  {
    title: "Intro to HTML and CSS",
    description: "Learn to think like a front end developer",
    link: "https://www.udacity.com/course/intro-to-html-and-css--ud304",
    author: "Udacity",
    level: "Beginner",
    categories: "html,css",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Intro to Javascript",
    description:
      "Learn the fundamentals of Javascript, the most popular programming language in web development",
    link: "https://www.udacity.com/course/intro-to-javascript--ud803",
    author: "Udacity",
    level: "Beginner",
    categories: "javascript",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Introduction To JavaScript",
    description:
      "You will learn introductory level object oriented programming using ES6 JavaScript.",
    link: "https://www.codecademy.com/learn/introduction-to-javascript",
    author: "Codecademy",
    level: "Beginner",
    categories: "javascript",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Java Tutorial for Complete Beginners",
    description: "Learn to program using the Java programming language",
    link: "https://www.udemy.com/java-tutorial/",
    author: "John Purcell",
    level: "Beginner",
    categories: "Java",
    language: "English",
    image: "https://udemy-images.udemy.com/course/240x135/24823_963e_14.jpg",
    flags: "flag-icon-us",
  },
  {
    title: "JavaScript DOM Crash Course",
    description: "A crash course focuses on the DOM.",
    link:
      "https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s",
    author: "Traversy Media",
    level: "Beginner",
    categories: "javascript",
    language: "English",
    image: "https://i.ytimg.com/vi/wK2cBMcDTss/maxresdefault.jpg",
    flags: "flag-icon-us",
  },
  {
    title: "JavaScript30",
    description:
      "Beginner to Intermediate developers and designers who want to become comfortable with both JavaScript fundamentals and working in the DOM without a library.",
    link: "https://javascript30.com/",
    author: "Wes Bos",
    level: "Beginner - Intermediate",
    categories: "javascript",
    language: "English",
    image: "https://s3.amazonaws.com/js30-cdn/sky--purple-kracked.jpg",
    flags: "flag-icon-us",
  },
  {
    title: "Git & Github Tutorial",
    author: "The Net Ninja",
    language: "English",
    flags: "flag-icon-us",
    categories: "Git",
    link: "https://www.thenetninja.co.uk/courses/git-github-tutorial",
    level: "Beginner - Intermediate",
    image: "",
    description:
      "Git is a version control system that will make your life easier when trying to keep track of changes you make, and versions of your code.",
  },
  {
    title: "Laravel 5 Fundamentals",
    description: "A beginner level introduction to the Laravel framework",
    link: "https://laracasts.com/series/laravel-5-fundamentals",
    author: "Laracasts",
    level: "Beginner",
    categories: "laravel",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn ES6 (ECMAScript 2015)",
    description:
      "This course takes a look at some of the new features that JavaScript has available with ES6 (ECMAScript 2015). It is a 'montage' from several instructors.",
    link: "https://egghead.io/courses/learn-es6-ecmascript-2015",
    author: "Egghead.io",
    level: "Intermediate",
    categories: "javascript,es6",
    language: "English",
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/049/full/EGH_LearnES6_Final.png?1496436434",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Python",
    description:
      "This course is a great introduction to both fundamental programming concepts and the Python programming language. By the end, you'll be familiar with Python syntax and you'll be able to put into practice what you'll have learned in a final project you'll develop locally.",
    link: "https://www.codecademy.com/learn/learn-python",
    author: "Codecademy",
    level: "Beginner - Intermediate",
    categories: "python",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Python in One Video",
    author: "Derek Banas",
    language: "English",
    categories: "python",
    link: "https://www.youtube.com/watch?v=H1elmMBnykA&t=6s",
    level: "Beginner - Intermediate",
    description: "Ultimate Python tutorial in One Video by Derek Banas",
    flags: "flag-icon-us",
  },
  {
    title: "AngularJS For Beginners",
    description:
      "Create Web Applications, Create Hybrid Apps for Android & iOS,Create single page applications",
    link: "https://www.udemy.com/angularjs-for-beginners-udemy/",
    author: "Stone River eLearning",
    level: "Beginner - Intermediate",
    categories: "AngularJS",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Redux",
    description: "Dig deeper into React while learning Redux and React Router.",
    link: "https://learnredux.com/",
    author: "Wes Bos",
    level: "Beginner - Intermediate",
    categories: "react,redux",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Sass",
    description:
      "This course will teach you how to use nesting, variables, mixins, placeholders, and functions to write more expressive and reusable styles. At the end of the course, you will be able to transition a CSS codebase to SCSS and style multiple websites.",
    link: "https://www.codecademy.com/learn/learn-sass",
    author: "Codecademy",
    level: "Beginner",
    categories: "css,sass",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Vue 2: Step By Step",
    description: "A hands on approach to learning VueJS",
    link: "https://laracasts.com/series/learn-vue-2-step-by-step",
    author: "Laracasts",
    level: "Beginner",
    categories: "javascript,vue",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Make a Website",
    description:
      "You'll build four simple websites using web development fundamentals, including HTML5/CSS3 and Bootstrap. You'll learn to understand and modify the structure of basic website, as well as how to change the way a page looks and is laid out.",
    link: "https://www.codecademy.com/learn/make-a-website",
    author: "Codecademy",
    level: "Beginner",
    categories: "html,css",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Node JS Tutorial for Beginners",
    description:
      "Yo ninjas, in this Node JS tutorial series for beginners, we'll be walking step by step through what Node JS is, and how it all works. We'll also be creating a Node JS application from scratch using express, and hook it up to MongoDB - a noSQL database perfect for using with Node.",
    link:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp",
    author: "The Net Ninja",
    level: "Beginner - Intermediate",
    categories: "node,express,mongodb",
    language: "English",
    image:
      "https://i.ytimg.com/vi/w-7RQ46RgxU/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB5gRmx7HePeS9235lqbx2uoJq5bA",
    flags: "flag-icon-us",
  },
  {
    title: "React 16 Definitivo",
    description: "Tudo o que você precisa saber sobre a versão 16 do React",
    link: "https://www.udemy.com/react-16/",
    author: "Diego Martins de Pinho, Code Prestige",
    level: "Intermediate",
    categories: "react",
    language: "Portuguese",
    image: "https://udemy-images.udemy.com/course/240x135/1378412_4da7_2.jpg",
    flags: "flag-icon-br",
  },
  {
    title: "React-fundamentals - Start Learning React",
    description:
      "React is a javascript library for building user interfaces from the fine folks at Facebook & Instagram. It strictly focuses on the 'V' in your MVC applications, and touts a blazing fast virtual DOM diff implementation. This series will explore the basic fundamentals of React to get you started.",
    link: "https://egghead.io/courses/react-fundamentals",
    author: "Egghead.io",
    level: "Beginner - Intermediate",
    categories: "react",
    language: "English",
    image:
      "http://www.fellyph.com.br/blog/wp-content/uploads/2016/06/react-js.png",
    flags: "flag-icon-us",
  },
  {
    title: "Server-side Development with NodeJS, Express and MongoDB",
    description: "A complete course based on NodeJS.",
    link: "https://www.coursera.org/learn/server-side-nodejs",
    author: "The Hong Kong University of Science and Technology",
    level: "Beginner - Intermediate",
    categories: "MongoDB,Express,node",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Social Network",
    description:
      "A social network built with Laravel and Bootstrap. Authenticate, add and accept friend requests, post to a timeline, reply to and like friend's statuses.",
    link: "https://www.codecourse.com/lessons/social-network",
    author: "Alex PHP Academy",
    level: "Beginner - Intermediate",
    categories: "php,html,laravel",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "PHP Tutorials",
    author: "mmtuts",
    language: "English",
    flags: "flag-icon-us",
    categories: "PHP",
    link:
      "https://www.youtube.com/playlist?list=PL0eyrZgxdwhwBToawjm9faF1ixePexft-",
    level: "Beginner - Intermediate",
    image: "",
    description:
      "Beginner to Intermediate developers, who wants to do comfortable backend programming",
  },
  {
    title: "Tango With Django",
    description:
      "Hands-on guide for begginers to learn Django. Past editions free.",
    link: "http://www.tangowithdjango.com",
    author: "Leif Azzopardi",
    level: "Beginner",
    categories: "Python,django",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Vue JS 2.0 - Mastering Web Apps",
    description:
      "Create the VueJS 2.0 apps you always wanted. Build 5 apps, learn development secrets, VueRouter, Vuex, & more!",
    link:
      "https://www.udemy.com/vue-web-apps/?couponCode=GOHACKERS&pmtag=CTBO1202&siteID=MhbOGzq4cI4-kW.oXEWO9ehhdCszMpyOUw&LSNPUBID=MhbOGzq4cI4",
    author: "David Katz",
    level: "Beginner - Intermediate",
    categories: "javascript,vue",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Vue JS - Hexschool",
    description: "The VueJS course for for begginers.",
    link: "https://quip.com/N3iKAEDJEVmD",
    author: "Hexschool",
    level: "Beginner",
    categories: "vue",
    language: "正體中文",
    flags: "flag-icon-tw",
  },
  {
    title: "Swift 3 and Xcode 8",
    description: "App Development for IOS, Spring 2017",
    link:
      "https://www.youtube.com/watch?v=ilQ-tq772VI&list=PLPA-ayBrweUz32NSgNZdl0_QISw-f12Ai",
    author: "Paul Hegarty - Stanford",
    level: "Beginner, Intermediate",
    categories: "Swift",
    language: "English",

    flags: "flag-icon-us",
  },
  {
    title: "React JS and Redux - Mastering Web Apps",
    author: "David Katz",
    language: "English",
    categories: ["javascript", "react", "redux"],
    link:
      "https://www.udemy.com/react-js-and-redux-mastering-web-apps/?couponCode=GOHACKERS2",
    level: "Beginner - Intermediate",
    flags: "flag-icon-us",
    description:
      "Create the React JS & Redux apps you always wanted. Build 4 projects, discover development tricks, and master React!",
  },
  {
    title: "Ruby on Rails para iniciantes",
    description: "Playlist do Curso de Ruby on Rails para Iniciantes",
    link:
      "https://www.youtube.com/playlist?list=PLe3LRfCs4go-mkvHRMSXEOG-HDbzesyaP",
    author: "Jackson Pires",
    level: "Beginner",
    categories: "Rails",
    language: "Portuguese",

    flags: "flag-icon-br",
  },
  {
    title: "Try Docker",
    description:
      "Dive into the basics of Docker and take control of your development environment with containers.",
    link: "https://www.codeschool.com/courses/try-docker",
    author: "Jon Friskics",
    level: "Beginner - Intermediate",
    categories: "Docker",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Swift - The Ultimate Guide To Mac and iOS Development",
    description:
      "Learn how to use Swift, a language that is created by the world's largest company 'Apple'.",
    link:
      "https://www.udemy.com/swift-ios-mac/?couponCode=SWIFT_FREE&siteID=UeOSfRUOS3E-gGVwlTaKcegJYuXJhwOQjQ&LSNPUBID=UeOSfRUOS3E",
    author: "Frahaan Hussain",
    level: "Beginner - Intermediate",
    categories: "Swift",
    language: "English",
    flags: "flag-icon-us",
    image: "https://udemy-images.udemy.com/course/240x135/1368248_af89.jpg",
  },
  {
    title: "Complete React Tutorial",
    description:
      "Basics of React, from the ground up, right through to creating full SPA's using Create React App, the React Router (v4) and Redux.",
    link:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG",
    author: "The Net Ninja",
    level: "Beginner - Intermediate",
    categories: "React",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Webpack 2 from scratch",
    description:
      "Learn how to build web applications using Javascript's most popular build tool... Webpack 2",
    link: "https://www.udemy.com/learn-webpack-2-from-scratch/",
    author: "Robert Guss",
    level: "Beginner - Intermediate",
    categories: "Webpack",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Curso Angular 4",
    description: "Playlist do Curso de Angular 4/2",
    link:
      "https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G",
    author: "Loiane Groner",
    level: "Beginner - Intermediate",
    categories: "Angular",
    language: "Portuguese",
    flags: "flag-icon-br",
  },
  {
    title: "Curso de Materialize CSS",
    description:
      "O curso consiste na criação de sites responsivos usando as principais ferramentas do framework Materialize CSS. Abordamos desde o básico ao avançado, ou seja, a configuração do ambiente e a instalação do framework até a criação de um site responsivo e agradável de forma correta.",
    link:
      "https://www.youtube.com/watch?v=khT9AyUuLOs&list=PLwXQLZ3FdTVGJxKF3ShplF8nMuuxldlEk",
    author: "Node Studio Treinamentos",
    level: "Beginner",
    categories: "Materialize,CSS",
    language: "Portuguese - Brazil",

    flags: "flag-icon-br",
  },
  {
    title: "Materialize Tutorial",
    author: "The Net Ninja",
    language: "English",
    flags: "flag-icon-us",
    categories: "Materialize",
    link: "https://www.thenetninja.co.uk/courses/materialize-tutorial",
    level: "Beginner - Intermediate",
    image: "",
    description:
      "Add Materialize to our web projects to quickly create clean & great-looking websites very quickly, with features such as collapsable menus, popups, tabs, a grid system, buttons and much more.",
  },
  {
    title: "Curso CSS3 com Sass e Compass",
    description:
      "Overview sobre essa nova maneira de escrever CSS que é o Sass e também um overview rápido sobre o framework de CSS3 Compass. Como essa aula é apenas um overview, não entrei em detalhes, vamos aprender todos os detalhes no decorrer do curso.",
    link: "https://www.youtube.com/watch?v=D9OpSGViDgA&list=PL3C05B7A66AC502CF",
    author: "Loiane Groner",
    level: "Beginner",
    categories: "Sass,CSS",
    language: "Portuguese - Brazil",

    flags: "flag-icon-br",
  },
  {
    title: "Intro to Python for Data Science",
    description:
      "Python is a general-purpose programming language that is becoming more and more popular for doing data science. Companies worldwide are using Python to harvest insights from their data and get a competitive edge. Unlike any other Python tutorial, this course focuses on Python specifically for data science. In our Intro to Python class, you will learn about powerful ways to store and manipulate data as well as cool data science tools to start your own analyses. Enter DataCamp’s online Python curriculum.",
    link: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
    author: "Filip Schouwenaars",
    level: "Beginner",
    categories: "python",
    language: "English",
    image:
      "https://assets.datacamp.com/production/course_735/shields/original/shield_image_course_735_20171006-213-1p9i00n?1507253517",
    flags: "flag-icon-us",
  },
  {
    title: "Python3 na Web com Django",
    description:
      "Como desenvolver incríveis aplicações web de forma rápida. Desenvolva suas próprias aplicações web com Python 3 e Django. Tenha noção de como planejar o desenvolvimento de uma aplicação web. Entendenda como funciona uma aplicação web com Python.",
    link:
      "https://www.udemy.com/course/python-3-na-web-com-django-basico-intermediario/",
    author: "Gileno Alves Santa Cruz Filho",
    level: "Beginner, Intermediate",
    categories: "python",
    language: "Portuguese - Brazil",

    flags: "flag-icon-br",
  },
  {
    title: "Try Git",
    description:
      "Learn how to use Git by reviewing the basic concepts of Git version control. Try out this introductory course that was created with GitHub.",
    link: "https://www.codeschool.com/courses/try-git",
    author: "Gregg Pollack, Olivier Lacan",
    level: "Beginner",
    categories: "git",
    language: "English",
    image:
      "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/621/level-1-on-try-git-b54d1cd9fa940e4a3c1925056d38eca2.png",
    flags: "flag-icon-us",
  },
  {
    title: "MongoDB University",
    description:
      "Learn all MongoDB courses here and much more like how to integrate MongoDB with different technologies.",
    link: "https://university.mongodb.com",
    author: "MongoDB University",
    level: "Beginner, Intermediate, Advanced",
    categories: "mongodb,node",
    language: "English",
    image:
      "https://university.mongodb.com/static/images/svg/university-logo.svg",
    flags: "flag-icon-us",
  },
  {
    title: "Rails Casts",
    description:
      "RailsCasts is produced by Ryan Bates (rbates on Twitter and ryanb on GitHub). A free episode was be released on the first Monday of each month from 2007-2013, featuring tips and tricks with Ruby on Rails. The screencasts are short and focus on one technique so you can quickly move on to applying it to your own project. The topics target the intermediate Rails developer, but beginners and experts will get something out of it as well.",
    link: "http://railscasts.com/",
    author: "Ryan Bates",
    level: "Beginner, Intermediate, Advanced",
    categories: "Rails",
    language: "English",
    image:
      "http://railscasts.com/assets/railscasts_logo-7101a7cd0a48292a0c07276981855edb.png",
    flags: "flag-icon-us",
  },
  {
    title: "Learn CSS Layout",
    description:
      "This site teaches the CSS fundamentals that are used in any website's layout.I assume you already know what selectors, properties, and values are. And you probably know a thing or two about layout, though it may still be a rage-provoking activity for you. If you want to learn HTML and CSS from the beginning, you should check out this tutorial. Otherwise, let's see if we can save you some fury on your next project.",
    link: "http://learnlayout.com/",
    author: "Greg Smith",
    level: "Intermediate",
    categories: "CSS",
    language: "English, Portuguese - Brazil, Spanish, Italian, French, Others",
    image: "http://learnlayout.com/images/logo.png",
    flags: "flag-icon-us",
  },
  {
    title: "What The Flexbox?!",
    description:
      "The first 13 videos are aimed at understanding the fundamentals of Flexbox - we will take a deep dive into understanding rows, columns, axes, wrapping, alignment, centering and layout. The last 7 are code alongs where we will build everything from a navigation to a mobile app layout entirely with Flexbox!",
    link: "https://flexbox.io/",
    author: "Wes Bos",
    level: "Beginner, Intermediate",
    categories: "CSS",
    language: "English",
    image: "https://flexbox.io/images/WTF/covers/1.jpg",
    flags: "flag-icon-us",
  },
  {
    title: "Angular 2 Tutorial",
    description: "Playlist for Angular 2 Tutorial",
    link:
      "https://www.youtube.com/watch?v=zj7_4VDFQPA&list=PLC3y8-rFHvwg5gEu2KF4sbGvpUqMRSBSW",
    author: "Codevolution",
    level: "Beginner, Intermediate",
    categories: "Angular",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Express Foundation",
    description:
      "You might have heard about rapidly-growing-in-popularity technologies such as NodeJS or the M.E.A.N stack (MongoDB, ExpressJS, AngularJS, and NodeJS). The brilliance of NodeJS is its fast performance and the ability to leverage JavaScript on the server. That's right; now developers can use a single language for the browser and the server code. Even more so, they can use JavaScript for the database layer with MongoDB. Therefore, the full stack JavaScript becomes a new standard for web development.",
    link: "https://node.university/p/express-foundation",
    author: "node.university",
    level: "Beginner",
    categories: "express, node",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Flask Mega Tutorial",
    description:
      "A series of articles that explore the basic to advanced concept of  writing web applications in Python using the Flask micro-framework.",
    link:
      "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
    author: "Miguel Grinberg",
    level: "Beginner",
    categories: "FLask",
    language: "English",

    flags: "flag-icon-us",
  },
  {
    title: "Eloquent JavaScript",
    description:
      "An online book about JavaScript that seeks to make it easy for beginners to flow between the need to knows and the must know os JavaScript development",
    link: "http://eloquentjavascript.net/",
    author: "Marijn Haverbeke.",
    level: "Beginner, Intermediate",
    categories: "JavaScript",
    language: "English",
    image: "http://eloquentjavascript.net/img/cover.png",

    flags: "flag-icon-us",
  },
  {
    title: "Python School",
    description:
      "Python School provides a way for existing ICT teachers to gain the knowledge and skills necessary to teach Computing and Computer Science in schools.The materials are designed to enable you to gain the experience necessary to teach Computing at Key Stage 3, GCSE and A-Level.",
    link: "http://pythonschool.net/",
    author: "Sue Sentance and Adam McNicol.",
    level: "Beginner, Intermediate",
    categories: "Python",
    language: "English",
    image: "http://pythonschool.net/news/images/learn_to_program.jpg",

    flags: "flag-icon-us",
  },
  {
    title: "Aprende Vue2 y Firebase paso a paso ",
    description: "La mejor forma de dar el salto a JavaScript moderno. ",
    link: "https://wmedia.teachable.com/p/aprende-vue2-y-firebase-paso-a-paso",
    author: "Juan Andrés Núñez",
    level: "Beginner",
    categories: "JavaScript, Vue",
    language: "Spanish",
    image:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/GZHIaVwKQkyufoJD7ip5",

    flags: "flag-icon-es",
  },
  {
    title: "Try jQuery",
    description:
      "Learn the basics of jQuery 2.0, a JavaScript library, to modify elements on the page and improve user interaction.",
    link: "https://www.codeschool.com/courses/try-jquery",
    author: "Codeschool",
    level: "Beginner",
    categories: "jquery",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Introduction to jQuery",
    description: "Introduction to jQuery",
    link: "https://www.codecademy.com/learn/learn-jquery",
    author: "Codecademy",
    level: "Beginner",
    categories: "jquery",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Try Laravel",
    description:
      "Dig into an overview of the Laravel framework and learn how to start building PHP applications with MVC architecture.",
    link: "https://www.codeschool.com/courses/try-laravel",
    author: "Codeschool",
    level: "Beginner,Intermediate",
    categories: "laravel",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "DotNET Free courses",
    description:
      "DotNET free course list by Microsoft, Codeschool, MVA and many more.",
    link: "https://www.asp.net/freecourses",
    author: "Microsoft",
    level: "Beginner,Intermediate,Advanced",
    categories: "dotnet,csharp",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "React Native Basics: Build a Currency Converter",
    description:
      "Learn to Use Navigation, Setup Redux, Design Components, Work with a Remote API, and More",
    link:
      "https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter",
    author: "Spencer Carli",
    level: "Beginner",
    categories: "React Native",
    language: "English",

    flags: "flag-icon-us",
  },
  {
    title: "How to Use Git and GitHub",
    description:
      "Learn to use version control, an important tool for any developer. This course will focus on Git, a specific version control system, and GitHub.",
    link: "https://in.udacity.com/course/how-to-use-git-and-github--ud775",
    author: "Udacity",
    level: "Beginner",
    categories: "Git",
    language: "English",

    flags: "flag-icon-us",
  },
  {
    title: "React Foundation",
    description:
      "You will start by learning the basics of React. Fundamentals like how it is a JavaScript library developed to build reusable UI components that present changing data. You’ll then learn about the philosophy behind React, which will help you to approach new projects on the right foot. Finally, you’ll get hands-on with everything from forms, components, states, events, and eventually integration.",
    link: "https://node.university/p/react-foundation",
    author: "Azat Mardan",
    level: "Beginner",
    categories: "react",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Node and MongoDB Foundation",
    description: "Intro to Node and MongoDB for Absolute Beginners",
    link: "https://node.university/p/node-npm-and-mongodb-foundation",
    author: "Azat Mardan",
    level: "Beginner",
    categories: "node,mongodb",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Try Python",
    description:
      "​Explore the basics of Python and learn what it means to store and manipulate numbers and words as well as make decisions with your program.",
    link: "https://www.codeschool.com/courses/try-python",
    author: "Sarah Holderness",
    level: "Beginner",
    categories: "python",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Try Ember",
    description:
      "​Pack your bags and help the Woodland Wanderers as you learn how to use Ember and Ember CLI to build your next ambitious web applications.",
    link: "https://www.codeschool.com/courses/try-ember",
    author: "Nathaniel Bibler",
    level: "Beginner",
    categories: "javascript",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "PHP programming language",
    author: "Mike Dane",
    language: "English",
    flags: "flag-icon-us",
    categories: "PHP",
    link: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
    level: "Beginner",
    image: "",
    description:
      "Learn the PHP programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the PHP language.",
  },
  {
    title: "Try PHP",
    description:
      "​​Explore the basics of PHP and learn what it takes to work within the one of the most popular web languages.",
    link: "https://www.codeschool.com/courses/try-php",
    author: "Hampton Paulk",
    level: "Beginner",
    categories: "php",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn to Code",
    description: "Learn to Code Google's Go Programming Language",
    link: "https://greatercommons.com/cwg",
    author: "Todd McLeod",
    level: "Beginner",
    categories: "GO",
    language: "English",

    flags: "flag-icon-us",
  },
  {
    title: "Laravel Tutorial",
    description:
      "This tutorial will guide the developers and students who want to learn how to develop a website using Laravel.",
    link: "https://www.tutorialspoint.com/laravel/",
    author: "TutorialsPoint",
    level: "Beginner, Intermediate",
    categories: "Laravel",
    language: "English",
    flags: "flag-icon-us",
    image: "https://www.tutorialspoint.com/laravel/images/laravel.jpg",
  },
  {
    title: "Learn Python the Hard Way",
    description:
      'Online version (by the original author - no worries, this isn\'t a pirate link!) of the "Learn Python the Hard Way." book. It emphasizes repetition and concept understanding.',
    link: "https://learnpythonthehardway.org/python3/",
    author: "Zed Shaw",
    level: "Beginner",
    categories: "Python",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Python tutorials step by step",
    description:
      "With this Python tutorial, we aim to teach all basic to advanced level Python programming concepts to a large no. of aspirants in the most efficient way. We've organized this course in such a manner that you can learn Python with least efforts, without investing a lot of your time and finally be able to apply this knowledge to your live projects.",
    link: "http://www.techbeamers.com/python-tutorial-step-by-step",
    author: "Meenakshi",
    level: "Beginner",
    categories: "python",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Introduction to Node.js",
    description:
      "The ultimate beginner guide to creating web applications using Node.js, Express and MongoDB.",
    link: "https://www.edx.org/course/introduction-node-js-microsoft-dev283x",
    author: "Microsoft",
    level: "Beginner",
    categories: "nodejs",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Git I",
    description:
      "When developing applications, you would often collaborate with other developers. Git is the most popular version control system that developers use to track and share code.",
    link: "http://progate.com/languages/git",
    author: "Progate",
    level: "Beginner",
    categories: "git",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Introduction to Git for Data Science",
    description:
      "Version control is one of the power tools of programming. It allows you to keep track of what you did when, undo any changes you have decided you don't want, and collaborate at scale with other people. This course will introduce you to Git, a modern version control tool that is very popular with data scientists and software developers alike, and show you how it can help you get more done in less time and with less pain.",
    link:
      "https://www.datacamp.com/courses/introduction-to-git-for-data-science",
    author: "Greg Wilson",
    level: "Beginner,intermediate",
    categories: "git",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learning Vue 1.0: Step By Step",
    description: "Learning Vue 1.0: Step By Step",
    link: "https://laracasts.com/series/learning-vue-step-by-step",
    author: "Laracasts",
    level: "Beginner",
    categories: "vue",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Python para zumbis",
    description: "Aprenda a programar de um modo profissional e divertido.",
    link: "https://www.pycursos.com/python-para-zumbis/",
    author: "Fernando Masanori",
    level: "Beginner",
    categories: "Python",
    language: "Portuguese - Brazil",
    flags: "flag-icon-br",
  },
  {
    title: "Angular 5",
    description:
      "Build the web applications of tomorrow using the new Angular web framework from Google.",
    link: "https://codecraft.tv/courses/angular/",
    author: "Asim",
    level: "Intermediate",
    categories: "Angular",
    language: "English",
    flags: "flag-icon-us",
    image:
      "https://codecraft.tv/assets/images/courses/angular/angular.w555.playicon.noptim.jpg",
  },
  {
    title: "Programming, Data Structures and Algorithms in Python",
    description:
      "This is a introductory course which teaches basic programming concepts in Python. The course also covers various data structures such as sorting, searching, linked list, trees, etc. and their implementation in python.The videos of this course are also available on Youtube. The name of youtube channel is:NOC16 July-Sep CS11",
    link: "http://nptel.ac.in/courses/106106145/",
    author: "Prof. Madhavan Mukund",
    level: "Beginner-Intermediate",
    categories: "Python",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "A Byte of Python",
    description:
      "A Byte of Python is a free book on programming using the Python language. It serves as a tutorial or guide to the Python language for a beginner audience. If all you know about computers is how to save text files, then this is the book for you.",
    link: "https://python.swaroopch.com/",
    author: "Swaroop C.H.",
    level: "Beginner",
    categories: "Python",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Angular (v2.x e v4.x)",
    description:
      "Angular 2 é um framework que permite desenvolver aplicações web e mobile, mantido pela Google. Apesar de ser a segunda versão do framework, Angular 2 não é a continuação do Angular 1 com melhores e novas funcionalidades, foi reescrito.\n\nNesse curso vamos aprender como desenvolver com Angular 2.x e 4.x e TypeScript. Você vai aprender os conceitos básicos e intermediários do Angular, desde os primeiros passos até uma aplicação completa com requisições ao servidor e rotas.\n\nVamos aprender os conceitos de componentes, templates, diretivas, serviços, data-binding, validação de formulários, formulários reativos, roteamento (single page application – SPA) e como conectar ao servidor e trabalhar com RxJS (Observables).\n\nNão é necessário saber Angular 1 para esse curso, já que o Angular v2 foi reescrito. Vamos aprender todos os conceitos do zero, então não se preocupe!",
    link: "https://loiane.training/course/angular-2/",
    author: "Loiane Groner",
    level: "Beginner, Intermediate",
    categories: "Angular",
    language: "Portuguese - Brazil",
    flags: "flag-icon-br",
  },
  {
    title: "AngularJS",
    description: "Tudo sobre angularjs",
    link:
      "https://www.youtube.com/playlist?list=PLQCmSnNFVYnTD5p2fR4EXmtlR6jQJMbPb",
    author: "Rodrigo Branas",
    level: "Beginner, Intermediate",
    categories: "AngularJs",
    language: "Portuguese - Brazil",
    flags: "flag-icon-br",
  },
  {
    title: "Java Hibernate Tutorial",
    description:
      "This tutorial will teach you how to use Hibernate to develop your database based web applications in simple and easy steps",
    link:
      "https://www.youtube.com/playlist?list=PL-nvlz_b2YHigPMfw2G37_D54386hdNQ4",
    author: "Vivekananda Reddy",
    level: "Beginner, Intermediate",
    categories: "Java",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Curso de JavaScript desde 0",
    description: "Curso de JavaScript desde 1",
    link:
      "https://www.youtube.com/playlist?list=PLU8oAlHdN5BmpobVmj1IlneKlVLJ84TID",
    author: " pildorasinformaticas",
    level: "Beginner",
    categories: "JavaScript",
    language: "Spanish",
    flags: "flag-icon-es",
  },
  {
    title: "Cursos de Angular js",
    description: "Cursos de Angular js",
    link:
      "https://www.youtube.com/playlist?list=PLRjuMxvCRGQ6kaHKyiBhOGxeXKLYpOJuZ",
    author: "Ariel Bautista",
    level: "Beginner",
    categories: "AngularJs",
    language: "Spanish",
    flags: "flag-icon-es",
  },
  {
    title: "Powering Up With React",
    description:
      "Discover how React can help you take control of your UI code with composable user interfaces.",
    link: "https://www.codeschool.com/courses/powering-up-with-react",
    author: "Sergio Cruz - Codeschool",
    level: "Beginner",
    categories: "react",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "CSS GRID",
    description:
      "LEARN CSS GRID WITH WES BOS IN 25 PRETTY GOOD VIDEOS FROM FUNDAMENTALS TO REAL WORLD IN ABOUT 4 HOURS.",
    link: "https://cssgrid.io/",
    author: "Wes Bos",
    level: "Beginner - Intermediate",
    categories: "css",
    language: "English",
    image:
      "https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://courses.wesbos.com/images/GRID-poster.png",
    flags: "flag-icon-us",
  },
  {
    title: "Under-the-hood:REACTJS",
    description:
      "Entire React code base explanation by visual block schemes (Stack+Fiber versions)",
    link: "https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/",
    author: " Bogdan Lyashenko",
    level: "Intermediate",
    categories: "react",
    language: "English - Chinese - Korean",
    flags: "flag-icon-us, flag-icon-kr, flag-icon-cn",
  },
  {
    title: "Basic programming using Python",
    description:
      "Free certificate course of 30 days, which starts at 1st of every month and end at 30th. This is beginner course which upon completion gives a digital free certificate.",
    link: "https://yaksh.fossee.in/exam/course_modules/451",
    author: "Arun KP",
    level: "Beginner",
    categories: "Python",
    flags: "flag-icon-us",
    language: "English",
  },
  {
    title: "Practical JavaScript",
    description: "Build a strong JavaScript foundation for web development",
    link: "https://watchandcode.com/p/practical-javascript",
    author: "Gordon Zhu",
    level: "Beginner, Intermediate",
    categories: "JavaScript",
    language: "English",
    image:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:1440/https://d2vvqscadf4c1f.cloudfront.net/Ge2Mtr9TT7W8TqrYWCqh_Pattern-1.gif",
    flags: "flag-icon-us",
  },
  {
    title: "Vue JS Ninja",
    description:
      "Nessa série você vai aprender o básico do Vue.js e as suas principais funcionalidades como diretivas do tipo v-show, v-if, v-else, v-for, v-bind, eventos, filtros, componentes, slots, mixings, rota, Vue CLI e muito mais...",
    link:
      "https://www.youtube.com/playlist?list=PLcoYAcR89n-qq1vGRbaUiV6Q9puy0qigW",
    author: "Tiago Matos, Jeito Ninja",
    level: "Beginner, Intermediate",
    categories: "Vue",
    language: "Portuguese - Brazil",
    flags: "flag-icon-br",
  },
  {
    title: "Introdução ao FireBase",
    description: "Playlist do curso: introdução ao firebase",
    link:
      "https://www.youtube.com/playlist?list=PLHlHvK2lnJnccBL9grcoRxv8CsLa9Q_4q",
    author: "Balta.io",
    level: "Beginner",
    categories: "Firebase",
    language: "Portuguese - Brazil",
    flags: "flag-icon-br",
  },
  {
    title: "Desvendando a linguagem Javascript",
    description:
      "Esse curso foca em explorar as principais características do Javascript",
    link:
      "https://www.youtube.com/playlist?list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc",
    author: "Rodrigo Branas",
    level: "Beginner, Intermediate",
    categories: "JavaScript",
    language: "Portuguese - Brazil",
    flags: "flag-icon-br",
  },
  {
    title: "Curso de PHP",
    description:
      "Curso completo para quem quer aprender a criar sites utilizando as tecnologias de HTML5 + CSS3 + JavaScript de uma maneira simples e objetiva.",
    link:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k",
    author: "Gustavo Guanabara",
    level: "Beginner",
    categories: "PHP",
    language: "Portuguese - Brazil",
    image:
      "https://www.cursoemvideo.com/wp-content/uploads/2017/01/curso-gratis-php.jpg",
    flags: "flag-icon-br",
  },
  {
    title: "Curso POO Java",
    description:
      "Aborda os principais conceitos de Programação Orientada a Objetos (POO) como Classes, Objetos, instanciamento, abstração, encapsulamento, herança, polimorfismo e muito mais. Criado pelo professor Gustavo Guanabara para o Curso em Vídeo, explica todos os conceitos de POO de uma maneira simples, objetiva e divertida.",
    link:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY",
    author: "Gustavo Guanabara",
    level: "Intermediate",
    categories: "Java",
    language: "Portuguese - Brazil",
    image:
      "https://www.cursoemvideo.com/wp-content/uploads/2017/01/POOJAVA420x294.png",
    flags: "flag-icon-br",
  },
  {
    title: "Java para Iniciantes",
    description:
      "Nesse curso de Java grátis e completo, o professor Gustavo Guanabara vai mostrar como criar aplicativos que utilizem Java para rodar em Desktop. Será usado Java SE 8 com IDE NetBeans e os exemplos serão feitos usando a API Swing, que cria interfaces gráficas atraentes.",
    link:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR",
    author: "Gustavo Guanabara",
    level: "Beginner",
    categories: "Java",
    language: "Portuguese - Brazil",
    image:
      "https://www.cursoemvideo.com/wp-content/uploads/2017/01/curso-gratis-java.jpg",
    flags: "flag-icon-br",
  },
  {
    title: "Java Tutorial",
    description: "Learn Java in One Video by Derek Banas",
    link: "https://www.youtube.com/watch?v=n-xAqcBCws4",
    author: "Derek Banas",
    level: "Beginner - Intermediate",
    categories: "Java",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Curso de Laravel Relationship",
    description:
      "Curso que ensina usar sistema de relacionamento do elloquent com laravel.",
    link:
      "https://www.youtube.com/watch?v=ylOBD8D0GBU&list=PLVSNL1PHDWvSk2zxNTYzGRnPMQTFyrYUi",
    author: "www.especializati.com.br",
    level: "Intermediate, Advanced",
    categories: "Laravel, PHP",
    language: "Portuguese - Brazil",
    image:
      "http://www.especializati.com.br/assets/uploads/imgs/conteudo/aulas-laravel-especializati.png",
    flags: "flag-icon-br",
  },
  {
    title: "Android Tutorial with Examples",
    description: "Complete android tutorial with examples",
    link: "https://www.tutlane.com/tutorial/android",
    author: "Suresh Dasari",
    level: "Beginner, Intermediate, Advanced",
    categories: "Android",
    language: "English",
    image: "https://www.tutlane.com/images/categorylogo/android.png",
    flags: "flag-icon-us",
  },
  {
    title: "C# Tutorial with Examples",
    description: "Complete c# tutorial with examples",
    link: "https://www.tutlane.com/tutorial/csharp",
    author: "Suresh Dasari",
    level: "Beginner, Intermediate, Advanced",
    categories: "C Sharp",
    language: "English",
    image: "https://www.tutlane.com/images/categorylogo/csharp.png",
    flags: "flag-icon-us",
  },
  {
    title: "AngularJS Tutorial with Examples",
    description: "Complete AngularJS Tutorial with examples",
    link: "https://www.tutlane.com/tutorial/angularjs",
    author: "Suresh Dasari",
    level: "Beginner, Intermediate, Advanced",
    categories: "AngularJs",
    language: "English",
    image: "https://www.tutlane.com/images/categorylogo/angularjs.png",
    flags: "flag-icon-us",
  },
  {
    title: "Introduction to Linux",
    description: "Never learned Linux? Want a refresh? Take this course",
    link: "https://www.edx.org/course/introduction-to-linux",
    author: "Jerry Cooperstein",
    level: "Beginner, Intermediate",
    categories: "Linux",
    language: "English",
    image:
      "https://www.edx.org/sites/default/files/school/image/logo/lf_logo_new_pantone_200x101.png",
    flags: "flag-icon-us",
  },
  {
    title: "Git & GitHub Crash Course For Beginners",
    description:
      "Git and Github Crash course for beginners where you can learn fundamentals about these technologies",
    link: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
    author: "Brad Traversy",
    level: "Beginner",
    categories: "Git",
    language: "English",
    image: "http://www.stickpng.com/assets/images/5847f981cef1014c0b5e48be.png",
    flags: "flag-icon-us",
  },
  {
    title: "How to Contribute to an Open Source Project on GitHub",
    description:
      "“Feel free to submit a PR!” - words often found in GitHub issues, but met with confusion and fear by many. Getting started with contributing open source is not always straightforward and can be tricky. With this series, you’ll be equipped with the the tools, knowledge, and understanding you need to be productive and contribute to the wonderful world of open source projects. Much of this series speaks about GitHub, but most of the concepts are generally applicable to contributing to any open source project, regardless of where it’s hosted. So enjoy the course and start contributing to the projects you use and love today!",
    link:
      "https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github",
    author: "Kent. C. Dodds",
    level: "Beginner, Intermediate",
    categories: "git",
    language: "English",
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/032/full/EGH_JSopensource_final.png",
    flags: "flag-icon-us",
  },
  {
    title: "Developing a WordPress Theme from Scratch",
    description:
      "A tutorial walkthrough on how to turn any plain HTML website into a customizable website or blog.",
    link:
      "https://www.taniarascia.com/developing-a-wordpress-theme-from-scratch/",
    author: "Tania Rascia",
    level: "Beginner",
    categories: "WordPress",
    language: "English",
    image: "",
    flags: "flag-icon-us",
  },
  {
    title: "The Beginner's Guide to React",
    description:
      "This course is for React newbies and those looking to get a better understanding of React fundamentals.",
    link: "https://egghead.io/courses/the-beginner-s-guide-to-react",
    author: "Kent C. Dodds",
    level: "Beginner",
    categories: "React",
    language: "English",
    image: "",
    flags: "flag-icon-us",
  },
  {
    title: "Building a chat app with React.js and Chatkit",
    description: "Learn React.js through building a real-world chat app.",
    link: "https://scrimba.com/g/greactchatkit",
    author: "Per Harald Borgen",
    level: "Beginner",
    categories: "React",
    language: "English",
    image: "",
    flags: "flag-icon-us",
  },
  {
    title: "Learn CSS Grid",
    author: "Jonathan Suh",
    language: "English",
    categories: "CSS",
    link: "https://learncssgrid.com/",
    level: "Beginner",
    description: "Learn the fundamentals of Grid",
    flags: "flag-icon-us",
  },
  {
    title: "Vue.js + Firebase Authentication",
    description:
      "This Vue.js course will teach you how to use Firebase Authentication in your vue.js applications and allow your users to authenticate with their favorite third-party provider (Twitter, Github, Google, etc.) or plain ol' email and password - without writing any server-side code!",
    link: "https://vueschool.io/courses/vuejs-firebase-authentication",
    author: "Vueschool",
    level: "Beginner",
    categories: "vue",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Flexbox for Free",
    author: "Per Harald Borgen",
    language: "English",
    categories: "CSS",
    link: "https://scrimba.com/g/gflexbox",
    level: "Beginner",
    description: "Learn the fundamentals of Flexbox",
    flags: "flag-icon-us",
  },
  {
    title: "Getting Started with Redux",
    description:
      "In this comprehensive tutorial, Dan Abramov - the creator of Redux - will teach you how to manage state in your React application with Redux.",
    link: "https://egghead.io/courses/getting-started-with-redux",
    author: "Dan Abramov",
    level: "Beginner, Intermediate",
    categories: "React",
    language: "English",
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/025/full/EGH_Redux-New.png",
    flags: "flag-icon-us",
  },
  {
    title: "Learn Flexbox for Free",
    description: "This is a beginner level flexbox course",
    link: "https://scrimba.com/g/gflexbox",
    author: "per Harald Borgen",
    level: "Beginner",
    categories: "CSS",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Curso: Criando APIs com NodeJs",
    description: "Curso: Criando APIs com NodeJs e MongoDB",
    link:
      "https://www.youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn",
    author: "Balta.io",
    level: "Beginner, Intermediate",
    categories: "JavaScript, Node",
    language: "Portuguese - Brazil",
    flags: "flag-icon-br",
  },
  {
    title: "Swift Tutorial with Examples",
    description:
      "Tutlane.com offered a best swift tutorial online for free with examples",
    link: "https://www.tutlane.com/tutorial/swift",
    author: "Suresh Dasari",
    level: "Beginner, Intermediate, Advanced",
    categories: "Swift",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Node.js Tutorial with Examples",
    description: "Tutlane.com has provided a node.js tutorial with examples.",
    link: "https://www.tutlane.com/tutorial/nodejs",
    author: "Suresh Dasari",
    level: "Beginner, Intermediate, Advanced",
    categories: "Node",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Backbone js Tutorial",
    description:
      "A backbone js course to learn how to structure web apps that run on browser",
    link:
      "https://www.youtube.com/watch?v=4t0n5k0X7ow&list=PLTjRvDozrdlwn9IsHWEs9IQv3HQob4bH3",
    author: "Mosh",
    level: "Beginner",
    categories: "Backbone-js",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Wordpress Completo",
    description:
      "Curso de WordPress completo, atualizado, profissional, utilizando o editor de blocos Gutenberg e apenas ferramentas grátis para a criação de sites.",
    link:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dmDP_RWdiKekjTEmCuq_MW2",
    author: "Gustavo Guanabara",
    level: "Beginner, Intermediate",
    categories: "Wordpress",
    language: "Portuguese - Brazil",

    flags: "flag-icon-br",
  },
  {
    title: "JavaScript e ECMAScript para iniciantes",
    description:
      "Curso de JavaScript patrocinado pelo Google, voltado para iniciantes e para quem quiser aprender mais sobre ECMAScript, a versão padronizada do JS.",
    link:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1",
    author: "Gustavo Guanabara",
    level: "Beginner",
    categories: "JavaScript",
    language: "Portuguese - Brazil",
    image: "https://pbs.twimg.com/media/D7nNSPLXsAIpkSi?format=jpg",

    flags: "flag-icon-br",
  },
  {
    title: "Javascript ES6+ Curso 100% online e gratuito",
    description:
      "Você tem certeza que sabe JavaScript? Com todas as features que foram adicionadas podemos dizer que esta é uma nova linguagem, essencial para dominar ferramentas modernas como ReactJS, VueJS, Angular e React Native.",
    link: "https://rocketseat.com.br/starter/curso-gratuito-javascript-es6",
    author: "Diego Fernandes - Rocketseat",
    level: "Beginner",
    categories: "JavaScript",
    language: "Portuguese - Brazil",
    image: "https://rocketseat.com.br/static/images/cursos/es6.svg",
    flags: "flag-icon-br",
  },
  {
    title: "Introduction to TypeScript",
    description:
      "Learn to supercharge your web-applications with the powerful typed language from Microsoft!",
    link: "https://www.udemy.com/share/101tQEA0oTdltbRng=/",
    author: "Daniel Stern",
    level: "Beginner, Intermediate",
    categories: "TypeScript",
    language: "English",
    flags: "flag-icon-us",
  },
  {
    title: "Build a Web App with React",
    description:
      "A free, 5-part video course with interactive code examples that will help you learn React.",
    link: "https://blog.glitch.com/post/react-starter-kit",
    author: "Glitch Team",
    level: "Beginner - Intermediate",
    categories: "javascript",
    language: "English",
    flags: "flag-icon-us",
    image:
      "https://images.prismic.io/glitch-cms/2-react-starter-kit-1.jpg?auto=compress,format&rect=0,0,860,500&w=860&h=500",
  },
  {
    title: "Learn Flutter - Beginners Course",
    description: "Build Android and iOS apps with a flutter framework",
    link: "https://www.udemy.com/course/learn-flutter-beginners-course/",
    author: "Mayuresh Wankhede",
    level: "Beginner",
    categories: "flutter",
    language: "English",
    flags: "flag-icon-us",
    image: "https://img-c.udemycdn.com/course/480x270/1644780_cd06_3.jpg",
  },
  {
    title: "Pre-Flutter & Dart: Everything To Know Before You Start!",
    description: "The Only Course You Need Before You Begin Learning Flutter & Dart! Can It Lead To A Career For You?",
    link: "https://www.udemy.com/course/pre-google-flutter-and-dart-everything-you-need-to-know/",
    author: "Farid Ul Haq",
    level: "Beginner",
    categories: "flutter",
    language: "English",
    flags: "flag-icon-us",
    image: "https://img-c.udemycdn.com/course/480x270/1909434_b4a8_6.jpg",
  },
  {
    title: "Introduction to Flutter",
    description: "Flutter basics",
    link: "https://www.udemy.com/course/introduction-to-flutter/",
    author: "DSC VIT Powered by Google Developers",
    level: "Beginner",
    categories: "flutter",
    language: "English",
    flags: "flag-icon-us",
    image: "https://img-c.udemycdn.com/course/480x270/2831314_6e47_2.jpg",
  },
  {
    title: "Flutter Crash Course for Beginners 2021 - Build a Flutter App with Google's Flutter & Dart",
    description: "In this Free Flutter Introduction for Beginners, you will get start with Flutter and learn how to build an iOS and Android app with Flutter! You will actually build a Flutter App with Google’s Flutter & Dart",
    link: "https://youtu.be/x0uinJvhNxI",
    author: "AcadMind",
    level: "Beginner - Intermadiate",
    categories: "flutter",
    language: "English",
    flags: "flag-icon-us",
    image: "https://i.ytimg.com/vi/x0uinJvhNxI/hq720.jpg",
  },
  {
    title: "Flutter Course - Full Tutorial for Beginners (Build iOS and Android Apps)",
    description: "Learn Flutter, Google’s groundbreaking multi-platform mobile development framework to create apps for Android and iOS. In this course, Nick Manning from fluttercrashcourse.com teaches you how to get up and running with Flutter quickly and effectively. Nick has been a Flutter engineer since 2017 and has boiled down this real-world know-how into a clear-cut, realistic and step-by-step crash course. Flutter apps are written in the Dart programming language",
    link: "https://youtu.be/pTJJsmejUOQ",
    author: "Nick Manning from fluttercrashcourse.com",
    level: "Beginner - Intermadiate",
    categories: "flutter",
    language: "English",
    flags: "flag-icon-us",
    image: "https://i.ytimg.com/vi/pTJJsmejUOQ/hq720.jpg",
  },
  {
    title: "En Baştan Yazılıma Başlama Eğitimi; Flutter Dart Başlangıç Düzeyi",
    description: "Bu youtube oynatma listesindeki videolarla flutter ve dart ile tanışabilirsiniz. Böylece birçok platforma tek bir kod yazarak uygulama geliştirmenin temellerini atmış olacaksınız.",
    link: "https://youtu.be/UFOEB2luPn0?list=PLrWGe5fM0LZ4PSm2Gcz1N6Z9IzyPZnkyR",
    author: "Mehmet Ali Bayram",
    level: "Beginner - Intermadiate",
    categories: "flutter",
    language: "Turkish",
    flags: "flag-icon-tr",
    image: "https://miro.medium.com/max/1400/0*-jhnXzZ3HsnoeC_s.jpg",
  },
]
  .map((course) => {
    return {
      ...course,
      id: snakeCase(course.title + course.author),
      categories:
        typeof course.categories === "string"
          ? course.categories.replace(/ *, */g, ",").split(",")
          : course.categories,
      flags:
        typeof course.flags === "string"
          ? course.flags.split(",")
          : course.flags,
    };
  })
  .reverse();

export default courses;
