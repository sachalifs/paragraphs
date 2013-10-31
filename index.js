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

function Paragraph(text, maxlength, limiter, maxparagraphs) {
  if (!(this instanceof Paragraph)) {
  	return new Paragraph();
  }

  this.text = text;
  this.maxlength = maxlength;
  this.limiter = limiter;
  this.maxparagraphs = maxparagraphs;
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
      if (i == this.maxparagraphs || this.maxlength - length > 0) {
        ps += '<p>' + truncate(p, this.maxlength - length, this.limiter) + '</p>'; 
      }
      length += p.length;
    } else {
      ps += '<p>' + p + '</p>';
    }
  }
  return ps;
};