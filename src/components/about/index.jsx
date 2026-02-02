import React from "react";
import Image from "next/image";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  const username = "rakeshivam";

  // ✅ Correct ENV variables
  const statsBase = process.env.NEXT_PUBLIC_GITHUB_BASE_URL;
  const streakBase = process.env.NEXT_PUBLIC_GITHUB_STREAK_BASE_URL;

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

        {/* About */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>

          <p className="font-light text-xs sm:text-sm md:text-base">
            My journey in web development is powered by modern tools and
            technologies like React, Next.js, Node.js, and Python. I build fast,
            scalable and beautiful web experiences while continuously learning
            and exploring new technologies.
          </p>
        </ItemLayout>

        {/* Clients */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="text-base">clients</sub>
          </p>
        </ItemLayout>

        {/* Experience */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="text-base">years experience</sub>
          </p>
        </ItemLayout>

        {/* Top Languages */}
        {/* <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <Image
            className="w-full h-auto"
            src={`${statsBase}/top-langs?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF`}
            alt="Top Languages"
            width={400}
            height={200}
            unoptimized
          />
        </ItemLayout> */}

        {/* GitHub Stats */}
        {/* <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <Image
            className="w-full h-auto"
            src={`${statsBase}?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B`}
            alt="GitHub Stats"
            width={600}
            height={250}
            unoptimized
          />
        </ItemLayout> */}

        {/* Skills */}
        <ItemLayout className="col-span-full">
          <Image
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=java,python,js,html,css,mysql,mongodb,express,react,nodejs,git,github,redux,aws,tailwind,vscode"
            alt="Skills"
            width={800}
            height={80}
            unoptimized
          />
        </ItemLayout>

        {/* GitHub Streak */}
        {/* <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Image
            className="w-full h-auto"
            src={`${streakBase}?user=${username}&theme=dark&hide_border=true`}
            alt="GitHub Streak"
            width={400}
            height={200}
            unoptimized
          />
        </ItemLayout> */}

        {/* Repo Pin */}
        {/* <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/rakeshivam/rakeshivam.github.io"
            target="_blank"
            className="w-full"
          >
            <Image
              className="w-full h-auto"
              src={`${statsBase}/pin?username=${username}&repo=rakeshivam.github.io&theme=transparent&hide_border=true`}
              alt="Pinned Repo"
              width={400}
              height={200}
              unoptimized
            />
          </Link>
        </ItemLayout> */}

      </div>
    </section>
  );
};

export default AboutDetails;
