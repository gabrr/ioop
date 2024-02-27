import React, { ReactNode } from "react";
import { Card } from "./hocs/Card";

interface Props {
  body: string;
  time: string;
  icon: ReactNode;
}

const Reminder = Card<Props>(({ time, body, icon }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p>{time}</p>

        {icon}
      </div>

      <h3>{body}</h3>
    </>
  );
});

export default Reminder;
