import "@testing-library/jest-dom/extend-expect"; // Mengimpor ekstensi pengujian Jest-dom

// Mengkonfigurasi pengujian asinkron
jest.setTimeout(10000); // Timeout tes setelah 10 detik

// Setup khusus untuk semua tes
beforeAll(() => {
  // Lakukan setup global jika diperlukan
});

// Setup umum yang berlaku untuk seluruh tes
beforeEach(() => {
  // Lakukan setup umum jika diperlukan
});

// Cleanup yang berlaku untuk seluruh tes
afterEach(() => {
  // Melakukan pembersihan setelah setiap tes
});
