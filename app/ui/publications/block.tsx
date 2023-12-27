import { Publication } from "@/app/lib/definitions";

export default function Block({ props }: { props: Publication }) {
  return (
    <div className="flex flex-row gap-8 text-white100 tracking-wider">
      <div className=" text-date font-thin min-w-20">
        {props.time.toUpperCase()}
      </div>
      <div className="text-base grow font-normal min-w-64">
        <h3 className="pb-2">{props.title}</h3>
        {/* <p className="text-xs font-thin text-date">{props.title}</p> */}
      </div>
    </div>
  );
}
