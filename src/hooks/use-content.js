import React, { useContext } from "react";

const ContentContext = React.createContext({});

export const ContentProvider = ContentContext.Provider;

export const useContent = () => useContext(ContentContext);