export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  e.preventDefault();

  const targetId = href.replace('#', '');
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const navbarHeight = 80;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    setIsOpen?.(false);

    window.history.pushState(null, '', href);
  }
};
