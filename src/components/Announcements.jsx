import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./Announcements.css";
import WhatsApp from "./WhatsApp";

const convertBlocksToMarkdown = (blocks) => {
  if (!blocks) return "";
  return blocks
    .map((block) => block.children.map((child) => child.text).join(""))
    .join("\n\n");
};

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const ANNOUNCEMENTS_PER_PAGE = 3;

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const API_URL =
          import.meta.env.VITE_STRAPI_API_URL || "http://localhost:1337";
        const response = await fetch(
          `${API_URL}/api/announcements?sort=publishedAt:desc`
        );
        const data = await response.json();
        setAnnouncements(data.data);
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      }
    }
    fetchAnnouncements();
  }, []);

  const dateMonthDayOptions = {
    month: "short",
    day: "numeric",
  };
  const dateYearOptions = {
    year: "numeric",
  };

  // --- Pagination Logic ---
  // Ensure totalPages is at least 1 to avoid "Page 1 of 0"
  const totalPages = Math.max(
    1,
    Math.ceil(announcements.length / ANNOUNCEMENTS_PER_PAGE)
  );

  const startIndex = (currentPage - 1) * ANNOUNCEMENTS_PER_PAGE;
  const endIndex = startIndex + ANNOUNCEMENTS_PER_PAGE;

  const currentAnnouncements = announcements.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div
      id="announcements"
      className={`announcements-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="announcements-content-wrapper">
        <h2>Announcements</h2>

        {/* --- CONDITIONAL RENDERING --- */}
        {announcements.length > 0 ? (
          /* IF THERE ARE ANNOUNCEMENTS: Show the Box & List & Controls */
          <div className="announcements-container">
            <div className="announcements-list" key={currentPage}>
              {currentAnnouncements.map((announcement) => {
                const publishedDate = announcement.publishedAt
                  ? new Date(announcement.publishedAt)
                  : null;

                return (
                  <div key={announcement.id} className="announcement-card">
                    <div className="announcement-date">
                      {publishedDate ? (
                        <>
                          <span className="date-month-day">
                            {publishedDate.toLocaleDateString(
                              "en-GB",
                              dateMonthDayOptions
                            )}
                          </span>
                          <span className="date-year">
                            {publishedDate.toLocaleDateString(
                              "en-GB",
                              dateYearOptions
                            )}
                          </span>
                        </>
                      ) : (
                        <span>No Date</span>
                      )}
                    </div>
                    <div className="announcement-main">
                      <h3>{announcement.title}</h3>
                      <div className="announcement-content">
                        <ReactMarkdown>
                          {convertBlocksToMarkdown(announcement.content)}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- Pagination Controls (ALWAYS VISIBLE) --- */}
            <div className="pagination-controls">
              <button
                className="pagination-btn"
                onClick={goToPrevPage}
                // Disable if on page 1
                disabled={currentPage === 1}
              >
                <FaArrowLeft />
                <span>Previous</span>
              </button>

              <span className="pagination-status">
                Page {currentPage} of {totalPages}
              </span>

              <button
                className="pagination-btn"
                onClick={goToNextPage}
                // Disable if on the last page
                disabled={currentPage === totalPages}
              >
                <span>Next</span>
                <FaArrowRight />
              </button>
            </div>
            {/* --- End Controls --- */}
          </div>
        ) : (
          /* ELSE (NO ANNOUNCEMENTS): Show clean text, NO BOX */
          <p className="no-announcements-message">
            There are no new announcements at this time.
          </p>
        )}

        <WhatsApp />
      </div>
    </div>
  );
}

export default Announcements;
