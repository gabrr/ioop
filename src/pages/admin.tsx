import React from "react";

const Admin = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-xl">Reminders</p>

        <button>Add Reminder</button>
      </div>
      <div>
        <p className="text-xl">Tasks</p>
      </div>
      <div>
        <p className="text-xl">Events</p>
      </div>
    </div>
  );
};

export default Admin;
