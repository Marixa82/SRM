import {ActiveLabel, NotActiveLabel} from "./components/index";
// import NotActiveLabel from "./components/not-active-label";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}