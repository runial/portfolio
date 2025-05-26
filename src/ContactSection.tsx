import { memo } from 'react';
import { Section } from './Section.tsx';
import { Link } from './Link.tsx';
import {
  SECTION_IDS,
  CONTACT_HEADER,
  CONTACT_SUBHEADER,
  CONTACT_EMAIL,
  GITHUB_ICON_ALT,
  DRIBBBLE_ICON_ALT,
  DISCORD_ICON_ALT,
  INSTAGRAM_ICON_ALT,
  SNAPCHAT_ICON_ALT,
  GITHUB_LINK,
  DRIBBBLE_LINK,
  DISCORD_LINK,
  INSTAGRAM_LINK,
  SNAPCHAT_LINK,
} from './textConstants.ts';
import githubIcon from './assets/img-og/github.svg';
import dribbbleIcon from './assets/img-og/dribbble.svg';
import discordIcon from './assets/img-og/discord.svg';
import instagramIcon from './assets/img-og/instagram.svg';
import snapchatIcon from './assets/img-og/snapchat.svg';

interface SocialMediaLinkProps {
  imgSrc: string;
  imgAlt: string;
  href: string;
}

function SocialMediaLink({ imgSrc, imgAlt, href }: SocialMediaLinkProps) {
  return (
    <li>
      <Link href={href}>
        <img src={imgSrc} alt={imgAlt} loading="lazy" />
      </Link>
    </li>
  );
}

export const ContactSection = memo(function ContactSection() {
  return (
    <Section id={SECTION_IDS.CONTACT} sectionName={CONTACT_HEADER}>
      <div className="flex flex-col lg:flex-row gap-4">
        <p className="text-xl flex-3">{CONTACT_SUBHEADER}</p>
        <div className="stylized-box flex flex-col gap-3 flex-4">
          <p className="text-fg-secondary text-lg">{CONTACT_EMAIL}</p>
          <ul className="flex gap-5">
            <SocialMediaLink
              imgSrc={githubIcon}
              imgAlt={GITHUB_ICON_ALT}
              href={GITHUB_LINK}
            />
            <SocialMediaLink
              imgSrc={dribbbleIcon}
              imgAlt={DRIBBBLE_ICON_ALT}
              href={DRIBBBLE_LINK}
            />
            <SocialMediaLink
              imgSrc={discordIcon}
              imgAlt={DISCORD_ICON_ALT}
              href={DISCORD_LINK}
            />
            <SocialMediaLink
              imgSrc={instagramIcon}
              imgAlt={INSTAGRAM_ICON_ALT}
              href={INSTAGRAM_LINK}
            />
            <SocialMediaLink
              imgSrc={snapchatIcon}
              imgAlt={SNAPCHAT_ICON_ALT}
              href={SNAPCHAT_LINK}
            />
          </ul>
        </div>
      </div>
    </Section>
  );
});
