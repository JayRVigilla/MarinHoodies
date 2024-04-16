/** PropertySearchForm documentation
 */
"use client"
import {useState} from 'react'
import "./styles.css";
import { TextInput } from '../TextInput';
import { NumberSelector } from '../NumberSelector';

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
  const [minBeds, setMinBeds] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector
  const [maxBeds, setMaxBeds] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector
  const [minBaths, setMinBaths] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector
  const [maxBaths, setMaxBaths] = useState<number | undefined>(undefined); // make inputs some sort of increment/decrement selector

  return <form>

    <TextInput value={address } placeholder='' setValue={setAddress } label="address" />
    <TextInput value={city } placeholder='' setValue={setCity } label="city" />
    <TextInput value={state } placeholder='' setValue={setState } label="state" />
    <TextInput value={zipCode } placeholder='' setValue={setZipCode } label="zip code" />
    <NumberSelector value={minBeds } placeholder='' setValue={setMinBeds } label="minBeds" />
    <NumberSelector value={maxBeds } placeholder='' setValue={setMaxBeds } label="maxBeds" />
    <NumberSelector value={minBaths } placeholder='' setValue={setMinBaths } label="minBaths" />
    <NumberSelector value={maxBaths } placeholder='' setValue={setMaxBaths } label="maxBaths" />

  </form>;
};
