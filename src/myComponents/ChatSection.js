import './ChatSection.css'
import ChatWindow from './ChatWindow';
import FriendList from './FriendList';
import { useState } from 'react';

export default function ChatSection() {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [friends] = useState([
        { id: 1, name: 'Gary' },
        { id: 2, name: 'Siddarth' },
        { id: 3, name: 'Amit' },
    ]);


    const handleFriendSelect = (friendId) => {
        setSelectedFriend(friendId);
        setIsChatOpen(true);
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update search term state
    };

    return (
        <div className="chat-section">
            <FriendList 
                friends={friends} 
                searchTerm={searchTerm} 
                onFriendSelect={handleFriendSelect} 
                onSearch={handleSearch} 
            />
            {isChatOpen && <ChatWindow friendId={selectedFriend} />}
        </div>
    );
}