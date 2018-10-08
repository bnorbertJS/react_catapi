import { takeLatest, put } from "redux-saga/effects";

function* fetchMoreCatsSaga(){
    yield put({type: "FETCH_MORE_CATS_SAGA_START"})

   const catResponse = yield fetch("https://api.thecatapi.com/v1/images/search?limit=5",{
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "3911df94-a9c9-4ab6-acb3-00b5e0c3d767"
        }
    })

    const cats = yield catResponse.json()

    yield put({type: "FETCH_MORE_CATS_SAGA_SUCCESS", payload: cats})
}

export default function* watchFetchMoreCatsSaga(){
    yield takeLatest("FETCH_MORE_CATS", fetchMoreCatsSaga)
}