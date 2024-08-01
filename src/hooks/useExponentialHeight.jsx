import { useEffect } from "react";
import { debounce } from "../util/debounce";

const getZoomLevel = () => {
  const zoomLevel =
    Math.pow(window.devicePixelRatio, 2 / window.devicePixelRatio) || 1;
  return Math.max(zoomLevel, 0.06);
};

const getDynamicHeightRange = (zoomLevel) => {
  const minHeight = 0.93 + (0.995 - 0.93) * (1 - zoomLevel);
  const maxHeight = 0.94 + (0.995 - 0.94) * (1 - zoomLevel);
  return { minHeight, maxHeight };
};

export const useExponentialHeight = (base, multiplier, handleHeightChange) => {
  const getExponentialHeight = (screenHeight) => {
    let zoomLevel = getZoomLevel();
    const adjustedMultiplier = multiplier / zoomLevel;
    let { minHeight, maxHeight } = getDynamicHeightRange(zoomLevel);
    const height = Math.pow(base, screenHeight / adjustedMultiplier);

    if (screenHeight <= 330) {
      return maxHeight;
    }

    return Math.max(minHeight, Math.min(maxHeight, height));
  };

  useEffect(() => {
    handleHeightChange(getExponentialHeight(window.innerHeight));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      handleHeightChange(getExponentialHeight(window.innerHeight));
    };

    const debouncedHandleResize = debounce(handleResize, 10);

    window.addEventListener("resize", debouncedHandleResize);
    window.addEventListener("zoom", debouncedHandleResize);
    window.addEventListener("fullscreenchange", handleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      window.removeEventListener("zoom", debouncedHandleResize);
      window.removeEventListener("fullscreenchange", handleResize);
    };
  }, []);
};
