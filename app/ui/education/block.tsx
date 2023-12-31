import { Degree } from "@/app/lib/definitions";

export default function Block({ props }: { props: Degree }) {
  return (
    <div className="flex flex-col md:flex-row md:grow md:gap-8 text-white100 tracking-wider">
      <div className="text-sm md:text-base text-date font-thin min-w-48 text-wrap">
        {props.degree_period.toUpperCase()}
      </div>
      <div className="text-sm md:text-base grow font-normal md:font-normal min-w-64">
        <h3 className="pb-2">
          {props.title} in {props.major}
        </h3>
        <p className="text-xs font-thin text-date">{props.university}</p>
      </div>
    </div>
  );
}
