import { Degree } from "@/app/lib/definitions";

export default function Block({ props }: { props: Degree }) {
  return (
    <div className="flex flex-row gap-8 text-white100 tracking-wider">
      <div className=" text-date font-thin min-w-48">
        {props.degree_period.toUpperCase()}
      </div>
      <div className="text-base grow font-normal min-w-64">
        <h3 className="pb-2">
          {props.title} in {props.major}
        </h3>
        <p className="text-xs font-thin text-date">{props.university}</p>
      </div>
    </div>
  );
}
