import './PostList.css'

export default function PostList({ posts, onDelete }) {
    const handleLike = (index) => {
        console.log('Liked post at index ${index}');
    };

    const handleComment = (index) => {
        console.log("Commented on post at index ${index}");
    };

    return (
        <div className='post-list'>
            <h2>Posts</h2>
            {posts.map((post, index) => (
                <div key={index} className='post'>
                    <div className='post-header'>
                        <button className='delete' onClick={() => onDelete(index)}>Delete</button>
                    </div>
                    <p className='post-content'>{post}</p>
                    <div className='post-options'>
                        <button className='post-option' onClick={() => handleLike(index)}>Like</button>
                        <button className='post-option' onClick={() => handleComment(index)}>Comment</button>
                    </div>
                </div>
            ))}
        </div>
    );
}