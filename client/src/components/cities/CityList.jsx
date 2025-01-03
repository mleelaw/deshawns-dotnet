import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { deleteCity, getCityList } from "../../scripts/apiManager";


export default function Cities() {
  const [cityList, setcityList] = useState([])

  useEffect(() => {
      getCityList().then((cityListDTOs) => {
      setcityList(cityListDTOs)
    })
  }, []);

  const handleDelete = async(id) => {
    await deleteCity(id);
    getCityList().then(setcityList);
}

  return (
    <>
      <h2>Cities</h2>
      {cityList.map(c => (
        <Card key={c.id}>
          <Card.Body>
            <Link to={`/cities/${c.id}`}>
              {c.name}
            </Link>
          </Card.Body>
          <button onClick={() => handleDelete(c.id)}>Delete</button>
        </Card>
      ))}
      <Link to="/cityform">
      <button>
        Add City
        </button>
        </Link>
    </>
  )
}