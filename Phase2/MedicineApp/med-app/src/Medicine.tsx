import { MedicineI } from "./types";

interface props {
  data: MedicineI;
}

function Medicine({ data }: props) {
  return (
    <div>
      <p>{data.name}</p>
      <button>Refill</button>
      <button>Take</button>
    </div>
  );
}

export default Medicine;
