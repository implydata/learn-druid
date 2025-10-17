import React from 'react';
// import './ListItem.css';

const ListItem = ({ listItemData }) => {
    return (
        <li><a href={listItemData.url}>{listItemData.text}</a></li>
      );
};

export default ListItem;
