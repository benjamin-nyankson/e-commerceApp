import React, { useEffect, useState } from "react";
import { DUMMy_API } from "../../Services/api";
export default function useFragrances() {
  const [fragrances, setFragrances] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await DUMMy_API.get("products/category/fragrances");
        setLoading(false);
        console.log(response);
        setFragrances(response?.data?.products);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [fragrances, loading];
}
