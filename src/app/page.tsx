import styles from "./page.module.css";
import { getPropertyByAddress } from "../lib/attom";
import { PropertyCard } from "../components/PropertyCard";

export default async function Home() {
  const data = await getPropertyByAddress({ address1: "50 Elda Dr", address2: "" })
  return (
    <div className={styles.home}>
      <h1>Lauren Ipsom Realty</h1>
      <PropertyCard
        address={data?.address?.line1}
        city={data?.address?.line2}
        bedrooms={data?.building?.rooms?.beds}
        bathrooms={data?.building?.rooms?.bathsTotal}
      />
    </div>
  );
}
