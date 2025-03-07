import Image from "next/image";

import type { HistoryData } from "./types/HistoryData/";
import Overview from "./components/overview";
import Skill from "./components/skill";
import History from "./components/history";
import LinksAndContact from "./components/linksAndContact";

export default function Home() {
  const overview_content =
    "Hi there. I'm Sneko. I can write some programs and I'm particularly interested in backend development. A bit about me: I love cats, though I don't have one at the moment.";
  const skill_content =
    "I have over 8 years of experience in PHP and JavaScript, a little bit of Python, and can write TypeScript, Java, C#, etc. Rust is under study. I can use MySQL and PostgreSQL as databases. My favorite tools are Git and Docker.";
  const history_content: HistoryData[] = [
    { title: "Aug 1992", content: "I was born." },
    { title: "Apr 2015", content: "First programming." },
    { title: "Apr 2017", content: "Joined a software development company." },
    { title: "Jul 2999", content: "R.I.P" },
  ];
  const td = new Date();

  return (
    <main className="container mx-auto px-8 bg-slate-950">
      <div className="flex items-center justify-center">
        <Image
          src="/paws.png"
          alt="Paw icon"
          width={30}
          height={30}
          className="mr-1 mt-2"
        />
        <h1 className="text-4xl font-bold text-gray-50 text-center mt-2">
          Sneko
        </h1>
      </div>
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
