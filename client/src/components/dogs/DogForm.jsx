import { useEffect, useState } from "react";
import { addDog, getCityList, getWalkerList } from "../../scripts/apiManager";

export function DogForm() {
  const [cities, setCities] = useState([]);
  const [walkers, setWalkers] = useState([]);

  useEffect(() => {
    getCityList().then((cityList) => {
      setCities(cityList);
    });
  }, []);

  useEffect(() => {
    getWalkerList().then((walkerList) => {
      setWalkers(walkerList);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDog({
      name: event.target.name.value,
      walkerId: event.target.walker.value,
      cityId: event.target.city.value,
      isGood: true,
    });
  };

  return (
    <>
      <h2>Add A New Dog</h2>
      <form id="dog-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input name="name" id="name" placeholder="Your Dog's Name"></input>
        <div className="form-group">
          <select id="city" name="city">
            <option value="">Choose a City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <select id="walker" name="walker">
            <option value="">Choose a Walker</option>
            {walkers.map((walker) => (
              <option key={walker.id} value={walker.id}>
                {walker.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="isGood">Is Good:</label>
          <select id="isGood" name="isGood">
            <option value="true">Yes</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Dog
        </button>
      </form>
    </>
  );
}
