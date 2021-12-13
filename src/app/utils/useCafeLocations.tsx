import { useState } from "react";

export default function UseLocation() {
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async (location: {
    name: string;
    address: string;
    postcode: string;
    city: string;
    lat: number;
    lng: number;
  }) => {
    setIsLoading(true);
    await fetch("http://localhost:3001/api/locations", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    });
    setIsLoading(false);
  };

  return { isLoading, getLocation };
}
