import Overview from "./components/overview";
import Skill from "./components/skill";
import History from "./components/history";
import LinksAndContact from "./components/linksAndContact";

export default function Home() {

  const td = new Date();

  return (
    <main className="container mx-auto px-8 bg-slate-950">
      <h1 className="text-4xl font-bold text-center mt-2">Sneko</h1>
      <hr className="my-2" />
      <Overview />
      <Skill />
      <History />
      <LinksAndContact />
      <hr className="my-1" />
      <div className="text-gray-50 text-center mb-1"><small>&copy;Sneko { td.getFullYear() }</small></div>
    </main>
  )
}