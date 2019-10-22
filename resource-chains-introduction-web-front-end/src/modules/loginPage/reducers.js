import freeze from "deep-freeze" 
import {handleActions} from "redux-actions"
import * as actions from "./actions"

export const name = "loginPage"

const initialState = freeze({
    isDocsPageMain : true
})

export default handleActions({

}, initialState)