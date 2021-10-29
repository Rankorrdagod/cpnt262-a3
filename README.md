# fetch-api
### By Evan Burton
## NASA Epic API
- Spoke with Tony, as my API does not have URL links in the data he said it was OK to pull more info from API to make up for it, added three separate pages with images and data to hopefully satisfy assignment criteria.
- Initialized repo and set up fetch for the nasa api get src https://epic.gsfc.nasa.gov/api/natural
- Had difficulty initially figuring out how to get data from the array, provided... remembered once it was in an array i could specify the desired object in the array.
- Difficulty getting pictures to load initially, had to read through the NASA API walkthrough before I realized the image portion of the data was just a signifier for where you need to pull the data from eg. https://epic.gsfc.nasa.gov /archive 	/natural 	/2016 	/10 	/31 	/png 	epic_1b_20161031xxxx.png. The epic_1b being the signifier in the data field.
- Trying to figure out how to make another fetch to add to the drop down menu to show previous years on the same day/month. 
- Added some more styling to make the page easier to look at while it work.
- Made the button for dropdown huge so it can't be missed hopefully if i get the fetch to work.
- Found out that if you query the basic api link it willchange each day and break everything, if you want your images to have the correct dates applied you need to query the archive.
- Have decided to add multiple pages in order to show diiferent sets of images between years so the site has a purpose, im certain theres a better way to do this with less .js files and html files but multiple fetches seems to break the page...
- Trying to decide how to add the position queries to the cards, might try and make smaller cards beneath the image cards with position data.
- Added api and pages for 3 years of collection from EPIC camera, ineterestingly enough the data from 2019 is not available so had to switch to 2018... very annoying.


## Attributions
[Nasa API](https://api.nasa.gov/)
[Pixabay Background Image](https://pixabay.com/photos/earth-lights-satellite-image-globe-1149733/)
[Tony Grimes](https://gist.github.com/acidtone)