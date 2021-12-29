import { Breakpoint, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export function useScreenSize(size: Breakpoint | number) {
  const theme = useTheme();
  return useMediaQuery((theme.breakpoints.up(size)));
}
