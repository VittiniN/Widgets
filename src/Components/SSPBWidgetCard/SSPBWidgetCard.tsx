import React, { ReactElement, ReactNode } from 'react';

import './SSPBWidgetCard.css';

type SlotType = "header" | "body" | "footer" | "selectMenu";

type props = {
    children: ReactNode;
    renderSelectMenu?: boolean;
};

// Create a React.FC for the SSPBWidgetCard component
const SSPBWidgetCard: React.FC<props> = ({ children }) => {
    const filterSlot = (slotType: SlotType): ReactElement[] => {
        return React.Children.toArray(children).filter((child) => 
            React.isValidElement(child) && child.props.slot === slotType 
        ) as ReactElement[];
    }

    return (
        <div className="SSPBWidgetCard">
            <div className="SSPBWidgetCard__header">
                {filterSlot("header")}
            </div>
            <div className="SSPBWidgetCard__selectMenu">
                {filterSlot("selectMenu")}
            </div>
            <div className="SSPBWidgetCard__body">
                {filterSlot("body")}
            </div>
            <div className="SSPBWidgetCard__footer">
                {filterSlot("footer")}
            </div>
            
        </div>
    );
};

export default SSPBWidgetCard;
