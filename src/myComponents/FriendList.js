import './FriendList.css';
import { useState } from 'react';

export default function FriendList({ friends, searchTerm, onFriendSelect, onSearch }) {
    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="friend-list">
            <input
                type="text"
                placeholder="Search friends..."
                value={searchTerm}
                onChange={onSearch}
            />
            <ul>
                {filteredFriends.map(friend => (
                    <li key={friend.id} onClick={() => onFriendSelect(friend.id)}>
                        {friend.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}