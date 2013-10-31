
# paragraphs

  Split a single string into several paragraphs by a given character.

## Installation

  Install with [component(1)](http://component.io):

    $ component install slifszyc/paragraphs

## API

### p#split(text, [character])

Used to split the given text into several paragraphs using the character as paragraph separator

```js
p.split('hello\nworld!', "\n") // returns "<p>hello</p><p>world!</p>"
```

## License

  MIT
