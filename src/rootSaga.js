import { all } from "redux-saga/effects";
import { watchFetchSampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchSampleTasks(),
    ]);
}
