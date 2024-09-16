'use client'

import { ExploreScriptsButton, GetClickCrystalsButton } from "@/components/ui/buttons/all"

export default function CCS() {
  return (
    <section className="my-10">
      <div className="py-0 px-4 max-w-full grid gap-8">
        <div className="place-self-center col-span-5 lg:col-span-7">
          <h1 className="text-center text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl lg:max-w-2xl mb-6 m-0">
            Meet <span className="text-blue-600">ClickScript</span>—Your Personalized
            <br />
            Custom <span className="text-blue-600">Scripting Language</span>!
          </h1>
          <p className="text-gray-500 font-normal max-w-2xl m-0 text-center">
            ClickCrystals Script (CCS) lets you create modules, macros, and more. Write .ccs files, and use our in-game editor to build, debug, and run scripts. Download and enable scripts from our online library or manually add your own. Explore prebuilt scripts published by community and staff on our discord!
          </p>
          <div className="text-gray-500 text-xs my-4 text-center">We have killauras, powerful macros & lot amazing scripts that have been proven to bypass anticheats</div>
          <div className="flex flex-row gap-4 justify-center">
            <GetClickCrystalsButton name="Script Editor" link="/editor" />
            <ExploreScriptsButton />
          </div>
        </div>
      </div>
    </section>
  )
}
