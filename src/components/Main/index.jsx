import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { HeadLine } from "src/components/Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
      <HeadLine page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </HeadLine>
      <Links />
    </main>
  );
}
