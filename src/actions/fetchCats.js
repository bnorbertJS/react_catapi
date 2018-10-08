const fetchCats =  () => async dispatch => {
    dispatch(fetchCatsStarted())
    try{
        const catResponse = await fetch("https://api.thecatapi.com/v1/images/search",{
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "3911df94-a9c9-4ab6-acb3-00b5e0c3d767"
            }
        })
        
        const cat = await catResponse.json()
        dispatch(fetchCatsSuccess(cat))
    }catch(exc){
        dispatch(fetchCatsError())
    }
}

const fetchCatsError = () =>{
    return {type: "FETCH_CATS_ERROR"}
}

const fetchCatsStarted = () =>{
    return {type: "FETCH_CATS_START"}
}

const fetchCatsSuccess = (cat) => {
    return {type: "FETCH_CATS_SUCCESS", payload: cat}
}

export default fetchCats