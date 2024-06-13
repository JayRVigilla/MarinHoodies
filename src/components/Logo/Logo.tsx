/** Logo documentation
 */
import { Landscape } from "@mui/icons-material";
import "./styles.css";


export interface iLogoProps {
  "data-test-id"?: string;
}

export const Logo = ({

}: iLogoProps) => {

  return (
    <span className="Logo root">
        <Landscape fontSize="large" />
        MarinHoodies
    </span>
  );
};
