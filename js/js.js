const notifBox = document.getElementById("orderNotif");
const notifText = document.getElementById("notifText");
const notifPayment = document.getElementById("notifPayment");

function formatDateTime() {
    const now = new Date();
    const jam = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit"
    });
    return `<i>Pesanan dikonfirmasi Pukul ${jam}</i>`; 
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

// langsung inline datanya
const DATA_ORDER = [
    {"nama":"Farida","alamat":"Plaju","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Ahmad","alamat":"Lhokseumawe","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Rahmat","alamat":"Pontianak Kota","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Ridwan","alamat":"Rawalo","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Anton","alamat":"Cipari","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Puji","alamat":"Tabanan","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Lina","alamat":"Denpasar Timur","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Samsul","alamat":"Cipari","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Imam","alamat":"Ajibarang","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Ratna","alamat":"Mertoyudan","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Bambang","alamat":"Purwokerto Utara","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Sri","alamat":"Wonosobo","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Yudi","alamat":"Banjarnegara","jumlah":5,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Nurul","alamat":"Pekalongan Barat","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Hari","alamat":"Tegal Timur","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Siti","alamat":"Brebes","jumlah":6,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Gunawan","alamat":"Cirebon Selatan","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Wahyuni","alamat":"Kuningan","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Joko","alamat":"Majalengka","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Anisa","alamat":"Sumedang","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Sugeng","alamat":"Cimahi","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Utami","alamat":"Bandung Barat","jumlah":5,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Bayu","alamat":"Garut","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Dewi","alamat":"Tasikmalaya","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Slamet","alamat":"Banjar","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Rina","alamat":"Ciamis","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Budi","alamat":"Pangandaran","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Yuliana","alamat":"Purwakarta","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Hendra","alamat":"Karawang Barat","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Citra","alamat":"Bekasi Timur","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Suryo","alamat":"Depok Barat","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Maya","alamat":"Sukabumi Utara","jumlah":5,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Rizal","alamat":"Bogor Tengah","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Hesti","alamat":"Serang","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Teguh","alamat":"Tangerang Selatan","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Lukman","alamat":"Pandeglang","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Indah","alamat":"Lebak","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Rudi","alamat":"Bekasi Selatan","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Agus","alamat":"Jakarta Barat","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Yani","alamat":"Jakarta Selatan","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Nugroho","alamat":"Jakarta Timur","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Wulan","alamat":"Jakarta Pusat","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Rangga","alamat":"Bogor Utara","jumlah":6,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Nia","alamat":"Depok Timur","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Aminah","alamat":"Probolinggo","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Guntur","alamat":"Situbondo","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Munir","alamat":"Bondowoso","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Rika","alamat":"Banyuwangi","jumlah":5,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Suriani","alamat":"Jombang","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Kurnia","alamat":"Mojokerto","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Samsuri","alamat":"Magetan","jumlah":6,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Wati","alamat":"Trenggalek","jumlah":5,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Burhan","alamat":"Tulungagung","jumlah":3,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Rosyid","alamat":"Blitar","jumlah":1,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Maisaroh","alamat":"Nganjuk","jumlah":2,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Agung","alamat":"Kota Malang","jumlah":4,"produk":"Xerdiove Obat Jantung"},
    {"nama":"Prasetyo","alamat":"Surabaya Timur","jumlah":6,"produk":"Xerdiove Obat Jantung"}
];

// tunda start notif 3 detik setelah halaman load
window.addEventListener("load", () => {
    setTimeout(() => {
        startNotifLoop(DATA_ORDER);
    }, 3000);
});
//----------------------------------------------------------------
const DATA_URL = "https://cdn.jsdelivr.net/gh/syam-app/jejelan/wilayah-id.json";
let wilayahData = [];
let timeout;
async function loadWilayahData() {
    if (wilayahData.length === 0) {
        try {
            const res = await fetch(DATA_URL);
            wilayahData = await res.json();
            console.log("Data wilayah berhasil dimuat:", wilayahData.length)
        } catch (err) {
            console.error("Gagal membaca DATA_KEC dari file", err)
        }
    }
}
document.getElementById('alamatutama').addEventListener('input', async function() {
    const keyword = this.value.trim().toLowerCase();
    const resultsDiv = document.getElementById('results');
    clearTimeout(timeout);
    if (keyword.length < 3) {
        resultsDiv.innerHTML = "<div class='p-2 text-muted'>Ketik minimal 3 huruf...</div>";
        return
    }
    resultsDiv.innerHTML = "<div class='p-2 text-primary'>Mencari...</div>";
    timeout = setTimeout(async () => {
        await loadWilayahData();
        const resultsArray = wilayahData.filter(item => item.kecamatan.toLowerCase().includes(keyword));
        if (resultsArray.length === 0) {
            resultsDiv.innerHTML = "<div class='p-2 text-danger'>Tidak ada hasil ditemukan</div>";
            return
        }
        resultsDiv.innerHTML = resultsArray.slice(0, 50).map(item => `<div class="result-item" data-kec="${item.kecamatan}" data-kab="${item.kabupaten}" data-prov="${item.provinsi}"><small>${item.kecamatan}, ${item.kabupaten}, ${item.provinsi}</small></div>`).join('');
        document.querySelectorAll('.result-item').forEach(el => {
            el.addEventListener('click', () => {
                const fullAddress = `${el.dataset.kec}, ${el.dataset.kab}, ${el.dataset.prov}`;
                document.getElementById('alamatutama').value = fullAddress;
                resultsDiv.innerHTML = ""
            })
        })
    }, 400)
});
//------------------------------------------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzVsoly_ogNtebfn1A5CqPy1XVG69TEqg_PUQk6Rb8oV7daLEsbtzEftD-mVfhj19cnQw/exec';
const form = document.getElementById('orderForm');
const status = document.getElementById('status');
const tombol = document.getElementById('tombolformsubmit');
form.addEventListener('submit', e => {
    e.preventDefault();
    tombol.disabled = true;
    tombol.textContent = "Mengirim...";
    status.textContent = "Sedang mengirim data pesanan...";
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        status.textContent = "Data Pesanan berhasil dikirim!";
        tombol.textContent = "Terkirim ✅";
        const nama = form.nama.value || 'Pelanggan';
        const paketobat = form.paket.value || 'Produk';
        form.reset();
        document.getElementById("judulModal").innerHTML = `<span class="text-uppercase">Halo Pak/Bu ${nama}</span>`;
        document.getElementById("thanksText").innerHTML = `<div class="text-center bg-light rounded-4 shadow-sm"><img class="img-thumbnail rounded-5" style="width: 100%; max-width: 200px;" src="/assets/dokter.webp" alt=""><p class="h5 fw-bold text-success my-2">Terima Kasih Telah Melakukan Pengisian Formulir Pemesanan ${paketobat}</p><blockquote class="fst-italic text-secondary lh-sm">"Kami Doakan Semoga Dengan Perantara Obat Jantung Xerdiove Ini, Penyakit Jantung Anda Dapat Secepatnya Sembuh seperti Pasien Kami yang sudah Berhasil Sembuh. AMIIIN YAROBBAL'ALAMIN"</blockquote><p class="h6 mb-2">Selanjutnya klik tombol <span class="fw-semibold text-success">Konfirmasi Pemesanan</span> di bawah ini</p><p class="lh-sm h6">Agar Anda dapat langsung terhubung dengan kami untuk melakukan konfirmasi pesanan</p></div>`;
        const modal = new bootstrap.Modal(document.getElementById('thanksModal'));
        modal.show();
        const waPenjual = '6285185044075';
        const pesan = `Halo Dok, Saya sudah melakukan pemesanan *${paketobat}* atas nama *${nama}*. Mohon segera diproses ya. Terima kasih :)`;
        const waLink = `https://wa.me/${waPenjual}?text=${encodeURIComponent(pesan)}`;
        document.getElementById("btnWA").onclick = () => {
            window.open(waLink, '_blank')
        }
    }).catch(error => {
        status.textContent = "Gagal mengirim data.";
        console.error('Error!', error.message);
        tombol.disabled = false;
        tombol.textContent = "Kirim Ulang Pesanan"
    });
});



