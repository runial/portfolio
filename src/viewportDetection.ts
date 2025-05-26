const documentComputedStyle = getComputedStyle(document.documentElement);
export const mdBreakpoint =
  documentComputedStyle.getPropertyValue('--breakpoint-md');
