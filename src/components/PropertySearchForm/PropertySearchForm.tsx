/** PropertySearchForm documentation
 */
"use client";
import { useCallback, useState } from "react";
import "./styles.css";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { getLongLatFromAddress } from "@/src/lib/positionstack";
import { useRouter } from "next/navigation";

export interface iPropertySearchFormProps {
  "data-test-id"?: string;
}

export const PropertySearchForm = ({}: iPropertySearchFormProps) => {
  const router = useRouter();

  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const clearForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!address && !city) return;
    setAddress("");
    setCity("");
  };

  const submitSearch = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (!address && !city) return;
      const locationData = await getLongLatFromAddress({
        address,
        city,
        state: "CA",
      });
      if (locationData) {
        const params = new URLSearchParams({
          ...locationData,
          address,
          city,
          state: "CA",
        });
        router.push(`/search?${params.toString()}`);
      }
    },
    [address, city]
  );

  return (
    <form className="property-search-form">
      <TextInput
        value={address}
        placeholder=""
        setValue={setAddress}
        label="address"
      />
      <TextInput value={city} placeholder="" setValue={setCity} label="city" />

      <div className="action-buttons">
        <Button label="Search" onClick={(event) => submitSearch(event)} />
        <Button label="Clear" onClick={(event) => clearForm(event)} />
      </div>
    </form>
  );
};
