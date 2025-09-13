const AddTask = () => {
  return (
    <div
      style={{
        backgroundColor: "#F9FAFB",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3B82F6")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
        />
        <button
          style={{
            padding: "12px 20px",
            border: "none",
            backgroundColor: "#3B82F6",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#2563EB")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#3B82F6")
          }
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
