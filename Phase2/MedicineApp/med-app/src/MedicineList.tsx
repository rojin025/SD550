import { useEffect, useState } from "react";
import { MedicineI } from "./types";
import { useParams } from "react-router-dom";
import axios from "axios";
import Medicine from "./Medicine";

export const BASE_URL = "localhost";

export default function MedicineList() {
  const [medicines, setMedicines] = useState<MedicineI[]>([]);
  const { patientId } = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        const res = await axios.get(`${BASE_URL}`);
        if (res.data) {
        }
      } catch (error) {}
    }
    loadData();
  }, []);

  return (
    <>
      <p>patientId</p>
      <div>
        {medicines.map((medicine) => (
          <Medicine key={medicine.medicineId} data={medicine} />
        ))}
      </div>
    </>
  );
}
