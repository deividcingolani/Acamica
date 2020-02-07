import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: null
};

export default function Layout(props) {
  return <div style={layoutStyle}>{props.children}</div>;
}
