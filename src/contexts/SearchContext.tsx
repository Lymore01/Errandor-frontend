import { createContext, useState } from "react"

type SearchContextType = [
    string,
    React.Dispatch<React.SetStateAction<string>>
];

export const SearchContext = createContext<SearchContextType>([
    "", 
    ()=>{}
]);

const SearchProvider = ({ children } : {
    children: React.ReactNode
}) =>{
    const [ query, setQuery ] = useState<string>("")

    return (
        <SearchContext.Provider value={[query, setQuery]}>
            { children }
        </SearchContext.Provider>
    )
}

export default SearchProvider;