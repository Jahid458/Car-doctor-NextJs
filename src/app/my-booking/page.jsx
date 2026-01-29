// "use client";
import MyBookingTables from "@/components/tables/MyBookingTables";
import { headers } from "next/headers";

const fetchMyBookings = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: new Headers(await headers()),
  });
  const d = await res.json();
  // setData(d);
  return d;
};
export default async function MyBookingPage() {
  const data = await fetchMyBookings();
  // const [data, setData] = useState([]);
  // useEffect(() => {

  //   fetchMyBookings();
  // }, []);

  return (
    <div>
      <MyBookingTables data={data} />
    </div>
  );
}
