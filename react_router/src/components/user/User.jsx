import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-center text-3xl text-white bg-gray-700 p-4 m-4">
        User: {id}
      </h1>
    </div>
  );
}

export default User;
