import { all } from "redux-saga/effects";
import { watchFetchSampleTasks } from "./features/tasks/tasksSAGA";

export default function* rootSaga() {
    yield all([
        watchFetchSampleTasks(),
    ]);
}
