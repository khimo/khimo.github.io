# khimo.github.io

All the public documentation of [www.khimo.com](https://www.khimo.com) is automatically generated from this repository using github jekyll.

Feel free to send us your pull request or report issues.


# How to write BLI documentation pages

This document presents a short style guide for the creation of documentation pages for khimo.github.io in MarkDown format.

The github documentation is done in a pretty standard way, following mostly any markdown guide will give you most tools needed, like headers, emphasises, links and lists (e.g.: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


## Typical page template
A typical page layout includes the page's specifications, which should always specify title and layout (normally _pagetoc_).
As the title will appear as a first level header (# H1), your page's highest header level should be (## H2) so that the table of contents displayed on the side, shows the different levels correctly.
```
---
title: A title for page
layout: pagetoc
---

## First header
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex massa, tincidunt eu leo et, fringilla faucibus dolor. Phasellus at nunc feugiat, pellentesque odio sed, tristique ex. Duis volutpat lacus eu eros vestibulum sodales. Sed porta neque lectus, at hendrerit ex mattis quis. Aliquam eleifend, urna laoreet condimentum finibus, enim nisi sollicitudin urna, vel hendrerit sapien purus ut tellus. Proin volutpat felis at auctor eleifend. Nunc a ligula nec sapien egestas iaculis at vel tortor. Sed vel mi sed mi egestas viverra quis at elit. Vestibulum semper lorem vel commodo luctus. Etiam dictum ac mi sit amet tincidunt.

+ ListItem1
+ ListItem2

Click on a [link](/bli-guides/page23)

### First sub-header
etc, etc.
```

### Comments and examples
At one moment or another, you may want to write comments or insert examples that are not essential to the explanation you are giving, in this case the _blockquote_ tool should be used by putting **>** in front of the paragraph. For example:
```
## Creating Scenes {#create-scenes}

_BeoLiving Intelligence_ Scenes are the way you can control actions performed on several products with one touch. 
> For example, you can create a Scene that sets the source of a speaker on _Deezer_, while at the same time setting _YouTube_ on a TV.

Each time you execute the Scene those commands will be executed on your _BeoLiving Intelligence_, and what's more, you can schedule the Scene to execute at a given time or periodically.
> E.g.: turn on the lights and close the shades each Tuesday at 10 o'clock. To configure a Scene, follow the next steps:

1. **Select a zone**
    - Select the zone where the Scene will reside.
1. **Create the scene**
>> Here is an example of zone. It is second level because it is inside a list
    - In the top left corner press the "Scenes" button, and then press the "+" to create a Scene.
    - Give the newly created Scene a meaningful name.
>> Here is an example of zone. It is second level because it is inside
etc, etc.
```


### Images
Images should be placed in the `/bli-guides/pictures/` folder and are added in the following specific way:

```
<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/imagename.png" class="img-fluid" alt="Interfaces admin"/>
</div>
<br>
```

### Youtube videos
Youtube videos are also a bit different to what you will find on most markdown tutorials:

```
<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7Sa3cIVKDeA?autoplay=1&loop=1&playlist=7Sa3cIVKDeA"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen muted></iframe>
	</div>
  </div>
</div>
```


## Jekyll collections
One of the particularities of our documentation has to do with the implementation of Jekyll collections on certain long pages (e.g.: User guide, Pro Guide, Supported systems).
Jekyll creates a page with a collection formed by various items which also have their own individual page.

**This allows for better search functionality, and for a support provider to link to a more specific section of the documentation.**

To create a new collection page formed by various items, you should first go to the `_config.yml` file and under `Jekyll collections --> collections:` create your collection:
`New tutorial:
  output: true
  permalink: /bli-guides/new_tutorial/:path/`

You should then create two folders under `/bli-guides/`: `new_tutorial` and `_new_tutorial`

In `new_tutorial` create a file called `index.html` 

```
---
title: Title that will appear in the collection's page
layout: pagetoc
---

{% for part in site.new_tutorial %}
    <div class="part">
        <h2><a href="{{ part.url }}">{{ part.title }}</a></h2>
        {{ part.content }}
    </div>
{% endfor %}
```

You may now start adding items to the collection, this is done by creating markdown files in the `_new_tutorial` folder. The items will appear by alphabetic order on the `new_tutorial` page, so if you wish to set a specific order, you may have to name the files as `01-item1`, `02-item2`, etc. These items of the collection should be the same format as any individual markdown page, and will also have their own page created.



