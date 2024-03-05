import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 text-center pt-2">
            <div>
                <h3 className="text-4xl text-purple-600 border-4 p-10 border-purple-700">Reading Time : {readingTime}</h3>
            </div>
            <h2 className="font-bold text-3xl mt-9 mb-9">Book marks: {bookmarks.length}</h2>
           {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
           }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime:PropTypes.number
}
export default Bookmarks;