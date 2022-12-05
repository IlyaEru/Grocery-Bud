import React from 'react';
import { StyledItemList } from './ItemList.style';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface ItemListProps {
  items: { id: string; name: string }[];
  callbacks: {
    handleItemDelete: (id: string) => void;
    handleItemEdit: (id: string) => void;
  };
}

export default function ItemList({ items, callbacks }: ItemListProps) {
  return (
    <StyledItemList>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.name}</p>
              <div className="btn-container">
                <button
                  onClick={() => callbacks.handleItemEdit(item.id)}
                  className="edit-btn"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => callbacks.handleItemDelete(item.id)}
                  className="delete-btn"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </StyledItemList>
  );
}
