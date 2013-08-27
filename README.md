jQuery Fullscreen Editor
=========
A lightweight jQuery plugin that prettifies and transforms text fields into fullscreen text editors with two different transition options.

Demo
------------
 * [Click here to see the demo and documentation page](http://burakson.github.io/fseditor)

Installation
------------
Add jQuery (1.7 or above), [jquery.fseditor.min.js] and [fseditor.css] to your project.

Basic usage
-----------
Simply initialize the plugin with the selector of your textfield.

```javascript
$(".mytextarea").fseditor();
```

Options
----------
The following is a list of available options. The values are their defaults within the plugin.

```javascript
$(".mytextarea").fseditor({
  overlay: true,
  expandOnFocus: false,
  transition: '', // 'fade', 'slide-in',
  placeholder: '',
  maxWidth: '', // maximum width of the editor on fullscreen mode
  maxHeight: '', // maximum height of the editor on fullscreen mode,
  onExpand: function() {}, // on switch to fullscreen mode callback
  onMinimize: function() {} // on switch to inline mode callback
});
```

Public Methods
---------
Following methods will help you to call function inside the plugin.

**expand()** : Triggers fullscreen mode

**minimize()** : Minimize the editor (inline mode)

**destroy()** : Removes the plugin completely and brings the native textfield back.

Example usage:
```javascript
$(".mytextarea").fseditor('expand');
```


What's next?
---------
 * Semi-rich WYSIWYG functionality
 * Syntax highlighting

Acknowledgements
----------------
© 2013, Burak Son. Released under the [MIT License](http://opensource.org/licenses/mit-license.php).

 * [Github](http://github.com/burakson) (@burakson)
 * [Twitter](http://twitter.com/burakson) (@burakson)
