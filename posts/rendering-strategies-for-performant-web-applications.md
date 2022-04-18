---
title: "Rendering strategies for performant web applications"
date: "2022-04-18"
---

In general, choosing the main technology stack or architectural model of a web application is influenced by the level of interactivity and the update strategy of the main data and content.

Based on this, we can have a large spectrum of web apps, from static ones such as blogs or news articles to complex dynamic analytics dashboards.

In the next minutes, we will focus on understanding how the rendering strategy could impact app performance and end-user experience.

Let's start with a quick look at the traditional way of rendering and a newer approach (SPA)

### Traditional Web Architecture

On a traditional web application for each page request eg. `example.com/blog/1` or `example.com/blog/2`, the server is responding with HTML for that page.

As a result, we can have better SEO coverage and a smaller loading time on simple pages.

On the other hand, for more interactive websites or apps that require more navigation, the end-user experience is not that great because, for every new route/action, the browser will refresh and render the page again.


### Single Page Applications (SPA)
On a single page application, on the first request, the server will respond with a root HTML and a lot of JavaScript code, code that is executed on the browser, and will be responsible for creating the webpage.

On the second request, if needed, the browser will request only the data corresponding with that view, in JSON format.

The main benefit is that each interaction is faster and the navigation between pages is seamless, transitions happen almost instantly.

Even though this is great, is helpful to optimize the amount of JS sent to the browser, because even with caching, on every refresh browser will need to parse all that code before being able to render the page.

Currently, we have a lot of strong options when it comes to using a SPA framework, like Vue, and Angular which are pretty opinionated, and or a SPA library like React which is unopinionated.

### Main types of rendering

Depending on the specific use case, preparing a web page can be categorized in:
- page prepared at __build time__
- page prepared on the __server-side__ for __each__ request
- page prepared on the __client__ with JS

| Strategy    | Pros                  | Cons
| ----------- | --------------------- | ----------------------------------- |
| Build time  | served instantly      | bad for dynamic data/not up-to-date |
| Server side | fast than the client side | server will return a webpage only when all API/queries are done|
| Client side | fast interactive apps | big JS bundle can affect performance|

Depending on the use case, the cons highlighted above can be categorized as "problems" only if specific criteria will apply.

The great news is that today, we have tools that can eliminate some of these problems, and where we can choose the rendering strategy for our app.

Today we will take a look at how NextJS, a React framework let us choose the rendering strategy for each page and provide out-of-the-box solutions for the main problems highlighted above.

## NextJS, a full-stack framework

NextJS it's a full-stack framework built on top of React, focused on improving the developer experience and web performance when creating modern web applications.

NextJS comes with many optimizations, but we will focus on the rendering strategies for now.

## Static Site Generation - SSR

SSR is a strategy where we can prepare the page at build time. As we saw earlier the main benefit of choosing this strategy is that a page can be served instantly, and we don't need to do any calculations or data-fetching.
The main downside is that re-building the _entire_ website is the only way to __update__ the content.

In NextJS, if we chose to create a static page, where the content needs to be updated from time to time, we could use Incremental Static Regeneration (ISR).

### Incremental Static Regeneration - ISR

Using Incremental Static Regeneration (ISR), we could configure a time frame that will trigger a re-build for that specific page. For example, if we are defining a 60 seconds timeframe, when a request comes, the server will check if the existing page was prepared in the last 60 seconds or not. The user will always receive the cached version, and if is more than 60 seconds between the preparation time and the current time, the server will start to rebuild that route and invalidate the cache.

### On-demand-ISR (Experiemntal)

Currently, we have (in the experimental phase) the option to trigger a rebuild for a specific route on demand. This would ensure that the static route has the latest updates.

## Server-side Rendering (SSR)

Server-side rendering is a strategy where __for each__ request we will render the webpage on the server and we will send the final HTML to the client.

In most cases, this option is fast, but if we rely on a 3-rd party API for some data or a slow query, the loading time could increase.

This possible downside can be handled with the upcoming `server components` from React, which opens the door for async server-side rendering, where the server will send first the elements that are ready and it will continue to stream the HTML with the remaining components, as they will be ready.


## Client-side Rendering (CSR)

Client-side rendering is the main strategy used by SPA applications. It allows crafting amazing user interactions and fast navigation.

One of the possible problems that we could encounter in a large application, is the amount of JS that needs to be downloaded/parsed by the browser, in order to render a page.

Even though it is a full-stack framework, NextJS comes with an out-of-the-box solution for code-splitting, which can prioritize and use only the code needed for a specific route, resulting in faster page renderings.

## Conclusion

NextJS could be a versatile solution, where we can customize the rendering strategy for each route of the app, resulting in better and faster end-user experiences.