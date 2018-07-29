# elm-init

This is the most simple app creator script you will find. It simply copies starter template files into a new directory. This script will probably get more complicated in the future, but for now this meets my needs.

## Usage

```
Usage: elm-init [options] [app_name]"

Options:"

  -h, --help     output usage information"
  -t, --template template_name"
```

### Example Usage

Create an app named my-elm-app, using the default template, in the current directory

```
elm-init my-elm-app
```

Create an app named my-elm-app, using the named temlate, in the current directory

```
elm-init -t default my-elm-app
```

There is currently only one template (default), but you can add more under the templates directory.

## Motivation

I wanted a simple way to quickly start an elm project with my preferred configuration. I am normally working on html projects which have styled elements, and as great as elm-reactor is, it doesn't handle styling very well, so I need to set up a process to watch my elm files for changes and compile them into a new html file (complete with styles). The default template uses chokidar for this.