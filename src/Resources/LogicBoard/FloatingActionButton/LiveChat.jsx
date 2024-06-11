import { useState } from "react";
import stringSimilarity from "string-similarity"; // Import the string-similarity library

export function useChatLogic() {
  const [user, setUser] = useState("");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async (question) => {
    if (question.trim() !== "") {
      // Simulasikan pemrosesan asynchronous dengan setTimeout
      return new Promise((resolve) => {
        setTimeout(() => {
          setMessages((prevMessages) => [...prevMessages, { text: question, type: "question" }, { text: answerQuestion(question, user), type: "answer" }]);
          setInputText("");
          resolve(); // Resolve promise setelah pemrosesan selesai
        }, 100); // Contoh penundaan selama 1 detik (bisa disesuaikan)
      });
    }
  };

  //   const Links = {
  //     facebook: "https://www.facebook.com",
  //     google: "https://www.google.com",
  //     twitter: "https://www.twitter.com",
  //     panduancode: "https://www.panduancode.com",
  //   };

  //   const getLink = (siteName) => `klik disini untuk membuka panduancode <a href="${Links[siteName]}">${siteName}</a>`;

  const answerQuestion = (question, user) => {
    const lowercaseQuestion = question.toLowerCase();
    const answers = {
      "Whats App ": "Hello, Ada yang bisa saya bantu?",
      "Whatsapp ": "Hello, Ada yang bisa saya bantu?",
      "whatsapp ": "Hello, Ada yang bisa saya bantu?",
      "wa ": "Hello, Ada yang bisa saya bantu?",
      "WA ": "Hello, Ada yang bisa saya bantu?",
      "Hello ": "Hello, Ada yang bisa saya bantu?",
      "siapa pembuat codecrafters": "Codecrafters dibuat oleh tim pengembang berbakat yang berfokus pada pengembangan situs web dan aplikasi.",
      "berapa lama waktu yang diperlukan untuk membuat situs web":
        "Waktu yang diperlukan untuk membuat situs web dapat bervariasi tergantung pada kompleksitasnya. Situs web sederhana mungkin memakan waktu beberapa minggu, sementara proyek yang lebih besar bisa memakan beberapa bulan.",
      "apa yang dibutuhkan untuk memulai pembuatan situs web": "Untuk memulai, Anda memerlukan ide, domain (alamat situs web), hosting (tempat situs web di-host), serta pengetahuan dalam pemrograman dan desain web.",
      "apa yang dimaksud dengan domain": "Domain adalah alamat situs web yang digunakan untuk mengakses situs web Anda. Contoh domain adalah 'www.namasitusweb.com'.",
      "bagaimana cara memilih domain yang tepat": "Pilih domain yang mencerminkan identitas bisnis atau situs web Anda. Pastikan domain tersebut mudah diingat dan relevan dengan isi situs web.",
      "apa itu hosting web": "Hosting web adalah tempat di mana situs web Anda disimpan dan diakses secara online. Anda dapat memilih hosting berbayar atau gratis, tergantung kebutuhan Anda.",
      "bagaimana cara memilih penyedia hosting yang baik": "Pilih penyedia hosting yang dapat menyediakan kecepatan, keandalan, dan dukungan pelanggan yang baik. Baca ulasan pengguna dan bandingkan berbagai penyedia hosting.",
      "apa yang perlu dipertimbangkan dalam desain situs web": "Pertimbangkan tata letak, warna, jenis huruf, navigasi, responsivitas, dan pengalaman pengguna yang baik dalam desain situs web Anda.",
      "bagaimana proses pembayaran untuk layanan pembuatan situs web": "Proses pembayaran bervariasi tergantung pada penyedia layanan. Biasanya, Anda akan menerima penawaran, menyetujui, dan membayar sebagian uang muka untuk memulai proyek.",
      "apa yang harus saya pertimbangkan dalam pemilihan platform e-commerce": "Pertimbangkan fitur-fitur seperti keamanan, skala, integrasi pembayaran, manajemen inventaris, dan kemudahan penggunaan dalam memilih platform e-commerce.",
      "apa proses pemesanan produk di situs web e-commerce": "Pada umumnya, Anda akan memilih produk, menambahkannya ke keranjang belanja, masuk, melakukan pembayaran, dan mengkonfirmasi pesanan Anda.",
    };

    // Mencari pertanyaan yang mendekati dengan metode perbandingan atau similarity
    let bestMatch = "";
    let bestMatchScore = 0;

    for (const q in answers) {
      const similarity = stringSimilarity.compareTwoStrings(lowercaseQuestion, q);
      if (similarity > bestMatchScore) {
        bestMatch = q;
        bestMatchScore = similarity;
      }
    }

    if (bestMatchScore >= 0.3) {
      return answers[bestMatch].replace("%U%", user);
    } else {
      return "Maaf, saya tidak mengenali pertanyaan Anda.";
    }
  };

  return {
    user,
    inputText,
    messages,
    handleInputChange,
    handleSendMessage,
  };
}
