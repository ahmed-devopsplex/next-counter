import {all,fork} from 'redux-saga/effects'
import * as counter from './counterSaga'

export default function* rootSaga(){
    yield all([...Object.values(counter)].map(fork));
}