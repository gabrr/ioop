import Title from "@/components/atoms/Title";
import Reminder from "@/components/molecules/Card";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 1_000 * 60 * 2);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main
      className={`grid bg-white min-h-screen grid-cols-3 gap-5 p-8 ${inter.className}`}
    >
      <div className="flex flex-col gap-y-3">
        <Title>Daily Goals</Title>

        <Reminder
          type="Goal"
          body="List 3 things to be grateful"
          icon={"🙋🏻‍♀️"}
          time={new Date().toISOString()}
        />

        <Reminder
          type="Goal"
          body="Workout - legs, arms and running"
          icon={"👩🏻‍❤️‍👨🏽"}
          time={new Date().toISOString()}
        />

        <Reminder
          type="Goal"
          body="Read bible"
          icon={"👩🏻‍❤️‍👨🏽"}
          time={new Date().toISOString()}
        />
      </div>

      <div className="flex flex-col gap-y-3">
        <Title>Reminders</Title>

        <Reminder
          type="Reminder"
          body="Workout - legs, arms and running"
          icon={"🙋🏻‍♂️"}
          time={new Date().toISOString()}
        />
      </div>

      <div className="flex flex-col gap-y-3">
        <Title>Events</Title>

        <Reminder
          type="Event"
          body="Workout - legs, arms and running"
          icon={"🙋🏻‍♂️"}
          time={new Date().toISOString()}
        />
      </div>
    </main>
  );
}
