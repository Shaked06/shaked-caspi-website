import { Work } from "@/app/lib/definitions";

export default function Block({ props }: { props: Work }) {
  return (
    <div className="flex flex-row gap-8 text-white100 tracking-wider">
      <div className=" text-date font-thin min-w-40">
        {props.work_period.toUpperCase()}
      </div>
      <div className="text-base grow font-normal min-w-64">
        <h3 className="pb-2">
          {props.title} @ {props.place}
        </h3>

        <p className="text-xs font-thin text-date">{props.desc}</p>
      </div>
    </div>
  );
}
