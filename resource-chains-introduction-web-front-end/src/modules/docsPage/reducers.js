import freeze from "deep-freeze" 
import {handleActions} from "redux-actions"
import * as actions from "./actions"


export const name = "DocsPage"

const initialState = freeze({
    isDocsPageMain : true,
    elementScroll : ""
})

export default handleActions({
    [actions.handleDocsPage] : (state, action)=>{
        return freeze({
            ...state,
            isDocsPageMain : !state.isDocsPageMain
        })
    },
    [actions.scrollToElement] : (state,action)=>{
        console.log(action)
        return freeze({
            ...state,
            elementScroll : action.payload
        })
    },
    [actions.initScrollToElement] : (state,action)=>{
        console.log(action)
        return freeze({
            ...state,
            elementScroll : ""
        })
    }
}, initialState)