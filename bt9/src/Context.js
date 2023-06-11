import { createContext } from "react";

const defaultValue = { lang: "vi" };
const langContext = createContext(defaultValue);

export default langContext;
