# Better Youtube Search

## Abstract
This browser extension removes the "people also watched," "for you," "channels new to you," "previously watched," and "shorts" section from Youtube search results.

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
You can clone the repo locally using `git clone`.

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the chart icon appear in the toolbar. When you click on it, you can see "Hide LinkedIn Applicants."

If you navigate to `youtube.com` and initiate a search, you'll no longer  see the sections listed above for each search.

## Screenshots


## Future Changes
Long term I'd like to see if it's possible to hide irrelevant search items, like videos that are popular or videos that the user has already seen but aren't related to the current search term. At first glance it doesn't look possible to do this with the CSS alone, so I would want to do more research.

