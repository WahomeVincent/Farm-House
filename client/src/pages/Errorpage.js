import { Link, useRouteError } from "react-router-dom";

export default function Errorpage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-base">Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className="bg-cgreen text-white p-2 rounded">Back home</Link>
    </div>
  );
}