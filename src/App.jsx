import { useState } from "react"
import Blogs from "./component/Blogs/Blogs"
import Bookmarks from "./component/Bookmarks/Bookmarks"
import Header from "./component/Header/Header"

function App() {
  
  const [bookmarks,setBookmarks] = useState([]);

  const [readingTime,setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    
    // console.log('remove mark',id)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
      <Blogs 
      handleAddToBookmarks={handleAddToBookmarks}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
