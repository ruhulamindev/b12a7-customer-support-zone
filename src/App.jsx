import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tickets from "./components/Tickets";
import TaskStatus from "./components/TaskStatus";
import Container from "./components/Container";

function App() {
  const [tickets, setTickets] = useState([]);
  const [task, setTask] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const addToTask = (ticket) => {
    if (!task.find((t) => t.id === ticket.id)) {
      setTask([...task, ticket]);
      alert(`✅ In Progress`);
      setInProgressCount(inProgressCount + 1);
    } else {
      alert("Ticket already in Task Status");
    }
  };

  const completeTask = (id) => {
    const completedTask = task.find((t) => t.id === id);
    if (!completedTask) return;

    alert(`✅ completed`);

    setTask(task.filter((t) => t.id !== id));
    setInProgressCount(inProgressCount - 1);

    setResolved([...resolved, completedTask]);
    setResolvedCount(resolvedCount + 1);
  };

  return (
    <>
      <Navbar />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[50px] order-1 md:order-3">
          <div className="rounded p-7 text-white h-[220px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="font-bold text-[35px] z-10">In-Progress</h2>
            <p className="font-semibold text-[30px] z-10">{inProgressCount}</p>
            <img
              src="/vector1.png"
              alt="vector img"
              className="absolute left-0 bottom-0 h-full opacity-60 object-contain"
            />
            <img
              src="/vector1.png"
              alt="vector-right"
              className="absolute right-0 bottom-0 h-full opacity-60 object-contain scale-x-[-1]"
            />
          </div>
          <div className="rounded p-7 text-white h-[220px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="font-bold text-[35px] z-10">Resolved</h2>
            <p className="font-semibold text-[30px] z-10">{resolvedCount}</p>

            <img
              src="/vector1.png"
              alt="vector img"
              className="absolute left-0 bottom-0 h-full opacity-60 object-contain"
            />
            <img
              src="/vector1.png"
              alt="vector-right"
              className="absolute right-0 bottom-0 h-full opacity-60 object-contain scale-x-[-1]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div className="md:w-2/3 order-3 md:order-1">
            <Tickets tickets={tickets} addToTask={addToTask} />
          </div>
          <div className="md:w-1/3 space-y-6 order-2">
            <TaskStatus
              task={task}
              completeTask={completeTask}
              title="Task Status"
            />
            <TaskStatus
              task={resolved}
              title="Resolved Task"
              completedLabel="Complete"
            />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default App;
