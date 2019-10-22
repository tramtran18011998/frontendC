import * as CONST from "./constrants"
import { createAction } from 'redux-actions';

export const handleDocsPage = createAction(CONST.HANDLEDOCSPAGE)

export const scrollToElement = createAction(CONST.SCROLLTOELEMENT)
export const initScrollToElement = createAction(CONST.INITSCROLLTOELEMENT)