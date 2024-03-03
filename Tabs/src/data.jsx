export const Random = () => {
  return <div>Random Component</div>;
};
export const data = [
  {
    label: "Tab 1",
    content: <div>Tab 1 Content</div>,
  },
  {
    label: "Tab 2",
    content: <div>Tab 2 Content</div>,
  },
  {
    label: "Tab 3",
    content: <Random />,
  },
];
