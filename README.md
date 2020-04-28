[![MIT License][license-badge]][LICENSE]

# Scala Play Svelte Seed

> Use play framework to develop the web application backend/services and frontend using Svelte and Bulma, all in a totally integrated workflow and single unified console. This approach will deliver perfect development experience without CORS hassle. 

[![Scala Play Bulma Svelte Seed](https://github.com/peltho/scala-play-svelte-seed/blob/master/bulma_svelte_play.png)]()

## Used Summary

* [Play Framework: 2.8.0](https://www.playframework.com/documentation/2.8.x/Home)
* [Svelte: 3.x.x](https://svelte.dev/)
* [Bulma: 0.8.2](https://bulma.io/)
* [Jest: 25.3](https://jestjs.io/)
* [Webpack: 4.30.0](https://webpack.js.org)

## How to use it?

### Prerequisites

* [Node.js](https://nodejs.org/) (version 10 or higher)
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (recommend version 1.8 or higher)
* [scala](https://www.scala-lang.org/download/)

### Let's get started

* Fork or clone this repository.

* Used any of the following [SBT](http://www.scala-sbt.org/) commands which will intern trigger frontend associated npm scripts.

```
    sbt clean           # Clean existing build artifacts

    sbt stage           # Build your application from your project’s source directory

    sbt run             # Run both backend and frontend builds in watch mode

    sbt dist            # Build both backend and frontend sources into a single distribution artifact

    sbt test            # Run both backend and frontend unit tests
```

* This seed is not using [scala play views](https://www.playframework.com/documentation/2.8.x/ScalaTemplates). All the views and frontend associated routes are served via [Svelte](https://svelte.dev/) code base under `ui` directory.

## Complete Directory Layout

```
├── /app/                                 # The backend source (controllers, models, services)
│     └── /controllers/                   # Backend controllers
│           └── FrontendController.scala  # Asset controller wrapper serving frontend assets and artifacts
├── /conf/                                # Configurations files and other non-compiled resources (on classpath)
│     ├── application.conf                # Play application configuration file.
│     ├── logback.xml                     # Logging configuration
│     └── routes                          # Routes definition file
├── /logs/                                # Log directory
│     └── application.log                 # Application log file
├── /project/                             # Contains project build configuration and plugins
│     ├── FrontendCommands.scala          # Frontend build command mapping configuration
│     ├── FrontendRunHook.scala           # Frontend build PlayRunHook (trigger frontend serve on sbt run)
│     ├── build.properties                # Marker for sbt project
│     └── plugins.sbt                     # SBT plugins declaration
├── /public/                              # Frontend build artifacts will be copied to this directory
├── /target/                              # Play project build artifact directory
│     ├── /universal/                     # Application packaging
│     └── /web/                           # Compiled web assets
├── /test/                                # Contains unit tests of backend sources
├── /ui/                                  # Frontend source folder
│     ├── /node_modules/                  # 3rd-party frontend libraries and utilities
│     ├── /src/                           # The frontend source code (modules, components, models, directives, services etc.) of the application
│     │     ├── App.svelte                # Svelte's main component
│     │     |── proxy.conf.json           # UI proxy configuration  
|     |     └── main.js                   # Main file for the application 
|     ├── /test/                          # UI test folder
|     |     └── App.spec.js               # Test related to App.svelte component
│     ├── .gitignore                      # Contains ui files to be ignored when pushing to git
│     ├── package.json                    # NPM package configuration.
│     └── webpack.config.js               # Webpack configuration
├── .gitignore                            # Contains files to be ignored when pushing to git
├── build.sbt                             # Play application SBT configuration
├── LICENSE                               # License Agreement file
├── README.md                             # Application user guide
└── ui-build.sbt                          # SBT command hooks associated with frontend npm scripts 
```

## What is new in here?

### FrontendCommands.scala

* Frontend build command mapping configuration.

```
    ├── /project/
    │     ├── FrontendCommands.scala
```


### FrontendRunHook.scala

* PlayRunHook implementation to trigger ``npm run start`` on ``sbt run``.

```
    ├── /project/
    │     ├── FrontendRunHook.scala
```

### FrontendController.scala

* Asset controller wrapper serving frontend assets and artifacts.

```
    ├── /app/                                 
    │     └── /controllers/                   
    │           └── FrontendController.scala
```

### ui-build.sbt

* This file contains the build task hooks to trigger frontend npm scripts on sbt command execution.

### npm scripts

* Scripts are launched thanks to `npm` and are stored in `package.json`

```
├── /ui/
│     ├── package.json
```

### proxy.conf.json

* Used to proxy play backend API when running the project on watch mode.

```
├── /ui/
│     ├── proxy.conf.json
```

## Routes

```
├── /conf/      
│     ├── routes
```

* The following route configuration map index.html to entry route (root). This should be placed as the initial route.

```
GET        /             controllers.FrontendController.index()
```

* All API routes should be prefixed with API prefix defined under ``application.conf`` (Default prefix ``apiPrefix = "api"``) 

Example API route:

```
GET        /api/summary  controllers.HomeController.appSummary
```

* The following route is being used to serve frontend associated build artifacts (css, js) and static assets (images, etc.). This should be placed as the final route.

```
GET        /*file        controllers.FrontendController.assetOrDefault(file)
```

**Note: _On production build all the front end Svelte build artifacts will be copied to the `public/ui` folder._**

## Can be used to implement any front end/ui build!

* Simply replace the ui directory with the build of your choice
* Make output directory ROOT/public/
* Implement a proxy to localhost:9000

## This integration is based on:

* [Scala Play Angular Seed](https://github.com/yohangz/scala-play-angular-seed) by [Yohan Gomez](https://github.com/yohangz)

## License

This software is licensed under the MIT license.

[license-badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: https://github.com/peltho/scala-play-svelte-seed/blob/master/LICENSE
