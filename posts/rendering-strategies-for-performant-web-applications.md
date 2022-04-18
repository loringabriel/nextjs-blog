---
title: "Rendering strategies for performant web applications"
date: "2022-04-18"
---

In general, chosing the main technology stack or arhitectural model of a web application is influenced by the level of _interactivity_ and the _update strategy_ of the main __data__ and __content__.

Based on this, we can have a large spectrum of web apps, from _static_ one's such as blogs or news-articles, to complex _dynamic_ analitycs dashboards.

In the next minutes, we will focus on understanding how the rendering strategy could impact _app performance_ and _end user experience_.

Let's start with a quick look at the traditional way of rendering and a newer approach (SPA)

### Traditional Web Architecture

On a traditional web application for each page request eg. `example.com/blog/1` or `example.com/blog/2`, the server is responding with HTML for that page.

As a result we can have better SEO coverage and smaller loading time on simple pages.

On the other hand, for more interactive websites or apps that require more navigation, the end user experience is not that great because for every new route / action, browser will refresh and render the page again.


### Single Page Appplications (SPA)
On a single page application, on the first request, server will respond with a root HTML and a lot of JavaScript code, code that is executed on the browser and will be responsible for creating the webpage.

On the second request, if needed, the browser will request only the data corresponding with that view, in JSON format.

The main benefit, is that each interaction is faster and the navigation between pages is seamless, trasitions happen almost instantly.

Even this is great, is helpfull to opmtimize the amount of JS sent to the browser, because even with caching, on every refresh browser will neet to parse all that code before being able to render the page.

Currently, we have a lot of strong options when it comes to use SPA framework, like Vue, Angular which are pretty opinionated and or a SPA library like React which its unopinionated.

### Main types of rendering

Depending on the specific use case, preparing a web page can be categorized in:
- page prepared at __build time__
- page prepared on __server-side__ for __each__ request
- page prepared on the __client__ with JS

| Strategy    | Pros                  | Cons
| ----------- | --------------------- | ----------------------------------- |
| Build time  | served instantly      | bad for dynamic data/not up-to-date |
| Server-side | fast than client-side | slow for slow data-sources          |
| Client-side | fast interactive apps | big JS bundle can affect performance|

Dependig on the use case, the cons highlighted above, can be categorized as "problems" only if specific criteria will apply.

The great news is that today, we have tools that can elimitate some of this problems and where we can chose the rendering stategy for our app.

Today we will take a look on how NextJS, a React framework let us chose the renderng strategy for each page and provide out-of-the-box solutions for the main problems highlithed above.

### NextJS, more than a regular SPA

NextJS it's a web framework built on top of React, focused on improving the developer experience and web performance when creating modern web applications.

NextJS comes with many optimizations, but we will focus on the rendering strategies for now.

### Rendering at build time (SSG)

As we saw earlier the main benefit of chosing this strategy is that a page can be served instantly because is already prepared, and we don't need to do any calculations or data-fetching.
The main downside is that __re-building__ the _entire_ website its the only way to __update__ the content.

In NextJS, if we chose to create a static page, we have the option to revalidate that page on a time based configuration or on demand.

This means that we will __not__ need to __rebuild__ the _entire_ site for a small page update.

Another benefit when chosing a static page and a revalidation strategy, is that for a popular website (100 users / second), instead of doing 100 database queryies to serve up-to-date content, this will trigger only 1 read / second ( serving as a cache ).


### Rendering on server-side (SSR)

Server-side rendering, is a strategy where __for each__ request we will render the webpage on the server and we will send the final HTMl to the client.

In most of the cases, this option is fast, but if we rely on a 3-rd party API for some data or a slow query, the loading time could increase.

This possible downside can be handled with the upcoming `server components` from React, which opens the door for async server-side rendering, where server will send first the elements that are ready and it will continue to stream the HTML with remaining components, as they will be ready.


### Rendering on client-side (CSR)

Client-side rendering, is the main strategy used by SPA applications. It allows crafting amazing user intercations and fast navigation.

One of the possible problems that we could encouter in large application, is the amount of JS that needs to be downloaded/parsed by the browser, in order to render a page.

NextJS comes with code-splitting, out-of-the-box, which can prioritize and use only the code needed for a specific route, resuting in faster page renderings.