import { configureStore } from "@reduxjs/toolkit"
import reducer from 'features/Photo/photoSlice'

const rootReducer = {
    photos: reducer,
}
const store = configureStore({
    reducer: rootReducer,

})
export default store