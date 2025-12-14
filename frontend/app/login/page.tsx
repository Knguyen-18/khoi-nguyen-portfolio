"use client";

/**
 * LOGIN PAGE
 * 
 * A professional login page with the following features:
 * - Email and password input fields
 * - Form validation
 * - Dark/light mode support
 * - Responsive design
 * - Modern Material-UI styling
 */

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { IoMoon, IoSunny } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  
  // State management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference for dark mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  // Create theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#3b82f6",
      },
      secondary: {
        main: "#8b5cf6",
      },
    },
  });

  // Form validation
  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    // TODO: Implement actual authentication logic here
    console.log("Login attempt:", { email, password });
    
    // For now, just show a success message and redirect
    alert("Login successful! (Demo mode)");
    router.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isDarkMode
            ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
            : "linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)",
          position: "relative",
        }}
      >
        {/* Theme Toggle Button */}
        <IconButton
          onClick={() => setIsDarkMode(!isDarkMode)}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: isDarkMode ? "#fbbf24" : "#3b82f6",
          }}
        >
          {isDarkMode ? <IoSunny size={24} /> : <IoMoon size={24} />}
        </IconButton>

        {/* Back to Home Link */}
        <Link
          href="/"
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            textDecoration: "none",
            color: isDarkMode ? "#fff" : "#1e293b",
            fontWeight: 500,
            "&:hover": {
              color: "#3b82f6",
            },
          }}
        >
          ← Back to Home
        </Link>

        <Container maxWidth="sm">
          <Card
            elevation={8}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Header */}
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  mb: 1,
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  mb: 4,
                }}
              >
                Sign in to your account
              </Typography>

              {/* Error Alert */}
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  variant="outlined"
                  autoComplete="email"
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  variant="outlined"
                  autoComplete="current-password"
                  sx={{ mb: 3 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <AiOutlineEyeInvisible />
                          ) : (
                            <AiOutlineEye />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  Sign In
                </Button>
              </form>

              {/* Additional Links */}
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    color: "primary.main",
                    fontSize: "0.875rem",
                  }}
                >
                  Forgot password?
                </Link>
              </Box>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{" "}
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      color: "primary.main",
                      fontWeight: 500,
                    }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
