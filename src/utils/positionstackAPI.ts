export type tGeoCodeResponse = {
  latitude: number;
            longitude: number
            type: string;
            name: string;
            number: string;
            postal_code: string;
            street: string;
            confidence: string;
            region: string;
            region_code: string;
            county: string;
            locality: string;
            administrative_area: string | null;
            neighbourhood: string | null;
            country: string;
            country_code: string;
            continent: string;
            label: string;
        }