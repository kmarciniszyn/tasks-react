import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSampleTasks, setTasks } from "./tasksSlice";
import { getSampleTasks } from './getSampleTasks';

function* fetchSampleTasksHandler() {
    try {
        const sampleTasks = yield call(getSampleTasks);
        yield put(setTasks(sampleTasks));
    } catch (error) {
        yield call(alert, "Nie udało się pobrać zadań");
    }
}

export function* watchFetchSampleTasks() {
    yield takeLatest(fetchSampleTasks.type, fetchSampleTasksHandler);
}