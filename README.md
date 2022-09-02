# Photo Tag
![incoming gif]()

## Links
- [Try Photo Tag here!](https://appletri.github.io/photo-tag/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app)

## About
### ReactJS & Firebase
<hr>
The core of this assignment is to utilize react with a firebase database.

### Design
The main design choice that I wanted to do as compared to others projects is to have multiple possible targets for the same picture. Other projects have the same targets for the same picture, which allows the player to nail a highscore the second time they play the picture. By having multiple targets for the same picture, I am creating a more competitive leaderboard and replayability for my picture.


### Code
<hr>
#### Targeting Box
I thought about this quite a bit. I wanted to create a pixel base targeting so that the user can scroll and zoom in/out of the photo while still having the core mechanics working. I start by creating the states that I will use for my mouse positioning and scroll positioning. After that I created the useEffect and function for handling the setState for the coordinates:

```
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  
  const handleScroll = () => {
    setOffsetY(window.pageYOffset) 
    setOffsetX(window.pageXOffset)
  };
  
   useEffect(() => {
    
    const update = (e) => {
      if(hidden) {
        setX(offsetX + e.x)
        setY(offsetY + e.y)
      }
    }

    window.addEventListener('click', update);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', update);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [x, y, hidden, offsetY])
  
```
I pass these props through from the App.js to the TargetingBox.js. The Targeting Box is created and is hidden by a className. The box is updated and changes it's position everytime the user clicks on the photo.

The Targeting Box has an issue with the right side of screen. When clicking too close to the right, the box's choices get cut off by the right side. Too solve this issue, I created a helper function that gets the window's dimension and comparing the click value to the edge of the screen. If it is in cut-off range, the className will change and the choices will appear on the left side of the targeting box.


