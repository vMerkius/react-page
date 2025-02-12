import { useEffect, useState } from "react";
import { IItem } from "../../types/item";
import { useParams } from "react-router";
import Info from "./info";
import Description from "./description";
import Featured from "../featured/featured";
import LoadingDetails from "../loading/loading-details";
import ErrorInfo from "../UI/error-box";
import { fetchItem } from "../../utils/functions";

const Details = () => {
  const [item, setItem] = useState<IItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) fetchItem(setLoading, setItem, setError, id);
  }, [id]);

  if (error) {
    return <ErrorInfo message={error} />;
  }

  if (loading || !item) return <LoadingDetails />;

  return (
    <section className="details">
      <Info item={item} />
      <Description item={item} />
      <Featured related />
    </section>
  );
};

export default Details;
