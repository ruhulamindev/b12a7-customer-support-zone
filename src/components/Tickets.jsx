import React from "react";

const Tickets = ({ tickets, addToTask }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-gray-100 p-4 rounded shadow cursor-pointer hover:bg-purple-50"
            onClick={() => addToTask(ticket)}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-md text-gray-800">
                {ticket.title}
              </h3>

              <div
                className={`flex items-center px-2 py-1 rounded-full text-gray-600 font-semibold text-sm ${
                  ticket.status === "Open"
                    ? "bg-green-300"
                    : ticket.status === "In Progress"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-yellow-200 text-gray-600"
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full mr-2 ${
                    ticket.status === "Open"
                      ? "bg-green-700"
                      : ticket.status === "In Progress"
                      ? "bg-yellow-300"
                      : "bg-yellow-500"
                  }`}
                ></span>
                {ticket.status === "Open" ? "Active" : ticket.status}
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">{ticket.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div className="flex gap-1.5">
                <span>#{ticket.id}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    ticket.priority === "HIGH PRIORITY"
                      ? "text-red-500"
                      : ticket.priority === "MEDIUM PRIORITY"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {ticket.priority}
                </span>
              </div>
              <div className="flex gap-2 text-xs">
                <span>{ticket.customer}</span>
                <span>📅{ticket.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
