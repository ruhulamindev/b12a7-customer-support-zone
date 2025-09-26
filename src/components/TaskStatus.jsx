import React from "react";

const TaskStatus = ({
  task,
  completeTask,
  title,
  completedLabel,
  removeTask,
}) => {
  return (
    <div className=" p-2 rounded space-y-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>

      {task.length === 0 && title === "Task Status" && (
        <p className="text-gray-500 mb-2">
          Select a ticket to add to Task Status
        </p>
      )}

      {task.length === 0 && title === "Resolved Task" && (
        <p className="text-gray-500">No resolved tasks yet</p>
      )}

      {task.map((t) => (
        <div key={t.id} className="rounded shadow-md bg-gray-100 p-2 pb-2">
          <p>{t.title}</p>

          {completeTask ? (
            <div className="mt-2">
              <span
                className="bg-green-500 cursor-pointer text-white px-3 py-1.5 rounded text-sm w-full inline-block text-center"
                onClick={() => completeTask(t.id)}
              >
                Complete
              </span>
            </div>
          ) : (
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="text-green-500 font-semibold">
                ✅{completedLabel || "Completed"}
              </span>
              <span
                className="text-gray-600"
                onClick={() => removeTask && removeTask(t.id)}
              >
                Click to Remove
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default TaskStatus;
