import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const ModalContext = createContext();

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOperationType, setSelectedOperationType] = useState(0);
  const [selectedType, setSelectedType] = useState(
    sessionStorage.getItem("selectedType") || "swap"
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    sessionStorage.setItem("selectedType", selectedType);
  }, [selectedType]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        selectedOperationType,
        setSelectedOperationType,
        selectedType,
        setSelectedType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook for using the context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
