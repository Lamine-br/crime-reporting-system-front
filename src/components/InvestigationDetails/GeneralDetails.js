export default function GeneralDetails({ data }) {
  return (
    <div className="w-full px-10 py-2 mt-10 flex flex-col">
      <div className="flex flex-col gap-4 w-full p-4 rounded-md border-solid border-2 border-azegza">
        <h2 className="text-xl text-center font-semibold w-24 relative top-0 -mt-8 bg-gray-100 px-2 ">
          General
        </h2>

        <div className="w-full grid grid-cols-3 text-lg font-bold">
          <div className="col-span-1 font-normal mb-1 flex">
            <h4 className="text-lg font-semibold">Report # :&nbsp; </h4>{" "}
            {data.idReport}
          </div>
          <div className="col-span-1 font-normal mb-1 flex">
            <h4 className="text-lg font-semibold">Opened on :&nbsp; </h4>{" "}
            {data.openingDate}
          </div>
          <div className="col-span-1 font-normal mb-1 flex">
            <h4 className="text-lg font-semibold">Time :&nbsp; </h4>{" "}
            {data.openingTime}
          </div>
          <div className="col-span-1 font-normal mb-1 flex">
            <h4 className="text-lg font-semibold"> Status :&nbsp; </h4>
            {"  "}
            {" " + data.status}
          </div>
          <div className="col-span-1 font-normal mb-1 flex">
            <h4 className="text-lg font-semibold">Closed on :&nbsp; </h4>{" "}
            {data.closingDate}
          </div>
          <div className="col-span-1 font-normal mb-1 flex">
            <h4 className="text-lg font-semibold">Time :&nbsp; </h4>
            {data.closingTime}
          </div>
          <div className="col-span-1 font-normal mb-1 flex">
            <h4 className="text-lg font-semibold">Started by :&nbsp; </h4>{" "}
            {data.idCitizen}
          </div>
        </div>
      </div>
    </div>
  );
}
