import { HocType } from "@/types/ui/Hoc";

interface Props {
  time: string;
}

const format = Intl.DateTimeFormat("us", {
  day: "2-digit",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
}).format;

export const card: HocType<Props> = (Component: React.FC<any>) => ({
  Component: (props) => {
    const time = format(new Date(props.time));

    return (
      <div className="border border-gray-200 bg-white rounded-xl flex flex-col gap-y-2 py-2 px-4">
        <Component {...props} time={time} />
      </div>
    );
  },
});
