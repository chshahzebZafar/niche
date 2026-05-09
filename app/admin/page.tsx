"use client";

import { useState, useEffect } from "react";

// Force dynamic rendering to prevent 404 on direct access
export const dynamic = "force-dynamic";

interface Submission {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  userType: string;
  industry: string;
  problem: string;
  referralSource: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check if already authenticated (session storage)
  useEffect(() => {
    const auth = sessionStorage.getItem("niche_admin_auth");
    const savedPassword = sessionStorage.getItem("niche_admin_pass");
    if (auth === "true" && savedPassword) {
      setIsAuthenticated(true);
      setPassword(savedPassword);
    }
  }, []);

  // Fetch submissions when authenticated and password is set
  useEffect(() => {
    if (isAuthenticated && password) {
      fetchSubmissions();
    }
  }, [isAuthenticated]);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/submissions", {
        headers: {
          "x-admin-password": password,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.reverse());
      }
    } catch (err) {
      console.error("Failed to fetch submissions:", err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("niche_admin_auth", "true");
        sessionStorage.setItem("niche_admin_pass", password);
      } else {
        setError("Incorrect password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setSubmissions([]);
    sessionStorage.removeItem("niche_admin_auth");
    sessionStorage.removeItem("niche_admin_pass");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0D0D1A] text-white flex items-center justify-center">
        <div className="glass-card rounded-2xl p-8 w-full max-w-md">
          <h1 className="font-display text-2xl font-bold mb-2 text-center">
            Admin <span className="text-violet-400">Access</span>
          </h1>
          <p className="text-white/60 text-center mb-6 text-sm">
            Enter password to view submissions
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg disabled:opacity-50"
            >
              {loading ? "Checking..." : "Access Submissions"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D1A] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="font-display text-2xl md:text-3xl font-bold">
            NICHE Waitlist <span className="text-violet-400">Submissions</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-white/60 text-sm">
              Total: <span className="text-white font-bold">{submissions.length}</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-20 text-white/40">
            <p className="text-xl">No submissions yet</p>
            <p className="mt-2">Form submissions will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="glass-card rounded-xl p-4 md:p-6 hover:border-violet-500/30 transition-all"
              >
                <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-xs">Name:</span>
                    <span className="font-semibold text-sm">{sub.fullName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-xs">Email:</span>
                    <a 
                      href={`mailto:${sub.email}`}
                      className="text-violet-400 hover:underline text-sm"
                    >
                      {sub.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-xs">Type:</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      sub.userType === "builder" 
                        ? "bg-blue-500/20 text-blue-400" 
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {sub.userType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-xs">Industry:</span>
                    <span className="text-sm">{sub.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-white/40 text-xs">Submitted:</span>
                    <span className="text-white/60 text-xs">
                      {new Date(sub.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-2">Problem/Feedback:</p>
                  <p className="text-white/80 text-sm whitespace-pre-wrap">{sub.problem}</p>
                </div>
                {sub.referralSource && sub.referralSource !== "Not provided" && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-white/40 text-xs">Referred by: </span>
                    <span className="text-white/60 text-sm">{sub.referralSource}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
