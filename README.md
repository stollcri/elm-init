# elm-init

This is the most simple app creator script you will find. It simply copies starter template files into a new directory. This script will probably get more complicated in the future, but for now this meets my needs.

## Installation

Clone this repository somewhere and then cd into this directory.

```
alias elm-init="`pwd`/elm-init"
```

This doesn't actually install anything, it just creates an alias which points to the script in the repository directory. The nice thing about this approach is that you can update the app by pulling the latest from github.

The alias will go away once you close your terminal windows unless you add it to your .profile or .bashrc or .zshrc file. Type alias in the terminal and find the `elm-init=...` line, copy that and paste it into whichever shell configuration script you use.

## Usage

```
Usage: elm-init [options] [app_name]

Options:

  -h, --help     output usage information
  -t, --template template_name
```

### Example Usage

Create an app named my-elm-app, using the default template, in the current directory. This is a way to apply the template to a directory which you have already started, however any existing files will be overwritten if they have the same name.

I normally start off by simply creating an elm file (maybe named Main.elm) and using elm reactor. When I get to the point where I need a more sophisticated build process, then I use elm-init to bring that in. This is main use case for which this tool was made.

```
elm-init
```

Create an app named my-elm-app, using the default template. This creates a new directory named my-elm-app in the current directory.

```
elm-init my-elm-app
```

Create an app named my-elm-app, using the named template, in the current directory

```
elm-init -t default my-elm-app
```

There is currently only one template (default), but you can add more under the templates directory.

## Motivation

I wanted a simple way to quickly start an elm project with my preferred configuration. I am normally working on html projects which have styled elements, and as great as elm-reactor is, it doesn't handle styling very well, so I need to set up a process to watch my elm files for changes and compile them into a new html file (complete with styles). The default template uses chokidar for this.
