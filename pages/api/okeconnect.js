export default async function handler(req, res) {
  const SOURCE = 'https://okeconnect.com/harga/json?id=905ccd028329b0a';
  const markupPercent = Number(process.env.MARKUP_PERCENT || 2);
  const markupFixed = Number(process.env.MARKUP_FIXED || 1000);

  try {
    // Fetch dari server-side Vercel (bukan dari browser)
    const response = await fetch(SOURCE, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; VargasStoreBot/1.0)',
        'Accept': 'application/json'
      },
      cache: 'no-store' // biar selalu data baru
    });

    // Jika gagal fetch
    if (!response.ok) {
      return res.status(500).json({
        ok: false,
        error: `Gagal fetch (${response.status})`
      });
    }

    const data = await response.json();
    const grouped = {};

    // Kelompokkan data berdasarkan kategori & operator
    for (const item of data) {
      const kategori = (item.kategori || 'LAINNYA').toUpperCase();
      const operator = (item.produk || 'LAINNYA').toUpperCase();
      const harga = Number(item.harga) || 0;
      const hargaAkhir = Math.round(harga * (1 + markupPercent / 100)) + markupFixed;

      if (!grouped[kategori]) grouped[kategori] = {};
      if (!grouped[kategori][operator]) grouped[kategori][operator] = [];

      grouped[kategori][operator].push({
        kode: item.kode,
        nama: item.keterangan,
        harga,
        hargaAkhir
      });
    }

    // Sukses
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    res.status(200).json({ ok: true, data: grouped });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
}
