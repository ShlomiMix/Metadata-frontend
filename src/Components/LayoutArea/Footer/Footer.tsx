import "./Footer.css";
import { useFooter } from "./hooks/useFooter";

export function Footer(): JSX.Element {
  const { getCurrentYear } = useFooter();
  return (
    <div className="Footer">
      <div>All Rights Reserved {getCurrentYear()} ©️</div>
    </div>
  );
}
