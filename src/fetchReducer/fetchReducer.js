export default function fetchReducer (state={}, action) {
  switch (action.type) {
    case "INITIALIZE_STATE": 
      return {
        ...state,
        fetchData: [...action.payLoad.results],
        filteredItems: [...action.payLoad.results],
        totalItems: action.payLoad.count,
        nextFetchUrl: action.payLoad.next,
        prevFetchUrl: action.payLoad.previous,
        isLoading: false,
        fetchError: false
      }

    case "FILTER_ITEMS": 
      let filterText = action.filterText;
      const resolvedfilteredItems = state.fetchData.filter((item) => item.name.toLowerCase().includes(filterText.toLowerCase()))
      return {
        ...state,
        filteredItems: resolvedfilteredItems
      }  
    
    case "START_FETCH": 
      return {
        ...state,
        isLoading: true,
        fetchError: false
      }
    
    case "SHOW_ERROR":
      return {
        ...state,
        fetchError: true,
        isLoading: false,
        filteredItems: [],
        fetchData: [],
        totalItems: 0
      }  
      
     default: 
      return state; 
  }
}