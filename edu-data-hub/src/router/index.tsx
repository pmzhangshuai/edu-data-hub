import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { GovLayout } from "@/components/layout/GovLayout";
import { SchoolLayout } from "@/components/layout/SchoolLayout";
import GovDashboard from "@/pages/gov/Dashboard";
import SchoolDashboard from "@/pages/school/Dashboard";
import GovPlaceholder from "@/pages/gov/Placeholder";
import SchoolPlaceholder from "@/pages/school/Placeholder";
import { applyTheme, govTheme, schoolTheme } from "@/styles/themes";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/gov")) {
      applyTheme(govTheme);
    } else if (location.pathname.startsWith("/school")) {
      applyTheme(schoolTheme);
    }
  }, [location.pathname]);

  return <>{children}</>;
}

export function Router() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Gov routes */}
        <Route path="/gov" element={<GovLayout><GovDashboard /></GovLayout>} />
        <Route path="/gov/tasks" element={<GovLayout><GovPlaceholder /></GovLayout>} />
        <Route path="/gov/tasks/create" element={<GovLayout><GovPlaceholder /></GovLayout>} />
        <Route path="/gov/indicators" element={<GovLayout><GovPlaceholder /></GovLayout>} />
        <Route path="/gov/monitor" element={<GovLayout><GovPlaceholder /></GovLayout>} />
        <Route path="/gov/quality" element={<GovLayout><GovPlaceholder /></GovLayout>} />
        <Route path="/gov/analysis" element={<GovLayout><GovPlaceholder /></GovLayout>} />
        <Route path="/gov/settings" element={<GovLayout><GovPlaceholder /></GovLayout>} />

        {/* School routes */}
        <Route path="/school" element={<SchoolLayout><SchoolDashboard /></SchoolLayout>} />
        <Route path="/school/tasks" element={<SchoolLayout><SchoolPlaceholder /></SchoolLayout>} />
        <Route path="/school/base-data" element={<SchoolLayout><SchoolPlaceholder /></SchoolLayout>} />
        <Route path="/school/audit" element={<SchoolLayout><SchoolPlaceholder /></SchoolLayout>} />
        <Route path="/school/analysis" element={<SchoolLayout><SchoolPlaceholder /></SchoolLayout>} />
        <Route path="/school/settings" element={<SchoolLayout><SchoolPlaceholder /></SchoolLayout>} />

        {/* Default redirect */}
        <Route path="*" element={<GovLayout><GovDashboard /></GovLayout>} />
      </Routes>
    </ThemeProvider>
  );
}
