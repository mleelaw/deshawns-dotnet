import { useEffect, useState } from "react";
import { getDogById } from "../../scripts/apiManager";
import { Link, useParams } from "react-router-dom";

export function DogDetails() {
  const { id } = useParams();
    const [dog, setDog] = useState({});
    
      useEffect(() => {
        getDogById(id).then((dogSelected) => {
            setDog(dogSelected);
        });
      }, []);
    
    
      return (
        <>
          <h2>Dog Details</h2>
          <div>Dog Name: {dog.name}</div>
          <div>Dog City: {dog.cityName}</div>
          <div>Dog Walker: {dog.walkerName}</div>
          <Link to="/">
            <button>Back Home</button>
            </Link>
        </>
      );
}