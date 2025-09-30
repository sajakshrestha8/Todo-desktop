interface IButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  backgroundColor?: string;
  hoverColor?: string;
  isBold?: boolean
  onClick: () => void;
}

function Button({
  label,
  variant = "primary",
  backgroundColor,
  hoverColor,
  isBold = false,
  onClick,
}: IButtonProps) {
  const colors = {
    primary: { bg: "#3B82F6", hover: "#2563EB" },
    secondary: { bg: "#E5E7EB", hover: "#D1D5DB" },
    danger: { bg: "#EF4444", hover: "#DC2626" },
  };

  const defaultBg = backgroundColor ?? colors[variant].bg;
  const defaultHover = hoverColor ?? colors[variant].hover;

  return (
    <button
      style={{
        padding: "12px 20px",
        border: "none",
        backgroundColor: defaultBg,
        borderRadius: "8px",
        color: "white",
        fontSize: "16px",
        fontWeight: isBold ? 600 : 500,
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        minWidth: "100px",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = defaultHover)
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = defaultBg)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
