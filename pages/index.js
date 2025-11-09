import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});
  const [kategori, setKategori] = useState("");
  const [operator, setOperator] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const cfg = window.CONFIG || {};
        const res = await fetch(cfg.SOURCE_URL);
        const json = await res.json();
        if (json.ok) {
          setData(json.data);
          const first = Object.keys(json.data)[0];
          setKategori(first);
        }
      } catch {
        alert("Gagal memuat data harga.");
      }
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div style={{ textAlign: "center", marginTop: 60 }}>Loading...</div>;

  const kategoriList = Object.keys(data);
  const operatorList = kategori ? Object.keys(data[kategori]) : [];
  const produkList = operator ? data[kategori][operator] : [];

  const openWA = (p) => {
    const wa = window.CONFIG.WHATSAPP;
    const msg = `Halo, saya ingin beli ${p.nama} (kode: ${p.kode}) dengan harga Rp${p.hargaAkhir.toLocaleString()}`;
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const theme = window.CONFIG.THEME;

  return (
    <div style={{ background: theme.background, color: theme.text, minHeight: "100vh", padding: 20, fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: theme.primary }}>💰 Daftar Harga Produk</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 20 }}>
        {kategoriList.map((k) => (
          <button
            key={k}
            onClick={() => { setKategori(k); setOperator(""); }}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              background: kategori === k ? theme.primary : "#eee",
              color: kategori === k ? "#fff" : "#333",
              fontWeight: 600,
              transition: "0.2s"
            }}
          >
            {k}
          </button>
        ))}
      </div>

      {kategori && operatorList.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 20 }}>
          {operatorList.map((op) => (
            <button
              key={op}
              onClick={() => setOperator(op)}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: "none",
                background: operator === op ? theme.accent : "#ddd",
                color: operator === op ? "#fff" : "#333",
                cursor: "pointer",
                fontWeight: 500
              }}
            >
              {op}
            </button>
          ))}
        </div>
      )}

      {operator && produkList.length > 0 && (
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {produkList.map((p) => (
            <div
              key={p.kode}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 12,
                marginBottom: 10
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{p.nama}</div>
                <div style={{ color: "#555", fontSize: 13 }}>Rp{p.hargaAkhir.toLocaleString()}</div>
              </div>
              <button
                onClick={() => openWA(p)}
                style={{
                  background: theme.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 14px",
                  cursor: "pointer"
                }}
              >
                Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
    }
