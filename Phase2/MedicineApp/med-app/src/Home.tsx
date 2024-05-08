import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [patientId, setPatientId] = useState();
  const navTo = useNavigate();
}
