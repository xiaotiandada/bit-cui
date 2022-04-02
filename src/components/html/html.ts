
export type HtmlProps = {
  text: string
}
export function Html({text}: HtmlProps) {
  return `<div>${text}</div>`;
}
