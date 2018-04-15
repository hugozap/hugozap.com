---
layout: project
title: 'react-svgmt '
subtitle: 'SVG Management Tools for React'
largeBackground: 'assets/projects/react-svgmt/logo.png'
thumbnail: 'assets/projects/react-svgmt/logo.png'
summary: 'react-svgmt is a library to easiliy load and manipulate SVG images with react'
date: 2018-01-09
---

[Homepage](https://hugozap.github.io/react-svgmt/)
[Source](https://github.com/hugozap/react-svgmt)

react-svgmt (previously known as react-samy-svg) makes it easy
to load and update SVG. Is a useful tool for creating interactive content,
animations etc powered by SVG.

```jsx
<SvgLoader path="https://example.com/star.svg">
  <SvgProxy selector="#Star" stroke={this.state.strokeColor} />
</SvgLoader>
```


You can build skinnable components like [react-rotary-knob](https://github.com/hugozap/react-rotary-knob) with it.