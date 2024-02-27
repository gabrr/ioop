import Title from "@/components/atoms/Title";
import Reminder from "@/components/molecules/Reminder";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    setInterval(() => {
      window.location.reload();
    }, 1_000 * 60 * 10);
  }, []);

  return (
    <main
      className={`grid bg-white min-h-screen grid-cols-3 gap-5 p-8 ${inter.className}`}
    >
      <div className="flex flex-col gap-y-3">
        <Title>Daily Goals</Title>

        <Reminder
          body="Workout - legs, arms and running"
          icon={"🙋🏻‍♂️"}
          time={new Date().toISOString()}
        />
      </div>

      <div className="flex flex-col gap-y-3">
        <Title>Reminders</Title>

        <Reminder
          body="Workout - legs, arms and running"
          icon={"🙋🏻‍♂️"}
          time={new Date().toISOString()}
        />
      </div>

      <div className="flex flex-col gap-y-3">
        <Title>Events</Title>

        <Reminder
          body="Workout - legs, arms and running"
          icon={"🙋🏻‍♂️"}
          time={new Date().toISOString()}
        />
      </div>
    </main>
  );
}
