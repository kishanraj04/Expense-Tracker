import { createContext, useState } from "react";

export const formValueProvider = createContext();

export function FormValueWrapper({ children }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  return <formValueProvider.Provider value={[[title, setTitle],[category, setCategory],[price, setPrice]]}>{children}</formValueProvider.Provider>;
}
