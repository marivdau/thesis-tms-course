import { useEffect, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import { themeModeChangeToDark } from './theme-mode-switcher.slice';
import { IconButton } from '@mui/material';

export const ThemeModeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark', isDark);
  }, [isDark]);

  const dispatch = useAppDispatch();

  return (
    <ColorThemeButtonDiv>
      <IconButton onClick={() => { dispatch(themeModeChangeToDark()); setIsDark(!isDark) }} >
        {isDark ? <Brightness7Icon sx={{color: 'var(--text-primary-second-color)'}} /> : <Brightness4Icon />}
      </IconButton>

    </ColorThemeButtonDiv>
  );
};

const ColorThemeButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
