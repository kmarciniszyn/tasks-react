import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    fetchSampleTasks,
    selectTasks,
    fetchSampleTasksSuccess,
    fetchSampleTasksError
} from "./tasksSlice";
import { getSampleTasks } from './getSampleTasks';
import { saveTasksInLocalStorage } from './tasksLocalStorage';

function* fetchSampleTasksHandler() {
    try {
        yield delay(2000);
        const sampleTasks = yield call(getSampleTasks);
        yield put(fetchSampleTasksSuccess(sampleTasks));
    } catch (error) {
        yield put(fetchSampleTasksError);
        yield call(alert, "Nie udało się pobrać zadań");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* watchFetchSampleTasks() {
    yield takeLatest(fetchSampleTasks.type, fetchSampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};