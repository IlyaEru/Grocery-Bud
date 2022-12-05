import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledClearButton,
  StyledForm,
  StyledHero,
  StyledMain,
} from '../styles/App.style';
import ItemList from './components/itemList/ItemList';

interface GroceryItem {
  id: string;
  name: string;
}

type Event =
  | ''
  | 'itemAdded'
  | 'itemEdited'
  | 'itemDeleted'
  | 'itemCleared'
  | 'noValue';

function App() {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[] | []>([]);
  const [groceryItemInput, setGroceryItemInput] = useState('');
  const [isItemEdit, setIsItemEdit] = useState(false);
  const [itemEditId, setItemEditId] = useState('');
  const [event, setEvent] = useState<Event>('');

  useEffect(() => {
    const items = localStorage.getItem('groceryItems');

    if (items) {
      setGroceryItems(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    if (groceryItems.length > 0) {
      localStorage.setItem('groceryItems', JSON.stringify(groceryItems));
    }
  }, [groceryItems]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (groceryItemInput) {
      if (isItemEdit) {
        const newGroceryItems = groceryItems.map((item) => {
          if (item.id === itemEditId) {
            return { ...item, name: groceryItemInput };
          }
          return item;
        });
        setGroceryItems(newGroceryItems);
        setIsItemEdit(false);
        setItemEditId('');
        setGroceryItemInput('');
        handleEvent('itemEdited');
      } else {
        setGroceryItems([
          ...groceryItems,
          { name: groceryItemInput, id: uuidv4() },
        ]);

        setGroceryItemInput('');
        handleEvent('itemAdded');
      }
    } else {
      handleEvent('noValue');
    }
  };

  const handleClearItems = () => {
    setGroceryItems([]);
    localStorage.removeItem('groceryItems');
    handleEvent('itemCleared');
  };

  const callbacks = {
    handleItemDelete: (id: string) => {
      const updatedItems = groceryItems.filter((item) => item.id !== id);
      setGroceryItems(updatedItems);
      localStorage.setItem('groceryItems', JSON.stringify(updatedItems));
      handleEvent('itemDeleted');
    },

    handleItemEdit: (id: string) => {
      const itemToEdit = groceryItems.find((item) => item.id === id);
      if (itemToEdit) {
        setGroceryItemInput(itemToEdit.name);
        setIsItemEdit(true);
        setItemEditId(id);
      }
    },
  };

  const handleEvent = (event: Event) => {
    setEvent(event);
    setTimeout(() => {
      setEvent('');
    }, 3000);
  };

  const eventMessage = () => {
    switch (event) {
      case 'itemAdded':
        return 'Item Added';
      case 'itemEdited':
        return 'Value Changed';
      case 'itemDeleted':
        return 'Item Removed';
      case 'itemCleared':
        return 'Empty List';
      case 'noValue':
        return 'Please enter a value';
      default:
        return '';
    }
  };

  const eventClass = classNames({
    'event-message': true,
    'warning-message':
      event === 'noValue' || event === 'itemCleared' || event === 'itemDeleted',
  });
  return (
    <StyledMain>
      {event && <p className={eventClass}>{eventMessage()}</p>}
      <StyledHero>grocery bud</StyledHero>
      <StyledForm onSubmit={handleFormSubmit}>
        <input
          value={groceryItemInput}
          onChange={(e) => setGroceryItemInput(e.target.value)}
          id="form__input"
          type="text"
          placeholder="e.g. eggs"
        />
        <button id="form__button" type="submit">
          {isItemEdit ? 'edit' : 'submit'}
        </button>
      </StyledForm>
      <ItemList callbacks={callbacks} items={groceryItems} />
      {groceryItems.length > 0 && (
        <StyledClearButton
          onClick={handleClearItems}
          id="clear-btn"
          type="button"
        >
          clear items
        </StyledClearButton>
      )}
    </StyledMain>
  );
}

export default App;
