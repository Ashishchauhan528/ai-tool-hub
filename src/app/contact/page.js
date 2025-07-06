export default function ContactPage() {
  return (
    <div style={{
      maxWidth: "700px",
      margin: "4rem auto",
      padding: "2rem",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1 style={{
        fontSize: "2rem",
        fontWeight: "700",
        color: "#1e3a8a",
        marginBottom: "1.5rem"
      }}>
        Contact Us
      </h1>

      <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: "1.7" }}>
        Have feedback, suggestions, or collaboration ideas? Feel free to reach out.
      </p>

      <ul style={{ marginTop: "1.5rem", fontSize: "1.05rem", color: "#4b5563", lineHeight: "1.8", listStyle: "none", paddingLeft: 0 }}>
        <li>
          📧 Email: <a href="mailto:chauhanashish0831@gmail.com" style={{ color: "#2563eb", textDecoration: "none" }}>
            chauhanashish0831@gmail.com
          </a>
        </li>
        <li>
          💻 GitHub: <a href="https://github.com/Ashishchauhan528" target="_blank" style={{ color: "#2563eb", textDecoration: "none" }}>
            @Ashishchauhan528
          </a>
        </li>
        <li>
          🔗 LinkedIn: <a href="https://www.linkedin.com/in/ashish-chauhan-22b326297/" target="_blank" style={{ color: "#2563eb", textDecoration: "none" }}>
            Ashish Chauhan
          </a>
        </li>
      </ul>
    </div>
  );
}
