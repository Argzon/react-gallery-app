# React Gallery App

**A react gallery app using Flickr API**

## Description

This is a platform to search images from an awesome website such as Flickr. There are three predefined categories for you, but you are always free to experiment and do your search.

Even if you type something that cannot be found on Flickr the platform will inform you with a message that there were no images with your search input.

Images presented in this platform use an effect on hover which indicates that you have placed the mouse over an image.

## Using the API

In order to use this script you need to set up config.js file which takes the API key in order to perform searches.

- The API key must be stored in a file named `config.js` which is located in `/src` folder
- In `config.js`, the API key must be a string stored in a variable named `apiKey`
- The last step is to `export default apiKey` and you are good to go
