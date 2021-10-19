# JS Activity: Dynamic Lorem Picsum gallery using an array of objects
In this activity, you will refactor the [Picsum image gallery](https://gist.github.com/acidtone/fbfa8e15f7098f231e8cc52d0518ee2b) using an array of objects in `animals.js`:
- Create custom `alt` attributes for each image;
- Link the `src` of each image to a [local `jpg` file](https://github.com/acidtone/animals-ids/);
- Link each image so that clicking on the image redirects to the placeholder image on [Lorem Picsum](https://picsum.photos/).

## Instructions
1. Download or fork/clone this Gist into your workspace.
2. To this new workspace, add the [lorem picsum images](https://github.com/acidtone/animals-ids). Rename your directories as needed to follow file naming conventions.
3. Replace the `picsumIds` array of numbers (in `picsum-list.js` with the `picsumAnimals` array of objects in `animals.js`.
4. Make the following upgrades to `picsum-list.js` using `picsumAnimals`:
    1. Refactor the `img` links so that the image `src` is hosted from a local `images` directory.
    2. Create custom `alt` attributes for each image using the `title` property. For example, instead of "_Lorem Picsum Image_" for Image 237, try "_Cute Puppy Photo_".
    3. Wrap `<a>` links around each image so that clicking them will redirect the user to the placeholder image on [Lorem Picsum](https://picsum.photos/). 
    
When you are finished with the above changes, your gallery images should look like this:

```html
<a href="https://picsum.photos/id/237">
  <img src="images/md/237.jpg" alt="Cute Puppy Photo">
</a>
```

- Note: since you are using directories in this activity, you will not be able to use a Gist to save your work. Instead, create a full repo on GitHub.