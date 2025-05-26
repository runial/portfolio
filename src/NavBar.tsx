import { type MouseEventHandler, useState, memo, useCallback } from 'react';
import { Button, ScrollToButton } from './Button.tsx';
import runialGradientLogo from './assets/img-og/runial_gradient.svg';
import menuIcon from './assets/img-og/menu.svg';
import closeMenuIcon from './assets/img-og/close_menu.svg';
import {
  SECTION_IDS,
  NAVBAR_EDUCATION,
  NAVBAR_INTERESTS,
  NAVBAR_PROJECTS,
  NAVBAR_CONTACT,
  ALT_TEXT_RUNIAL_LOGO,
} from './textConstants.ts';

interface NavButtonProps {
  id: string;
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NavButton = memo(function NavButton({
  id,
  text,
  className,
  onClick,
}: NavButtonProps) {
  return (
    <li className="flex items-center ">
      <ScrollToButton id={id} className={className} onClick={onClick}>
        {text}
      </ScrollToButton>
    </li>
  );
});

export const NavBar = memo(function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use functional update form for setMobileMenuOpen to avoid stale closure
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prevOpen) => !prevOpen);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="md:mx-5">
      <nav
        className={`px-10 py-6 fixed left-1/2 -translate-x-1/2 z-100 bg-bg-secondary items-center justify-center max-w-screen
         ${mobileMenuOpen ? 'w-screen h-screen' : ''} {/* Ensure conditional class is applied correctly */}
         md:flex md:w-auto md:h-auto
         lg:border-solid lg:border-1 lg:border-bg-tertiary
         lg:rounded-4xl lg:max-w-[calc(100vw-var(--spacing)*6)] lg:top-1`}
      >
        <div className="flex max-w-full w-3xl justify-between">
          <img src={runialGradientLogo} alt={ALT_TEXT_RUNIAL_LOGO} />

          {/* Non-mobile menu */}
          <ul className="md:flex hidden gap-6">
            <NavButton id={SECTION_IDS.EDUCATION} text={NAVBAR_EDUCATION} />
            <NavButton id={SECTION_IDS.INTERESTS} text={NAVBAR_INTERESTS} />
            <NavButton id={SECTION_IDS.PROJECTS} text={NAVBAR_PROJECTS} />
            <NavButton id={SECTION_IDS.CONTACT} text={NAVBAR_CONTACT} />
          </ul>

          {/* Mobile menu toggle button */}
          <Button className="block md:hidden" onClick={toggleMobileMenu}>
            <img
              src={mobileMenuOpen ? closeMenuIcon : menuIcon}
              alt="Menu icon"
            />
          </Button>
        </div>

        {/* Mobile menu list */}
        <ul
          className={`mt-12 gap-3 h-full md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} flex flex-col gap-x-1`}
        >
          <NavButton
            className="text-xl"
            onClick={closeMobileMenu}
            id={SECTION_IDS.EDUCATION}
            text={NAVBAR_EDUCATION}
          />
          <NavButton
            className="text-xl"
            onClick={closeMobileMenu}
            id={SECTION_IDS.INTERESTS}
            text={NAVBAR_INTERESTS}
          />
          <NavButton
            className="text-xl"
            onClick={closeMobileMenu}
            id={SECTION_IDS.PROJECTS}
            text={NAVBAR_PROJECTS}
          />
          <NavButton
            className="text-xl"
            onClick={closeMobileMenu}
            id={SECTION_IDS.CONTACT}
            text={NAVBAR_CONTACT}
          />
        </ul>
      </nav>
    </div>
  );
});
