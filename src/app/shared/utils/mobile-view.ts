export const MOBILE_VIEW_THRESHOLD = 700;

export function isMobileView(): boolean {
  return (
    window.innerWidth < MOBILE_VIEW_THRESHOLD ||
    window.outerWidth < MOBILE_VIEW_THRESHOLD
  );
}
