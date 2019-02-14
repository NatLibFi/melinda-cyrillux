/**
*
* @licstart  The following is the entire license notice for the JavaScript code in this file.
*
* UI for transliterating MARC records in Melinda
*
* Copyright (c) 2016-2019 University Of Helsinki (The National Library Of Finland)
*
* This file is part of melinda-cyrillux
*
* melinda-cyrillux program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* melinda-cyrillux is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
* @licend  The above is the entire license notice
* for the JavaScript code in this file.
*
*/
import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { RESET_STATE } from './action-creators/ui-actions';

import session from 'commons/reducers/session-reducer';
import record from './reducers/record-reducer';
import transformedRecord from './reducers/transformed-record-reducer';
import importedRecords from './reducers/imported-records-reducer';
import { routerReducer } from 'react-router-redux';

const INITIAL_STATE = Map();

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === RESET_STATE) {
    return combinedRootReducer(INITIAL_STATE, action);
  }
  return combinedRootReducer(state, action);
}

export const combinedRootReducer = combineReducers({
  session,
  record,
  transformedRecord,
  importedRecords,
  routing: routerReducer
});
