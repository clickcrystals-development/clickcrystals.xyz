import Link from 'next/link';
import FooterInfo from './FooterInfo';

const footerLinks = [
  {
    title: 'Pages',
    links: [
      { name: 'Home', url: '/' },
      { name: 'Downloads', url: '/download' },
      { name: 'Gallery', url: '/gallery' },
      { name: 'Other Projects', url: '/projects' },
      { name: 'Help', url: '/help' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'ClickScript Wiki', url: 'https://bit.ly/ccs-wiki' },
      { name: 'Scripts Archive', url: '/scripts' },
      { name: 'Configs Library', url: '/configs' },
      { name: 'Script Editor', url: '/editor' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Discord', url: 'https://discord.gg/zg3ge9VTgr' },
      {
        name: 'GitHub',
        url: 'https://github.com/clickcrystals-development/ClickCrystals',
      },
      { name: 'YouTube', url: 'https://www.youtube.com/@itzispyder' },
    ],
  },
  {
    title: 'Download',
    links: [
      {
        name: 'PlanetMC',
        url: 'https://www.planetminecraft.com/mod/clickcrystal/',
      },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/clickcrystals-development/ClickCrystals',
      },
      { name: 'Modrinth', url: 'https://modrinth.com/mod/clickcrystals' },
      { name: 'Instant Download', url: '/get' },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="bg-blue-800/80">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 lg:px-6 py-6 lg:py-8 mx-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-lg font-extrabold text-gray-100">
                {section.title}
              </h2>
              <ul className="text-white font-medium">
                {section.links.map((link, linkIndex) => (
                  <li className="mb-4" key={linkIndex}>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
