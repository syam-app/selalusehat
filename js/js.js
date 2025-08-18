
  const notifBox = document.getElementById("orderNotif");
  const notifText = document.getElementById("notifText");
  const notifPayment = document.getElementById("notifPayment");

  function formatDateTime() {
    const now = new Date();
    const tanggal = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const jam = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return `<i>${tanggal} | ${jam} WIB</i>`;
  }

  function showNotif(order) {
    notifText.innerHTML = `<strong>${order.nama}</strong> dari ${order.alamat} baru saja membeli ${order.jumlah} Botol <strong>${order.produk}</strong>`;
    notifPayment.innerHTML = formatDateTime();

    notifBox.style.display = "block";
    notifBox.classList.add("show");

    setTimeout(() => {
      notifBox.classList.remove("show");
      setTimeout(() => {
        notifBox.style.display = "none";
      }, 1000);
    }, 4000);
  }

  function startNotifLoop(DATA_ORDER) {
    let index = 0;
    setInterval(() => {
      const order = DATA_ORDER[index];
      showNotif(order);
      index = (index + 1) % DATA_ORDER.length;
    }, 6000);
  }

  async function loadOrders() {
    try {
      // 👉 ganti URL ini dengan link raw JSON kamu
      const res = await fetch("https://raw.githubusercontent.com/syam-app/selalusehat/refs/heads/main/data-customer.json");
      const DATA_ORDER = await res.json();
      startNotifLoop(DATA_ORDER);
    } catch (err) {
      console.error("Gagal mengambil data order:", err);
    }
  }

  loadOrders();

  // form order
  const DATA_URL = "https://raw.githubusercontent.com/syam-app/jejelan/refs/heads/main/wilayah-id.json";
let wilayahData = [];
let timeout;

// Load data kecamatan dari GitHub JSON saat pertama input
async function loadWilayahData() {
  if (wilayahData.length === 0) {
    try {
      const res = await fetch(DATA_URL);
      wilayahData = await res.json();
      console.log("Data wilayah berhasil dimuat:", wilayahData.length);
    } catch(err) {
      console.error("Gagal membaca DATA_KEC dari file", err);
    }
  }
}

document.getElementById('alamatutama').addEventListener('input', async function() {
  const keyword = this.value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');
  clearTimeout(timeout);

  if (keyword.length < 3) {
    resultsDiv.innerHTML = "<div class='p-2 text-muted'>Ketik minimal 3 huruf...</div>";
    return;
  }

  resultsDiv.innerHTML = "<div class='p-2 text-primary'>Mencari...</div>";

  timeout = setTimeout(async () => {
    await loadWilayahData();

    const resultsArray = wilayahData.filter(item => item.kecamatan.toLowerCase().includes(keyword));
    
    if (resultsArray.length === 0) {
      resultsDiv.innerHTML = "<div class='p-2 text-danger'>Tidak ada hasil ditemukan</div>";
      return;
    }

    resultsDiv.innerHTML = resultsArray.slice(0,50).map(item => `
      <div class="result-item" 
           data-kec="${item.kecamatan}" 
           data-kab="${item.kabupaten}" 
           data-prov="${item.provinsi}">
        <small>${item.kecamatan}, ${item.kabupaten}, ${item.provinsi}</small>
      </div>
    `).join('');

    document.querySelectorAll('.result-item').forEach(el => {
      el.addEventListener('click', () => {
        const fullAddress = `${el.dataset.kec}, ${el.dataset.kab}, ${el.dataset.prov}`;
        document.getElementById('alamatutama').value = fullAddress;
        resultsDiv.innerHTML = "";
      });
    });

  }, 400); // debounce 400ms
});

//kirim wa
const scriptURL = 'https://script.google.com/macros/s/AKfycbzVsoly_ogNtebfn1A5CqPy1XVG69TEqg_PUQk6Rb8oV7daLEsbtzEftD-mVfhj19cnQw/exec';
const form = document.getElementById('orderForm');
const status = document.getElementById('status');
const tombol = document.getElementById('tombolformsubmit');

form.addEventListener('submit', e => {
  e.preventDefault();

  tombol.disabled = true;
  tombol.textContent = "Mengirim...";
  status.textContent = "Sedang mengirim...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      status.textContent = "Data berhasil dikirim!";
      tombol.textContent = "Terkirim ✅";

      // Ambil data user
      const nama = form.nama.value || 'Pelanggan';
      const paketobat = form.paket.value || 'Produk';

      // Reset form
      form.reset();

      // Isi teks modal
      document.getElementById("judulModal").innerHTML =
        `<span class="text-uppercase">Halo Pak/Bu ${nama}</span>`;

document.getElementById("thanksText").innerHTML =`
<div class="text-center bg-light rounded-4 shadow-sm">
  <img class="img-thumbnail rounded-5" style="width: 100%; max-width: 200px;" src="/assets/dokter.png" alt="">
  <p class="h5 fw-bold text-success my-2">
    Terima Kasih Telah Melakukan Pengisian Formulir Pemesanan ${paketobat}
  </p>
  <blockquote class="fst-italic text-secondary lh-sm">"Kami Doakan Semoga Dengan Perantara Obat Jantung Xerdiove Ini, Penyakit Jantung Anda Dapat Secepatnya Sembuh seperti Pasien Kami yang sudah Berhasil Sembuh. AMIIIN YAROBBAL'ALAMIN"</blockquote>
  <p class="h6 mb-2">
    Selanjutnya klik tombol <span class="fw-semibold text-success">Konfirmasi Pemesanan</span> di bawah ini
  </p>
  <p class="lh-sm h6">
    Agar Anda dapat langsung terhubung dengan kami untuk melakukan konfirmasi pesanan
  </p>
</div>`;

      // Tampilkan modal
      const modal = new bootstrap.Modal(document.getElementById('thanksModal'));
      modal.show();

      // Tombol WA
      const waPenjual = '6285185044075';
      const pesan = `Halo Dok, Saya sudah melakukan pemesanan *${paketobat}* atas nama *${nama}*. Mohon segera diproses ya. Terima kasih :)`;
      const waLink = `https://wa.me/${waPenjual}?text=${encodeURIComponent(pesan)}`;

      document.getElementById("btnWA").onclick = () => {
        window.open(waLink, '_blank');
      };
    })
    .catch(error => {
      status.textContent = "Gagal mengirim data.";
      console.error('Error!', error.message);

      tombol.disabled = false;
      tombol.textContent = "Kirim Ulang Pesanan";
    });
});


