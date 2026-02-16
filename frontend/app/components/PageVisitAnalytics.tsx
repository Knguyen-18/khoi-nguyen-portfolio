"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Modal, Paper, Button, CircularProgress, TextField } from "@mui/material";

const COUNT_KEY = "page_visit_count";
const LAST_VISIT_KEY = "page_last_visit";
const VISIT_HISTORY_KEY = "visit_history";

interface VisitRecord {
  timestamp: string;
  region: string;
}

const parseCount = (value: string | null) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
};

const fetchRegion = async (): Promise<string> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    const city = data.city || "Unknown";
    const country = data.country_name || "Unknown";
    return `${city}, ${country}`;
  } catch {
    return "Unknown Location";
  }
};

export default function PageVisitAnalytics() {
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitHistory, setVisitHistory] = useState<VisitRecord[]>([]);
  const [isLoadingRegion, setIsLoadingRegion] = useState(false);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const recordVisit = async () => {
      const storedCount = parseCount(window.localStorage.getItem(COUNT_KEY));
      const storedLastVisit = window.localStorage.getItem(LAST_VISIT_KEY);
      const storedHistory = window.localStorage.getItem(VISIT_HISTORY_KEY);
      
      const nextCount = storedCount + 1;
      const timestamp = new Date().toISOString();

      // Fetch region
      setIsLoadingRegion(true);
      const region = await fetchRegion();
      setIsLoadingRegion(false);

      // Update localStorage
      window.localStorage.setItem(COUNT_KEY, String(nextCount));
      window.localStorage.setItem(LAST_VISIT_KEY, timestamp);

      // Update visit history
      const history: VisitRecord[] = storedHistory ? JSON.parse(storedHistory) : [];
      history.push({ timestamp, region });
      window.localStorage.setItem(VISIT_HISTORY_KEY, JSON.stringify(history));

      // Update state
      setVisitCount(nextCount);
      setLastVisit(storedLastVisit);
      setVisitHistory(history);
    };

    recordVisit();
  }, []);

  const formattedLastVisit = lastVisit
    ? new Date(lastVisit).toLocaleString()
    : "First time here";

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleResetFilter = () => {
    setFilterText("");
  };

  const filteredHistory = visitHistory.filter((visit) =>
    visit.region.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <Box sx={{ textAlign: "center", cursor: "pointer" }} onClick={handleModalOpen}>
        <Typography
          variant="body2"
          color="text.secondary"
          role="button"
          sx={{ "&:hover": { color: "primary.main", textDecoration: "underline" } }}
        >
          Page visits (this device): {visitCount ?? "--"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Last visit: {formattedLastVisit}
        </Typography>
      </Box>

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "80vh",
            width: "90%",
            maxWidth: 500,
            p: 4,
            borderRadius: 2,
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Visit History
          </Typography>

          {isLoadingRegion && visitHistory.length === 0 ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
              <CircularProgress size={30} />
            </Box>
          ) : visitHistory.length === 0 ? (
            <Typography color="text.secondary">No visits recorded yet.</Typography>
          ) : (
            <>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <TextField
                  placeholder="Filter by region"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  size="small"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                    },
                  }}
                />
                <Button
                  variant="outlined"
                  onClick={handleResetFilter}
                  sx={{
                    whiteSpace: "nowrap",
                  }}
                >
                  Reset
                </Button>
              </Box>

              <Box>
                {filteredHistory.length === 0 ? (
                  <Typography color="text.secondary" sx={{ textAlign: "center", py: 2 }}>
                    No visits match your filter.
                  </Typography>
                ) : (
                  filteredHistory.map((visit, index) => (
                    <Box
                      key={index}
                      sx={{
                        py: 2,
                        px: 2,
                        mb: 1,
                        backgroundColor: "rgba(58, 134, 255, 0.05)",
                        borderRadius: 1,
                        borderLeft: "3px solid #3a86ff",
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {new Date(visit.timestamp).toLocaleString()}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        📍 {visit.region}
                      </Typography>
                    </Box>
                  ))
                )}
              </Box>
            </>
          )}

          <Button
            variant="contained"
            fullWidth
            onClick={handleModalClose}
            sx={{ mt: 3 }}
          >
            Close
          </Button>
        </Paper>
      </Modal>
    </>
  );
}
