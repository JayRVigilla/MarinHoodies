import styles from "./page.module.css";
import { getPropertyByAddress } from "../lib/attom";
import { PropertyCard } from "../components/PropertyCard";
import { PropertySearchForm } from "../components/PropertySearchForm";

export default async function Home() {
  const data = await getPropertyByAddress({ address1: "50 Elda Dr", address2: "" })
  return (
    <div className={styles.home}>
      <h1>Lauren Ipsom Realty</h1>
      <PropertySearchForm />
      {data?.map((property) => {
        return(
        <PropertyCard
        address={property?.address?.line1}
        city={property?.address?.line2}
        bedrooms={property?.building?.rooms?.beds}
        bathrooms={property?.building?.rooms?.bathsTotal}
        />)
      })}
    </div>
  );
}
