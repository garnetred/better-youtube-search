# Better Youtube Search

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/decemberthedeveloper)

## Abstract
This cross-browser web extension removes the following sections from Youtube search results:

- people also watched
- for you
- channels new to you
- previously watched
- shorts

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
This extension now has cross-browser compatibility (tested with **Chrome** and **Firefox**). Separate instructions for both browsers are below:

### Chrome (and other Chromium-based browsers)
You can clone the repo locally using `git clone`.

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the blue play button icon appear in the toolbar. When you click on it, you can see "Better Youtube Search."

If you navigate to `youtube.com` and initiate a search, you'll no longer  see the sections listed above for each search.

### Firefox 
You can clone the repo using `git clone`. Then, you can download the .xpi file in the `web-ext-artifacts` folder and go to `about:addons`. If you click on the settings icon at the right, you should see a menu option to install an add-on from a file. Once you click that option, you can select the .xpi file in the window that appears. It should load successfully in the browser. 

When you navigate to `youtube.com`, you may see a prompt to update the permissions for the extension. Even though `youtube.com/results` is included in `host_permissions`, users must manually enable these permissions. You can set the extension to work on `youtube.com` by default. Then, do a youtube search. You should no longer see the sections outlined above in the search results. 

## Screenshots
Before

https://github.com/garnetred/better-youtube-search/assets/59572865/d8039674-4c6b-44f3-afc8-171083477842

After

https://github.com/garnetred/better-youtube-search/assets/59572865/96cbb1b6-7f00-46dc-bf87-f14da818baf4

## Future Changes
Long term I'd like to see if it's possible to hide irrelevant search items, like videos that are popular or videos that the user has already seen but aren't related to the current search term. At first glance it doesn't look possible to do this with the CSS alone, so I would want to do more research.
