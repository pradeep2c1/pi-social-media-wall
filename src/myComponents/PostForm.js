import { useState } from 'react';
import './PostForm.css'

export default function PostForm({ onPost }) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onPost(text);
            setText('');
        }
    };

    return (
        <div className='post-form-container'>
            <h2>Add a Post</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={handleChange}
                    placeholder="Write something..."
                    rows={4}
                    cols={40}
                    className='post-textarea'
                />
                <button type="submit" className='post-button'>Post</button>
            </form>
        </div>
    );
}