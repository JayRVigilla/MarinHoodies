/** PropertySearchForm documentation
 */

import {useState} from 'react'
import "./styles.css";

export interface PropertySearchFormProps {
"data-test-id"?: string;
}

export const PropertySearchForm = () => {
  // * hooks
  // const hook = () => {};

  // * state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [minBaths, setMinBaths] = useState("");
  const [maxBaths, setMaxBaths] = useState("");

  // * useEffects
  // useEffect(() => {
  // first
  // return ({}: PropertySearchFormProps) => {
  // second
  // }
  // }, [third])

  return <form>
    PropertySearchForm
    <input type="text" placeholder="address"/>
    <input type="text" placeholder="city"/>
    <input type="text" placeholder="state"/>
    <input type="text" placeholder="zip code"/>
    <input type="text" placeholder="minBeds"/>
    <input type="text" placeholder="maxBeds"/>
    <input type="text" placeholder="minBaths"/>
    <input type="text" placeholder="maxBaths"/>

  </form>;
};
