import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

// Define a type for the slice state
interface CounterState {
    value: string
}

// Define the initial state using that type
const initialState: CounterState = {
    value: '',
}

export const sortSlice = createSlice({
    name: 'sort',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        sortBy: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { sortBy } = sortSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sort.value

export default sortSlice.reducer