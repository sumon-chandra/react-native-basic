import { useParams, useLoaderData } from "react-router-dom";

const CareerDetails = () => {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <p>Career details page</p>
      <h2>Career details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
        architecto, nesciunt dolor tenetur, dignissimos minima omnis ut veniam
        dolorem ipsam neque at. Ipsam fugiat ipsum explicabo ad voluptates aut
        tempora.
      </p>
    </div>
  );
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);
  if (!res.ok) {
    throw new Error(`Could not find that career`);
  }
  return res.json();
};
