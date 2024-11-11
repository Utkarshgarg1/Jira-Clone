export function Kanban(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm3 2q-.425 0-.712.288T7 8v8q0 .425.288.713T8 17t.713-.288T9 16V8q0-.425-.288-.712T8 7m8 0q-.425 0-.712.288T15 8v6q0 .425.288.713T16 15t.713-.288T17 14V8q0-.425-.288-.712T16 7m-4 0q-.425 0-.712.288T11 8v3q0 .425.288.713T12 12t.713-.288T13 11V8q0-.425-.288-.712T12 7"
      ></path>
    </svg>
  );
}
