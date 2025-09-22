import React from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  title = "Confirm Deletion",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.message}>{message}</p>

        <div style={styles.actions}>
          <button
            onClick={onCancel}
            style={{ ...styles.button, ...styles.cancelBtn }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{ ...styles.button, ...styles.deleteBtn }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  container: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "12px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "8px",
  },
  message: {
    fontSize: "14px",
    color: "#4b5563",
    marginBottom: "20px",
    lineHeight: 1.4,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s ease-in-out",
  },
  cancelBtn: {
    backgroundColor: "#f3f4f6",
    color: "#374151",
  },
  deleteBtn: {
    backgroundColor: "#dc2626",
    color: "white",
  },
};

export default ConfirmModal;
