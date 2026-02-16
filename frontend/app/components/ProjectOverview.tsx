"use client";

import { Box, Container, Typography, Card, CardContent, Chip, Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { useMediaQuery, useTheme } from "@mui/material";

export default function ProjectOverview() {
  const theme = useTheme();
  const darkMode = useMediaQuery(theme.breakpoints.up("xs"));

  const technologies = [
    "Next.js 16+",
    "TypeScript",
    "React 19",
    "Material-UI",
    "TailwindCSS",
    "Jest",
  ];

  const features = [
    { title: "Responsive Design", description: "Works seamlessly on mobile, tablet, and desktop" },
    { title: "Dark/Light Mode", description: "Auto-detects system preference with manual toggle" },
    { title: "Page Analytics", description: "IP-based geolocation tracking with visit history and filtering" },
    { title: "Contact Form", description: "Email integration for visitor messages" },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: theme.palette.mode === "dark" ? "#132f4c" : "#ffffff",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 1,
            color: "text.primary",
          }}
        >
          About This Project
        </Typography>

        <Box
          sx={{
            width: "5rem",
            height: "4px",
            margin: "0.5rem auto 2rem auto",
            backgroundColor: "#3a86ff",
            borderRadius: "2px",
          }}
        />

        {/* Main Description */}
        <Card
          sx={{
            mb: 4,
            backgroundColor: theme.palette.mode === "dark" ? "rgba(58, 134, 255, 0.05)" : "rgba(58, 134, 255, 0.02)",
            border: `1px solid ${theme.palette.mode === "dark" ? "rgba(58, 134, 255, 0.1)" : "rgba(58, 134, 255, 0.1)"}`,
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Project Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
              This portfolio website showcases a modern, full-featured personal portfolio built with cutting-edge web technologies. 
              It demonstrates best practices in responsive design, accessibility, and user experience. The site includes smooth 
              scrolling navigation, theme switching, a functional contact form, and advanced analytics tracking with geolocation data.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Built using a component-based architecture with comprehensive unit tests, the project emphasizes code quality, 
              maintainability, and scalability. It serves as a template for creating professional developer portfolios that 
              stand out to potential employers and clients.
            </Typography>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}>
            Technology Stack
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.mode === "dark" ? "rgba(58, 134, 255, 0.1)" : "rgba(58, 134, 255, 0.05)",
                  borderColor: "#3a86ff",
                  color: "#3a86ff",
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Features Grid */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}>
            Key Features
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            {features.map((feature) => (
              <Card
                key={feature.title}
                sx={{
                  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)",
                  borderLeft: "4px solid #3a86ff",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: "text.primary" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Tech Specs */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}>
            Technical Specifications
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Box sx={{ p: 2, backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)", borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#3a86ff", mb: 0.5 }}>
                Frontend Framework
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Next.js 16+ with App Router for optimized performance and SSR
              </Typography>
            </Box>
            <Box sx={{ p: 2, backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)", borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#3a86ff", mb: 0.5 }}>
                Styling
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Material-UI (MUI) v5+ with custom theme system for dark/light modes
              </Typography>
            </Box>
            <Box sx={{ p: 2, backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)", borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#3a86ff", mb: 0.5 }}>
                Testing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jest + React Testing Library with comprehensive unit tests
              </Typography>
            </Box>
            <Box sx={{ p: 2, backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)", borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#3a86ff", mb: 0.5 }}>
                Analytics
              </Typography>
              <Typography variant="body2" color="text.secondary">
                IP-based geolocation via ipapi.co with localStorage persistence
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Source Code Link */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Want to see how it&apos;s built?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/alexandergshaw/alex-shaw-react-personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<FaGithub />}
            sx={{
              background: "linear-gradient(to right, #3a86ff, #5e60ce)",
              boxShadow: "0 4px 14px rgba(58, 134, 255, 0.4)",
              transition: "all 0.2s ease",
              "&:hover": {
                boxShadow: "0 6px 20px rgba(58, 134, 255, 0.6)",
                transform: "translateY(-2px)",
              },
            }}
          >
            View Source Code on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
