import { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [sort, setSort] = useState('difficulty');

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('todoSettings'));
    if (savedSettings) {
      setItemsPerPage(savedSettings.itemsPerPage);
      setHideCompleted(savedSettings.hideCompleted);
      setSort(savedSettings.sort);
    }
  }, []);

  const saveSettings = (settings) => {
    setItemsPerPage(settings.itemsPerPage);
    setHideCompleted(settings.hideCompleted);
    setSort(settings.sort);
    localStorage.setItem('todoSettings', JSON.stringify(settings));
  };

  return (
    <SettingsContext.Provider value={{ itemsPerPage, hideCompleted, saveSettings, sort }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
export default SettingsContext;
