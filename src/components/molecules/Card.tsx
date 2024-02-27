import React, { ReactNode } from "react";
import { card } from "./hocs/card";
import clsx from "clsx";

interface Props {
  body: string;
  time: string;
  icon: ReactNode;
  type: "Reminder" | "Goal" | "Event";
}

const Reminder = card<Props>(({ time, body, icon, type }) => {
  return (
    <>
      <div className="flex text-sm font-semibold justify-between items-cente">
        <p
          className={clsx({
            "text-orange-500": type === "Reminder",
            "text-sky-600": type === "Goal",
            "text-green-600": type === "Event",
          })}
        >
          {time}
        </p>

        <span className="scale-[200%]">{icon}</span>
      </div>

      <h3 className="text-gray-600">{body}</h3>
    </>
  );
});

export default Reminder.Component;
