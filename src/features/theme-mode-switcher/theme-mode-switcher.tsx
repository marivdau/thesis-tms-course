import { useEffect, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import { themeModeChangeToDark, themeModeChangeToLight } from './theme-mode-switcher.slice';
import { IconButton } from '@mui/material';

export const ThemeModeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark', isDark);
  }, [isDark]);

  const dispatch = useAppDispatch();

  return (
    <ColorThemeButtonDiv>
      {
        isDark
          ?
          <IconButton
            onClick={() => { dispatch(themeModeChangeToLight()); setIsDark(!isDark) }}
            title='Turn on light mode'
          >
            <Brightness7Icon
              sx={{ color: 'var(--text-primary-second-color)' }}
              fontSize='large'
            />
          </IconButton>
          :
          <IconButton
            onClick={() => { dispatch(themeModeChangeToDark()); setIsDark(!isDark) }}
            title='Turn on dark mode'
          >
            <Brightness4Icon
              fontSize='large'
            />
          </IconButton>
      }
    </ColorThemeButtonDiv>
  );
};

const ColorThemeButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 90%;
  left: 2%;
`;
