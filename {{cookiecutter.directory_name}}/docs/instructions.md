---
title: Instructions
tags: [to-delete]
---

# Folder structure

Folder `/docs` contains all the documents you write. You can create subfolders in it (and folders within those subfolders, etc.) For example, you could create a folder per year.

Each `.md` file in the `/docs` hiearchy is intended to be the notes you take while reading a paper or book. One document per paper or book.

# Document metadata

Each `.md` should contain a header with metadata about the paper/book it describes.
 
The metadata header uses YAML format, and it is delimited by `---`. Some of the expected fields are:

* `title`: Short title which will appear in the nav menu, and in the tags page as hyperlink to the page. For example `Author-Year`. If this field is absent, the default title will be the first header in the document.
* `fulltitle`: Full title of the paper/book. It will appear at the header of the page, and in the tags page (shortened). If this field is absent, the value of the field `title` will be used instead. If the `field` title is also absent, the html version of the page won't show any metadata (including any of the following).
* `author`: A YAML list whose elements are the authors. It will appear under the title in the document page.
* `year`: Year of the publication. It will appear under the author list in the document page.
* `tags`: A YAML list of tags. They will appear before the page contents, in the document page, and they are used to automatically generate the "Tags" page. If this meadata field is absent for some documents, those will not appear in the "Tags" page.
* `url `: URL to the paper/book, if available online. When this field is present, the page will show a link icon after the full title, which will be an hyperlink to this url.
* `date`: Date in which the `.md` file was written. Currently not used, but planned for creating a "blog" page which lists the entries in chronological order, perhaps grouped by months.

The author can include any other metadata field in the YAML section. Any unknow field will not be visible in the document page, but they can be used from plugins for classification, or shown if the theme is modified to include them.

After the YAML metadata, the document begins. It is expected that headers start at level 1 (single `#`). Mkdocs options will transform them to level 2, in order to generate the appropirate TOC per document (shown to the right)

??? example "YAML section example"
    ```markdown
    ---
    title: AuthorName2019
    fulltitle: The long title of the paper and such and that
    author: 
    - A. Nonimous
    - John Doe
    year: 2019
    date: 2019-06-27
    tags:
    - tag1
    - tag2
    numbersections: true
    comment: This article was recommended by a friend.
    url: https://archive.org/url-of-the-paper.pdf
    ---

    # Introduction
    [...]
    ```

# Document contents

Each document is written in Markdown and can make use of several markdown extensions, already installed in the default configuration.

## Installed markdown extensions


* Emoji. Writting for example `:cloud:` you get :cloud:. Some useful ones

     :star: :boom: :question: :+1: :-1: :point_right: :skull: :eyes: :thought_balloon: :cloud: :zap: :envelope: :lock: :key: :mag: :computer: :watch: :file_folder: :pencil: :bookmark: :memo: :book: :warning: :ok: :no_entry: :x: :red_circle:

    (hover to see its textual form). A complete list can be found [here](https://gist.github.com/rxaviers/7360908). All these emoji are converted by the default settings to PNG, so that they will look the same in any browser/operating system.

* [Keys](https://facelessuser.github.io/pymdown-extensions/extensions/keys/), to typeset keystrokes; `++ctrl+c++` --> ++ctrl+c++ 
* Tilde, allows `~~strikethrough~~`, for ~~example~~. 
* Mark, allows to `==highlight==` ==like this==.
* Smartsymbols, among other, it allows to typeset `-->` or `1/2` to get --> or 1/2.
* Superfences. Expands the possibilities of code fragment, allowing for marking lines, numbering, grouping listings in tabs, etc. It also allows those code fragments to be used inside other nested environments, such as quotes, admonitions or details (see later), as well as item lists, enumerations, etc. 

=== "Python example"
    ```{python tab="Python example" linenums="1" hl_lines="2"}
    # Hello world in python
    print("Hello world")
    ```

=== "C example"
    ```{c tab="C example" linenums="1" hl_lines="5"}
    // Hola mundo en C
    #include<stdio.h>
    int main()
    {
        printf("Hello world\n");
        return 0;
    }
    ```

* Admonitions like this one:

    !!! danger "Warning"
        This can be written like this:

        ```markdown
        !!! danger "Warning"
            This can be written like this:
             
            [...]
        ```

* Details, which allows for collapsable blocks, which can be written like this:

    ```markdown
    ??? danger "Warning"
        This part is hidden until clicking in the header. You can use 
        `???+` instead of `???` to cause an expanded initial state.
    ```

    ??? info "Listing of all admonition/details types"

        !!! example
            
        !!! quote
            
        !!! abstract
            
        !!! info
            
        !!! tip
            
        !!! done
            
        !!! question
            
        !!! warning
            
        !!! fail
            
        !!! danger
            
        !!! bug
            

* Math equations with latex (KaTeX is used as render). For example `$$\sum_x\frac{1}{x}$$` produces:

    $$\sum_x\frac{1}{x}$$ 

* ProgressBar, which can be useful to show the percentage of the paper/book while reading it. For example:

    [=65% "65%"]

* Tasklist, which styles to-do lists, like the following one:

    ??? example "To-do list example"
        ```markdown
        Finished

        - [X] Introduction
        - [ ] State of the art
        - [X] Model
        - [X] Experiments
        - [ ] Conclusions
        ```

        Finished

        - [X] Introduction
        - [ ] State of the art
        - [X] Model
        - [X] Experiments
        - [ ] Conclusions
