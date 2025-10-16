import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
// import './ListView.css';

const ListView = ({ listData, listDataHeader, listBgColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const isBrowser = typeof window !== 'undefined';
    
    const isMobile = () => {
      if (isBrowser) {
          return window.matchMedia("(max-width: 768px)").matches;
      }
      return false;
  };

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

    useEffect(() => {
      if (isBrowser && !isMobile()) {
        setIsOpen(false);
      }
    }, [isBrowser, isMobile]);

    return (
        <div className={`list-cols ${listBgColor}`}>
            {listDataHeader.title !== "" && (
                <h3 onClick={isMobile() ? toggleAccordion : undefined}>
                    {/* <img src="img/Group.png" />  */}
                    <img src={listDataHeader.icon} /> 
                    {listDataHeader.title}
                </h3>
            )}
            {listDataHeader.subtitle !== "" && (
                <p>
                    {listDataHeader.subtitle}
                </p>
            )}

            {isMobile() ? (
                <ul style={{ display: isOpen ? 'block' : 'none' }}>
                    {listData.map((item, index) => (
                        <ListItem key={index} listItemData={item}/>
                    ))}
                </ul>
            ) : (
                <ul>
                    {listData.map((item, index) => (
                        <ListItem key={index} listItemData={item}/>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListView;
