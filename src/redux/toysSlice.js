import { createSlice } from '@reduxjs/toolkit'

export const toysSlice = createSlice({
    name: 'toys',
    initialState: {
        selectedCategory: "BATH TOYS"
    },
    reducers: {
        filterCategory:(state,action) => {
            state.selectedCategory = action.payload;
        }
    }
})
export const getSelectedCategory = state => state.toys.selectedCategory;
export const {filterCategory} = toysSlice.actions;
export default toysSlice.reducer;