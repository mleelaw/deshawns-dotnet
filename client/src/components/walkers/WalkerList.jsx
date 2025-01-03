import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { deleteWalker, getWalkerList } from "../../scripts/apiManager";


export default function Walkers() {
  const [walkerList, setWalkerList] = useState([])

  useEffect(() => {
    getWalkerList().then((walkerListDTOs) => {
      setWalkerList(walkerListDTOs)
    })
  }, []);

  const handleDelete = async(id) => {
    await deleteWalker(id);
    getWalkerList().then(setWalkerList);
}

  return (
    <>
      <h2>Walkers</h2>
      {walkerList.map(w => (
        <Card key={w.id}>
          <Card.Body>
            <Link to={`/walkers/${w.id}`}>
              {w.name}
            </Link>
          </Card.Body>
          <button onClick={() => handleDelete(w.id)}>Delete</button>
        </Card>
      ))}
      <Link to="/walkerform">
      <button>
        Add Walker
        </button>
        </Link>
    </>
  )
}