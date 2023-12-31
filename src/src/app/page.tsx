import type { HistoryData } from "./components/historyData";
import Overview from "./components/overview";
import Skill from "./components/skill";
import History from "./components/history";
import LinksAndContact from "./components/linksAndContact";

export default function Home() {
  const overview_content =
    "Hello,there.I am Sneko. I can write a little program. I am more interested in the backend. What else? I like cats, but I don't have one, because I'm a cat myself.";
  const skill_content =
    "I have over 4 years of experience in PHP and JavaScript, a little bit of Python, and can write TypeScript, Java, C#, etc. Rust is under study. I can use MySQL and PostgreSQL as databases. My favorite tools are Git and Docker.";
  const history_content: HistoryData[] = [
    { title: "Aug 1992", content: "I was born." },
    { title: "Apr 2015", content: "First programming." },
    { title: "Apr 2017", content: "Joined a software development company." },
    { title: "Jul 2999", content: "R.I.P" },
  ];
  const td = new Date();

  return (
    <main className="container mx-auto px-8 bg-slate-950">
      <h1 className="text-4xl font-bold text-gray-50 text-center mt-2">Sneko</h1>
      <hr className="my-2" />
      <Overview content={overview_content} />
      <Skill content={skill_content} />
      <History content={history_content} />
      <LinksAndContact />
      <hr className="my-1" />
      <div className="text-gray-50 text-center mb-1">
        <small>&copy;Sneko {td.getFullYear()}</small>
      </div>
    </main>
  );
}
