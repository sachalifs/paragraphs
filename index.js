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

  if (maxlength) {
  	this.text = truncate(text, maxlength, limiter)
  } else {  	
  	this.text = text;
  }
}

/**
 * Splits a text into paragraphs
 */

Paragraph.prototype.split = function(text, character) {
  var text = text || this.text;
  var character = character || "\n";

  var paragraphs = text.split(character);
  var ps = '';
  for (var i = 0, p = paragraphs[i]; i < paragraphs.length; i++, p = paragraphs[i]) {
    ps += '<p>' + p + '</p>';
  }
  return ps;
};