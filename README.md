```
Weighted: A Cycle2 plugin by Funkhaus
      ___ _   _ _  _ _  __
     | __| | | | \| | |/ /
     | _|| |_| | .` | ' <
     |_| _\___/|_|\_|_|\_\
     | || | /_\| | | / __|
     | __ |/ _ \ |_| \__ \
     |_||_/_/ \_\___/|___/

```

### Summary:

Weighted is a basic jQuery plugin to be used with Cycle2:
http://jquery.malsup.com/cycle2/

Allows for elements within a cycle slideshow to move with gravity

### Instructions for use:

1. Include either the development or production version of weighted into your site
2. Initialize a cycle slideshow as you normally would, only with 2 extra properties:
   * **weightSelector** - a jQuery selector of the element you would like to add weight to
   * **gravity** - integer between 0 and 100 that specifies the amount of gravty to add. 0 will result in no noticable gravity, 100 will result in the weighted element touching the edge of the slide during the transition

### Example Usage

```js
jQuery('.slideshow').cycle({
    speed: 600,
    slides: '> .slide',
    weightSelector: '> .meta',
    gravity: 50,
    fx: 'weighted'
});
```
