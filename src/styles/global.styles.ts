import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
// styled-components global
/*
 * ----------------------
 * INITIALIZE
 * ----------------------
 */

/*!
 * Initialize.css (v1.3.1) is a complete and customizable collection of CSS best practices based on Normalize.css and HTML5 Boilerplate.
 * http://jeroenoomsnl.github.io/initialize-css
 *
 * HTML5 Boilerplate: https://github.com/h5bp/html5-boilerplate
 * Normalize.css: http://github.com/necolas/normalize.css
 */
/* ==========================================================================
   General
   ========================================================================== */
/**
 * 1. Set default font famaily to $initialize-font-family (default: sans-serif)
 * 2. Prevent iOS and IE text size adjust after device orientation change,
 *    without disabling user zoom
 * 3. Configurable defaults
 */
html {
  -moz-box-sizing: border-box;
       box-sizing: border-box;
  font-family: sans-serif;
  /* 1 */
  line-height: 1.4;
  /* 3 */
  font-size: 1em;
  /* 3 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

/*
 * Remove default margin
 */
body {
  margin: 0;
}

/*
 * Inheriting box-sizing
 * https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
 */
*, *:before, *:after {
  -moz-box-sizing: inherit;
       box-sizing: inherit;
}

/* ==========================================================================
   HTML5 display defenitions
   ========================================================================== */

details,
main,
summary {
  display: block;
}


audio,
canvas,
progress,
video {
  vertical-align: baseline;
  /* 2 */
}


audio:not([controls]) {
  display: none;
  height: 0;
}


[hidden],
template {
  display: none;
}


a:active,
a:hover {
  outline: 0;
}



abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}


b,
strong {
  font-weight: inherit;
  /* 1 */
}

b,
strong {
  font-weight: bolder;
  /* 2 */
}

/*
 * Address styling not present in Safari and Chrome.
 */
dfn {
  font-style: italic;
}


h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

h3, h5 {
  margin: 0;
}

/*
 * Address inconsistent and variable font size in all browsers.
 */
small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* ==========================================================================
   Embedded content
   ========================================================================== */
/*
 * Correct overflow not hidden in IE 9/10/11.
 */
svg:not(:root) {
  overflow: hidden;
}

/* ==========================================================================
   Grouping content
   ========================================================================== */
/*
 * Address margin not present in IE 8/9 and Safari.
 */
figure {
  margin: 1em 40px;
}


hr {
  -moz-box-sizing: content-box;
       box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

/*
 * Contain overflow in all browsers.
 */
pre {
  overflow: auto;
}


code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}



button,
input,
optgroup,
select,
textarea {
  font: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
}


button {
  overflow: visible;
}


button,
select {
  text-transform: none;
}


button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
  cursor: pointer;
  /* 3 */
}

/*
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}

/*
 * Remove inner padding and border in Firefox 4+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/*
 * Restore focus style in Firefox 4+ (unset by a rule above)
 */
button:-moz-focusring,
input:-moz-focusring {
  outline: 1px dotted ButtonText;
}


input {
  line-height: normal;
}


input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}


input[type="search"] {
  -webkit-appearance: textfield;
}


input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Define consistent border, margin, and padding.
 */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}


legend {
  border: 0;
  /* 1 */
  padding: 0;
  /* 2 */
}

/*
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */
textarea {
  overflow: auto;
}

/*
 * Restore font weight (unset by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */
optgroup {
  font-weight: bold;
}

/* ==========================================================================
   HTML5 Boilerplate optimizations 
   ========================================================================== */
/*
 * Remove text-shadow in selection highlight:
 * https://twitter.com/miketaylr/status/12228805301
 *
 * These selection rule sets have to be separate.
 * Customize the background color to match your design.
 */
::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}
::selection {
  background: #b3d4fc;
  text-shadow: none;
}

/*
 * A better looking default horizontal rule
 */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

/*
 * Remove the gap between audio, canvas, iframes,
 * images, videos and the bottom of their containers:
 * https://github.com/h5bp/html5-boilerplate/issues/440
 */
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}

/*
 * Remove default fieldset styles.
 */
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

/*
 * Allow only vertical resizing of textareas.
 */
textarea {
  resize: vertical;
}


p {
  margin: 0;
}

ul {
  padding: 0;
}

/* ==========================================================================
   Optional configurations
   ========================================================================== */
/*
 * Headings
 */
/*
 * Block elements
 */
/* ==========================================================================
   Print styles
   ========================================================================== */`;
