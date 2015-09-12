# Meteor Hangouts

A prototype for testing Meteor and Google Hangouts API

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [Attributions](#attributions)
* [License](#license)

## Roadmap

* Add tests
* Setup build environment

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:withpulp/mtr-hangouts.git
cd mtr-hangouts
```

Run the following to get the bash file to work:

```
chmod +x ./run.sh
```

Now you can start the app with the following command:

```
./run.sh
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](http://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Collections
  * [dburles:collection-helpers](http://github.com/dburles/meteor-collection-helpers/)
* UI and UX
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [fortawesome:fontawesome](http://github.com/MeteorPackaging/Font-Awesome)
  * [natestrauser:animate-css](http://github.com/nate-strauser/meteor-animate-css)
* Development
  * [flemay:less-autoprefixer](http://github.com/flemay/less-autoprefixer)
  * [momentjs:moment](http://github.com/moment/moment/)
  * [msavin:mongol](http://github.com/msavin/Mongol)
  * [percolate:google-api](https://github.com/percolatestudio/meteor-google-api)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    templates/          # Contains all templates
      layouts/            # Router layouts
      views/              # All the views
      modules/            # UI elements and components (i.e. forms, actions, etc...)
        common/             # Common components (i.e. header, footer)
        elements/           # Re-usable components
  collections/        # Collection files, for each Meteor.Collection
  lib/                # Lib files that get executed first
  packages/           # Packages folder (custom meteor packages, npm)
  private/            # Private files
  public/             # Public files
  router/             # All routes
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
    client/             # client tests
      integration/        # integration tests
      unit/               # unit tests
    server/             # server tests
      integration/        # integration tests
      unit/               # unit tests
environments/       # Environments folder
  build/              # testing environment
  local/              # local environment
  production/         # production environment

```

## License

This project has an MIT License, see the LICENSE.txt for more information.
