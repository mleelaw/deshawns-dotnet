import { deleteDog, getDogList, getGreeting } from "../scripts/apiManager";
import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";



//welcome logic
export default function Home() {
  const [dogList, setDogList] = useState([])
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  useEffect(() => {
    getDogList().then((dogListDTOs) => {
      console.log(dogListDTOs);
      setDogList(dogListDTOs)
    })
  }, []);

  const handleDelete = async(id) => {
    await deleteDog(id);
    getDogList().then(setDogList);
}

  return (
    <>
      <h2>{greeting.message}</h2>
      {dogList.map(d => (
        <Card key={d.id}>
          <Card.Body>
            <Link to={`/dogs/${d.id}`}>
              {d.name}
            </Link>
          </Card.Body>
          <button onClick={() => handleDelete(d.id)}>Delete</button>
        </Card>
      ))}
      <Link to="/dogform">
      <button>
        Add Dog
        </button>
        </Link>
    </>
  )
}
