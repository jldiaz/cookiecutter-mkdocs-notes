# My Notes Cookiecutter

Basic structure for a folder containing `.md` documents with notes taken while reading books/papers, configured to create a static site using mkdocs with several useful plugins preinstalled.


## Install

Use a virtual environment to install cookiecutter (and, later, other required python tools), and use cookiecutter to create the documentation folder:

```
$ python -m venv ~/venvs/mynotes
$ source ~/venvs/mynotes/bin/activate
(mynotes) $ pip install cookiecutter
(mynotes) $ cookiecutter https://github.com/jldiaz/cookiecutter-mkdocs-notes.git
```

Answer some simple questions, and a new folder will appear, named by default `my_notes`.

```
my_notes/
├── docs
│   ├── index.md
│   └── instructions.md
├── mkdocs.yml
├── requirements.txt
└── theme
    ├── extra.css
    ├── extra.js
    ├── main.html
    └── tags.md.template
```

Enter it and use `requirements.txt` to install the remaining Python packages (mainly mkdocs, material theme and some plugins):

```
(mynotes) $ cd my_notes
(mynotes) $ pip install -r requirements.txt
```

## Development server

Using mkdocs, a simple server can be launched to preview your documents as you write/save them.

```
(mynotes) $ mkdocs serve -a 0.0.0.0:8000 --livereload
```

An example document is provided, showing the intended use and some features. This document can be deleted once you get the idea.

## Static site

You can also generate a static site with the HTML.

```
(mynotes) $ mkdocs build
```

See [mkdocs documentation](https://www.mkdocs.org/) for more options, or if you want to customize the plugins, theme and options.
