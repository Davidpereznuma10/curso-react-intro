import React from 'react';

function UseLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  try {
    parsedItem = JSON.parse(localStorageItem);
  } catch (error) {
    parsedItem = initialValue;
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  };

  return [item, saveItem];
}

export { UseLocalStorage };
