import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchSampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getSampleTasks } from './getSampleTasks';
import { saveTasksInLocalStorage } from './tasksLocalStorage';

function* fetchSampleTasksHandler() {
    try {
        const sampleTasks = yield call(getSampleTasks);
        yield put(setTasks(sampleTasks));
    } catch (error) {
        yield call(alert, "Nie udało się pobrać zadań");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchSampleTasks() {
    yield takeLatest(fetchSampleTasks.type, fetchSampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}