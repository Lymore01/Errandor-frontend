import { useState } from "react"

const useSearch = () => {
    const [ query, setQuery ] = useState<string | number | null>(null)
    
    return { query, setQuery }  
}

export default useSearch