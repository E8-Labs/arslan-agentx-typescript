import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

type ProgressBarProps = {
  value: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(value);
  }, [value]);

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#7902DF",
            },
            backgroundColor: "#7902DF35",
          }}
        />
      </Box>
    </div>
  );
};

export default ProgressBar;
