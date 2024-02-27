import React, { ReactNode } from "react";
import { card } from "./hocs/card";

interface Props {
  body: string;
  time: string;
  icon: ReactNode;
}

const Reminder = card<Props>(({ time, body, icon }) => {
  return (
    <>
      <div className="flex text-sm font-semibold justify-between items-center text-orange-500">
        <p>{time}</p>

        <span className="scale-[200%]">{icon}</span>
      </div>

      <h3 className="text-gray-600">{body}</h3>
    </>
  );
});

export default Reminder.Component;
