import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Obrigado from "./pages/Obrigado";
import Upsell from "./pages/Upsell";
import Downsell from "./pages/Downsell";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta-especial" element={<Upsell />} />
        <Route path="/ultima-chance" element={<Downsell />} />
        <Route path="/obrigado" element={<Obrigado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
