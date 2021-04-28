import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name: 'photo',
    initialState: JSON.parse(localStorage.getItem('photos')) ? JSON.parse(localStorage.getItem('photos')) : [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const id = action.payload.id;
            return state.filter(item => item.id !== id)
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            console.log(newPhoto, state);
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);
            console.log(photoIndex);

            if (photoIndex >= 0) {
                state[photoIndex] = newPhoto;
            }

        }
    }
})
const { reducer, actions } = photoSlice;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;