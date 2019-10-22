import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import docsPage, {name as nameOfDocsPage} from "./modules/docsPage"

const reducers = {
    [nameOfDocsPage] : docsPage
}

export default (history)=> combineReducers({
    ...reducers,
    router : connectRouter(history)
})