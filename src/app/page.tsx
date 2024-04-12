import styles from "./page.module.css";
import { getPropertyById } from "../lib/attom";
import { PropertyCard } from "../components/PropertyCard";

export default async function Home() {
  const data = await getPropertyById('156707266')

  return (
    <div className={styles.home}>
      <h1>Lauren Ipsom Realty Empty</h1>
      <PropertyCard
        address={data.address?.line1}
        city={data.address?.line2}
        bedrooms={data.building?.rooms?.beds}
        bathrooms={data.building?.rooms?.bathstotal}
      />
    </div>
  );
}
