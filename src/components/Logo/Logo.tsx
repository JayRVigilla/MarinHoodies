/** Logo documentation
 */
import { Landscape } from "@mui/icons-material";
import "./styles.css";


export interface iLogoProps {
  "data-test-id"?: string;
  href?: string;
}

export const Logo = ({
href="/",
}: iLogoProps) => {

  return (
    <a className="Logo root" href={href}>
        <Landscape fontSize="large" />
        MarinHoodies
    </a>
  );
};
