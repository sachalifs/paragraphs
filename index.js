/**
 * Module dependencies.
 */

var truncate = require('truncate');

/**
 * Expose Paragraph constructor
 */

module.exports = Paragraph;

/**
 * Creates a Paragraph instance
 */

function Paragraph(text, maxlength, limiter) {
  if (!(this instanceof Paragraph)) {
  	return new Paragraph();
  }

  this.text = text;
  this.maxlength = maxlength;
  this.limiter = limiter;
}

/**
 * Splits a text into paragraphs
 */

Paragraph.prototype.split = function(text, character) {
  var text = text || this.text;
  var character = character || "\n";

  var paragraphs = text.split(character);
  var ps = '';
  var length = 0;
  for (var i = 0, p = paragraphs[i]; i < paragraphs.length; i++, p = paragraphs[i]) {
    if (this.maxlength)
    {
      if (this.maxlength - length > 0) {
        ps += truncate(p, this.maxlength - length, this.limiter);
      }
      length += p.length;
    } else {
      ps += p;
    }
  }
  return ps;
};