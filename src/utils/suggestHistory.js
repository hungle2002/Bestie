import tasksData from '../resources/task.json';
const suggestHistory = () => {
    const tasks = tasksData.results;
    return splitTasks(getTasksNow(tasks));
};

const getDateObject = (date) => {
    return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    };
};
const getTasksNow = (tasks) => {
    const cdate = getDateObject(new Date(Date.now()));
    return tasks.filter((task) => {
        const date = getDateObject(new Date(task.properties.Due.date.start));
        return date.day === cdate.day && date.month === cdate.month && date.year === cdate.year;
    });
};
const splitTasks = (tasks) => {
    const done = tasks.filter((task) => {
        return task.properties.Status.status.id === 'done';
    });
    const notDone = tasks.filter((task) => {
        return task.properties.Status.status.id === 'not-done';
    });
    return {
        done,
        notDone
    };
};
export default suggestHistory;
