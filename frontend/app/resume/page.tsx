"use client";

import { Box, Container, Typography, Divider, Chip } from "@mui/material";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <Box sx={{ 
      bgcolor: '#ffffff', 
      minHeight: '100vh',
      py: 4,
      '@media print': {
        py: 0,
      }
    }}>
      <Container maxWidth="md" sx={{ 
        bgcolor: 'white',
        p: 4,
        '@media print': {
          maxWidth: '100%',
          p: 2,
        }
      }}>
        {/* Header */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#0a1929', mb: 1 }}>
            Khoi Nguyen
          </Typography>
          <Typography variant="h6" sx={{ color: '#3a86ff', mb: 2, fontWeight: 500 }}>
            Full Stack Developer
          </Typography>
          
          {/* Contact Info */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: 2, 
            justifyContent: 'center',
            fontSize: '0.9rem',
            color: '#555'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <FaEnvelope size={14} />
              <Typography variant="body2">knguyen18@mccneb.edu</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <FaGithub size={14} />
              <Typography variant="body2">github.com/knguyen-18</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <FaLinkedin size={14} />
              <Typography variant="body2">linkedin.com/in/knguyen-18</Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Professional Summary */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#0a1929', mb: 1.5 }}>
            Professional Summary
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.7 }}>
            Full Stack Developer with over 5 years of experience in web development, specializing in creating
            high-performance, responsive web applications using React, Next.js, and Node.js. Strong focus on 
            user experience, clean maintainable code, and modern development practices. Proven track record of 
            improving application performance and implementing efficient CI/CD pipelines.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Experience */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#0a1929', mb: 2 }}>
            Professional Experience
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#3a86ff' }}>
                Frontend Development Team Lead
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
                2021 - Present
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#555', mb: 1, fontWeight: 500 }}>
              XYZ Technologies
            </Typography>
            <Box component="ul" sx={{ ml: 2, color: '#333' }}>
              <li>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Led a team of frontend developers in building scalable web applications
                </Typography>
              </li>
              <li>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Improved application performance by 40% through code optimization and lazy loading strategies
                </Typography>
              </li>
              <li>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Implemented CI/CD pipelines that reduced deployment time by 65%
                </Typography>
              </li>
              <li>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Mentored junior developers and established coding standards and best practices
                </Typography>
              </li>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#3a86ff' }}>
                Full Stack Developer
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
                2019 - 2021
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#555', mb: 1, fontWeight: 500 }}>
              Tech Innovations Inc.
            </Typography>
            <Box component="ul" sx={{ ml: 2, color: '#333' }}>
              <li>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Developed and maintained full-stack web applications using React and Node.js
                </Typography>
              </li>
              <li>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Collaborated with cross-functional teams to deliver projects on time
                </Typography>
              </li>
              <li>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Contributed to open-source projects and shared knowledge with the development community
                </Typography>
              </li>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Featured Projects */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#0a1929', mb: 2 }}>
            Featured Projects
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#3a86ff', mb: 0.5 }}>
              E-commerce Platform
            </Typography>
            <Typography variant="body2" sx={{ color: '#333', mb: 0.5 }}>
              A full-stack e-commerce solution with React, Node.js, and Stripe integration that handles 
              10,000+ monthly transactions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {["React", "Node.js", "MongoDB", "Stripe"].map((tech) => (
                <Chip key={tech} label={tech} size="small" sx={{ fontSize: '0.75rem' }} />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#3a86ff', mb: 0.5 }}>
              SaaS Analytics Dashboard
            </Typography>
            <Typography variant="body2" sx={{ color: '#333', mb: 0.5 }}>
              An analytics dashboard for SaaS businesses with real-time data visualization and custom 
              reporting features.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {["Next.js", "TypeScript", "D3.js", "PostgreSQL"].map((tech) => (
                <Chip key={tech} label={tech} size="small" sx={{ fontSize: '0.75rem' }} />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#3a86ff', mb: 0.5 }}>
              AI Chat Application
            </Typography>
            <Typography variant="body2" sx={{ color: '#333', mb: 0.5 }}>
              A real-time chat application with AI-powered responses and language translation supporting 20+ languages.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {["React", "Socket.io", "OpenAI API", "Redis"].map((tech) => (
                <Chip key={tech} label={tech} size="small" sx={{ fontSize: '0.75rem' }} />
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Technical Skills */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#0a1929', mb: 2 }}>
            Technical Skills
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#555', mb: 1 }}>
              Frontend Development
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Material-UI", "Redux"].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#555', mb: 1 }}>
              Backend Development
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {["Node.js", "Express", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL", "MySQL"].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#555', mb: 1 }}>
              Tools & Technologies
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {["Docker", "AWS", "CI/CD", "Jest", "Git", "GitHub", "Firebase", "Webpack", "Figma"].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Education */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#0a1929', mb: 2 }}>
            Education
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#3a86ff' }}>
              Bachelor of Science in Computer Science
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
              2015 - 2019
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Metropolitan Community College
          </Typography>
        </Box>

        {/* Print Button (hidden when printing) */}
        <Box sx={{ 
          mt: 4, 
          textAlign: 'center',
          '@media print': {
            display: 'none'
          }
        }}>
          <button 
            onClick={() => window.print()}
            style={{
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'white',
              background: 'linear-gradient(to right, #3a86ff, #5e60ce)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Download as PDF
          </button>
        </Box>
      </Container>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </Box>
  );
}
