// GoogleLogin.jsx
import { onMount, type ParentComponent } from 'solid-js';


interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}

const GoogleLogin:ParentComponent = () => {
  let buttonDiv; // Ref untuk elemen DOM tempat tombol Google dirender

  onMount(() => {
    // Pastikan SDK Google sudah siap dimuat
    if (window.google) {
      console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)
      // 1. Inisialisasi Google Auth
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      });

      // 2. Render tombol bawaan Google secara otomatis ke dalam elemen ref
      window.google.accounts.id.renderButton(
        buttonDiv,
        { theme: 'outline', size: 'large' } // Opsi kustomisasi tampilan
      );
    }
  });

  // 3. Fungsi Callback saat pengguna selesai login
  async function handleCredentialResponse(response: GoogleCredentialResponse) {
    // response.credential berisi ID Token (JWT)
    console.log('Google ID Token:', response.credential);

    // Kirim ID Token ke backend Express.js kamu
    // try {
    //   const res = await fetch('http://localhost:5000/api/auth/google', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ idToken: response.credential })
    //   });

    //   const data = await res.json();
    //   console.log('Response backend:', data);
    // } catch (err) {
    //   console.error('Gagal mengirim token ke backend:', err);
    // }
  }

  return (
      <div class='-mt-3' ref={buttonDiv}>button</div>
  );
}

export default GoogleLogin;