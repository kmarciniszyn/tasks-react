export const getSampleTasks = async () => {

    const response = await fetch("/tasks-react/sampleTasks.json");

    if (!response) {
        new Error(response.statusText);
    }

    return await response.json();
}; 