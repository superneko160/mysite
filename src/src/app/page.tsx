import Image from "next/image";
import type { HistoryData } from "./types/HistoryData/";
import ThemeToggle from "./components/themeToggle";
import FadeInSection from "./components/fadeInSection";
import Overview from "./components/overview";
import Skill from "./components/skill";
import History from "./components/history";
import LinksAndContact from "./components/linksAndContact";
import ThemeProvider from "./components/ThemeProvider";

export default function Home() {
  const overview_content =
    "Hi there. I'm Sneko. I can write some programs and I'm particularly interested in backend development. A bit about me: I love cats, though I don't have one at the moment.";
  const history_content: HistoryData[] = [
    { title: "Aug 1992", content: "I was born." },
    { title: "Apr 2015", content: "First programming." },
    { title: "Apr 2017", content: "Joined a software development company." },
    { title: "Jul 2999", content: "R.I.P" },
  ];
  const td = new Date();

  return (
    <ThemeProvider>
      <main className="container mx-auto px-8 bg-stone-200 dark:bg-neutral-900">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/paws.png"
              alt="Paw icon"
              width={30}
              height={30}
              className="mr-1 mt-2 hidden dark:block"
            />
            <Image
              src="/paws_light_theme.png"
              alt="Paw icon"
              width={30}
              height={30}
              className="mr-1 mt-2 dark:hidden"
            />
            <h1 className="text-4xl font-bold text-gray-600 dark:text-amber-100 text-center mr-4 mt-2">
              Sneko
            </h1>
          </div>
          <div className="mt-2 ml-auto">
            <ThemeToggle />
          </div>
        </div>
        <hr className="border-stone-300 dark:border-amber-100 my-2" />

        <FadeInSection>
          <Overview content={overview_content} />
        </FadeInSection>

        <FadeInSection>
          <Skill />
        </FadeInSection>

        <FadeInSection>
          <History content={history_content} />
        </FadeInSection>

        <FadeInSection>
          <LinksAndContact />
        </FadeInSection>

        <hr className="border-stone-300 dark:border-amber-100 my-1" />
        <div className="text-gray-600 dark:text-amber-100 text-center mb-2">
          <small>&copy;Sneko 2023 - {td.getFullYear()}</small>
        </div>
      </main>
    </ThemeProvider>
  );
}
