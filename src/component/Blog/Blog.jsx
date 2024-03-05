import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";



const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            
            <img className='w-full mb-8' src={cover} alt={`the cover pic ${title}`} />
            <div className='flex justify-between '>
                <div className='flex mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time}mins read</span>
                    <button 
                    onClick={()=> handleAddToBookmarks(blog)}
                    className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={()=> handleMarkAsRead(id,reading_time)} 
            className='font-bold text-purple-600 underline'>mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
    
    
}
export default Blog;