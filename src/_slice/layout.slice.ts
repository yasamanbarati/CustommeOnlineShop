import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ReduxLayoutType, footerLinksType } from "./type"

const initialState: ReduxLayoutType = {
    footerLinks: [],
}

const setFooterLinks = (
  state: ReduxLayoutType,
  action: PayloadAction<footerLinksType[]>,
) => {
  state.footerLinks = action.payload
}


export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {setFooterLinks},
})

const { actions } = layoutSlice

export const {
    setFooterLinks : setFooterLinksAction
} = actions

export default layoutSlice.reducer